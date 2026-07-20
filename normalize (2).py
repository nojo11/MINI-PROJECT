"""
normalize.py — preprocessing + obfuscation-detection features for MoMo SMS classifier.

This is the module that makes a classifier robust to evasion tricks:
- NFKC normalization
- confusable folding (Cyrillic/Greek/fullwidth -> Latin ASCII)
- zero-width / invisible character stripping
- boolean flags that fire on ANY obfuscation attempt (generalizes beyond seen tricks)

Run every raw message through normalize_message() BEFORE the model sees it.
Feed model: normalized_text + the flags below.
"""
import unicodedata
import regex as re

# --- minimal confusable map (extend as needed; folds look-alikes to ASCII) ---
CONFUSABLE_MAP = {
    # Cyrillic -> Latin
    'а':'a','е':'e','о':'o','р':'p','с':'c','у':'y','х':'x','ѕ':'s','і':'i','ј':'j',
    'А':'A','В':'B','Е':'E','К':'K','М':'M','Н':'H','О':'O','Р':'P','С':'C','Т':'T','Х':'X','У':'Y','І':'I',
    # Greek -> Latin
    'ο':'o','α':'a','ρ':'p','ν':'v','τ':'t','ι':'i','κ':'k','Ο':'O','Α':'A','Ρ':'P','Ε':'E','Τ':'T','Κ':'K','Ν':'N','Μ':'M','Χ':'X',
    # fullwidth digits/letters -> ASCII
    '０':'0','１':'1','２':'2','３':'3','４':'4','５':'5','６':'6','７':'7','８':'8','９':'9',
    'Ａ':'A','Ｂ':'B','Ｃ':'C','ｅ':'e','ｏ':'o','ｓ':'s',
}
# invisible / zero-width / bidi controls
INVISIBLE = ['\u200b','\u200c','\u200d','\u2060','\ufeff','\u00ad','\u180e',
             '\u200e','\u200f','\u202a','\u202b','\u202c','\u202d','\u202e',
             '\u2061','\u2062','\u2063','\u2064','\u034f']
INVISIBLE_RE = re.compile('[' + ''.join(INVISIBLE) + ']')

def has_invisible(s: str) -> bool:
    return bool(INVISIBLE_RE.search(s))

def has_confusable(s: str) -> bool:
    # any non-ASCII letter that maps to a Latin look-alike, OR any script-mixing within a word
    if any(ch in CONFUSABLE_MAP for ch in s):
        return True
    # script-mixing heuristic: a "word" containing both Latin and Cyrillic/Greek letters
    for token in re.findall(r'\w+', s):
        scripts = set()
        for ch in token:
            if ch.isalpha():
                try:
                    name = unicodedata.name(ch)
                    if 'CYRILLIC' in name: scripts.add('cyr')
                    elif 'GREEK' in name: scripts.add('grk')
                    elif 'LATIN' in name: scripts.add('lat')
                except ValueError:
                    pass
        if len(scripts) > 1:
            return True
    return False

def strip_invisible(s: str) -> str:
    return INVISIBLE_RE.sub('', s)

def fold_confusables(s: str) -> str:
    return ''.join(CONFUSABLE_MAP.get(ch, ch) for ch in s)

def normalize_message(raw: str) -> dict:
    """Return normalized text + obfuscation-detection features."""
    no_inv = strip_invisible(raw)
    nfkc = unicodedata.normalize('NFKC', no_inv)
    folded = fold_confusables(nfkc)
    # collapse repeated whitespace introduced by stripping
    normalized = re.sub(r'\s+', ' ', folded).strip()
    edit_gap = _levenshtein(raw.strip(), normalized)
    return {
        'normalized_text': normalized,
        'had_invisible_char': has_invisible(raw),
        'had_confusable': has_confusable(raw),
        'raw_vs_normalized_edit_distance': edit_gap,
        'obfuscation_suspected': has_invisible(raw) or has_confusable(raw),
    }

def _levenshtein(a: str, b: str) -> int:
    if a == b: return 0
    if not a: return len(b)
    if not b: return len(a)
    prev = list(range(len(b)+1))
    for i, ca in enumerate(a, 1):
        cur = [i]
        for j, cb in enumerate(b, 1):
            cur.append(min(prev[j]+1, cur[-1]+1, prev[j-1]+(ca!=cb)))
        prev = cur
    return prev[-1]

if __name__ == '__main__':
    tests = [
        "Ѕtanbіc Bank: verify your PIN",           # cyrillic S and i
        "Cοngratulations! You have wοn",            # greek o
        "Verify\u200b your\u200b account now",      # zero-width spaces
        "MTN MoMo: You have received GHS20.00",     # clean
    ]
    for t in tests:
        print(repr(t))
        print("  ->", normalize_message(t))
