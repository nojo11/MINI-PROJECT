# MoMo SMS Phishing Dataset (v2) — Ghanaian context

## Files
- `momo_sms_dataset_v2.jsonl` — 4,600 SMS-only entries. 55% illegitimate / 45% legitimate.
- `obfuscation_validation_set.jsonl` — 13 labeled test cases for verifying the normalizer catches confusables / zero-width tricks. NOT training data.
- `normalize.py` — preprocessing + obfuscation-detection module. Run every message through this BEFORE the model.

## Schema (each JSONL line)
| field | meaning |
|---|---|
| `id` | gen_00001 … |
| `text` | raw SMS, PII redacted to `<PHONE> <NAME> <AMOUNT> <ACCOUNT> <URL> <REF>` |
| `category` | reversal \| promo \| alert \| legitimate |
| `label` | illegitimate \| legitimate |
| `mechanism` | cognitive-exploitation tag for lures (authority, scarcity, fear, sympathy, reciprocity, greed, social_proof, curiosity, commitment, urgency); `none` for legit |
| `length_bucket` | short (<80) \| standard (80–160) \| multipart (>160) |
| `complexity` | low \| medium \| high |
| `normalized_text` | NFKC + confusable-folded + zero-width-stripped |
| `had_confusable` / `had_invisible_char` / `obfuscation_suspected` | detection flags |

## Design notes
- Legitimate entries are derived from REAL Telecel Cash / bank transaction SMS, redacted. They intentionally share format — real transaction SMS are templated, so the model must learn that shape.
- Illegitimate entries are built by cognitive mechanism, not surface template. Skeleton collisions among lures are capped (max 3 share a skeleton), giving genuine pretext diversity rather than name/amount swaps.

## Robustness to obfuscation (confusables / zero-width)
Do NOT train on bulk pre-obfuscated strings — the model would memorize specific tricks and miss new ones.
Instead:
1. Preprocess every message with `normalize.normalize_message()`.
2. Feed the model `normalized_text` PLUS the boolean flags. The flags fire on ANY obfuscation attempt, so the model learns "someone tried to hide something" — which generalizes to tricks not in the training set.
3. Use `obfuscation_validation_set.jsonl` to assert your normalizer coverage in CI.
