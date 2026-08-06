# Anti-MoMo Fraud Detection Web Application
## Frontend Design System & AI Development Reference

**Version:** 1.0

---

## 1. Project Overview

### Purpose

The Anti-MoMo Fraud Detection application is a security-focused web platform that helps users determine whether a Ghanaian Mobile Money (MoMo) SMS message is legitimate or fraudulent.

The frontend communicates with an AI model trained on thousands of labelled Ghanaian SMS messages. Users simply paste or upload an SMS, and the model returns:

- Fraud Probability
- Classification (Safe / Suspicious / Fraudulent)
- Confidence Score
- Reasons behind the prediction
- Recommended action

Unlike traditional antivirus dashboards that are designed for cybersecurity professionals, this application targets everyday smartphone users while maintaining a professional cybersecurity aesthetic.

The design should inspire trust, clarity, speed, and confidence.

---

## 2. Design Philosophy

The interface should communicate:

- Security
- Reliability
- Transparency
- Simplicity
- Speed

Users should immediately understand:

> "This application can protect me."

Avoid playful or social-media inspired interfaces.
Avoid bright saturated colors.
Avoid excessive gradients.
Avoid unnecessary animations.

Everything should feel intentional.

Think:

- Stripe Dashboard
- Linear
- Vercel
- Cloudflare
- Microsoft Defender
- CrowdStrike
- Google Security Center

---

## 3. Target Audience

**Primary**

- Ghana Mobile Money users
- Elderly users
- Students
- Small businesses
- Parents
- Smartphone users

**Secondary**

- Banks
- Mobile Network Operators
- Security Researchers

---

## 4. Overall User Flow

```
Landing Page
    ↓
Paste SMS
    ↓
Analyze Button
    ↓
Loading State
    ↓
AI Processing
    ↓
Results Dashboard
    ↓
Risk Explanation
    ↓
Recommendations
    ↓
Optional Report Scam
```

---

## 5. Visual Personality

The application should feel:

- Professional
- Modern
- Minimal
- Trustworthy
- Calm
- High-tech
- Confident

Not:

- ❌ Cartoon
- ❌ Gamified
- ❌ Neon Cyberpunk
- ❌ Social Media

---

## 6. Typography System

### Primary Font

`Inter Variable`

Fallback:
```
Inter
SF Pro Display
Plus Jakarta Sans
system-ui
sans-serif
```

**Usage:** Navigation, Body, Buttons, Forms, Cards, Tables

**Weight:**
```
400
500
600
700
```

### Headings

```
Inter
Outfit
SF Pro Display
```

**Sizes:**
```
32px
28px
24px
20px
```

**Weights:**
```
600
700
```

### Technical Data

```
JetBrains Mono
Fira Code
Roboto Mono
```

**Usage:** Confidence percentages, AI IDs, Message IDs, Hash values, API responses

---

## 7. Color System

### Dark Mode

**Background**
```
#0B0F19
```
**Alternative**
```
#0F172A
```

### Light Mode

```
#FFFFFF
```
**Secondary**
```
#F8FAFC
```

### Cards

**Dark**
```
#1E293B
```

**Light**
```
#FFFFFF
Border: #E2E8F0
```

### Primary Brand

**Cobalt Blue**
```
#2563EB
```
**Alternative**
```
#4F46E5
```

**Used for:** Buttons, Links, Active Navigation, Progress Bars, Charts

---

## 8. Semantic Colors

### Safe

```
#10B981
```
**Background**
```
rgba(16,185,129,.10)
```
**Meaning:** Safe Message, Verified Sender, Trusted

### Suspicious

```
#F59E0B
```
**Meaning:** Potential Scam, Needs Review, Contains Warning Signs

### Dangerous

```
#EF4444
```
**Meaning:** Likely Fraud, High Risk, Immediate Warning

### Information

```
#64748B
```
**Meaning:** Neutral, Informational, Historical

---

## 9. Spacing System

Use an 8-point grid:

```
4px
8px
16px
24px
32px
40px
48px
64px
```

Never use arbitrary spacing.

---

## 10. Border Radius

| Element | Radius |
|---|---|
| Buttons | 8px |
| Cards | 12px |
| Input Fields | 10px |
| Badges | 999px |

---

## 11. Shadows

Very subtle.

**Default**
```
0 2px 8px rgba(0,0,0,.08)
```
**Hover**
```
0 8px 20px rgba(0,0,0,.12)
```

Avoid floating glassmorphism.

---

## 12. Icons

Use **Lucide Icons**

Examples:
- Shield
- Shield Check
- Triangle Alert
- Message Square
- Search
- History
- Scan
- Bell
- Lock
- Phone
- Banknote
- Circle Check
- Circle X

---

## 13. Homepage Layout

**Hero**
- Large heading: `Protect Yourself from Mobile Money Scams`
- Subtitle: Explain what the AI does.
- Primary CTA: Analyze SMS
- Secondary CTA: Learn More
- Hero illustration: Phone receiving SMS, AI Shield, Fraud blocked

---

## 14. Main Dashboard

**Sections**
- Sidebar
- Top Navigation
- Main Analysis Area
- Recent Analyses
- Threat Statistics
- Education Panel

---

## 15. SMS Analysis Card

- Large textarea
  - Placeholder: `Paste your SMS message here...`
- Character counter
- Analyze button
- Clear button
- Paste button
- Example messages (below textarea)

---

## 16. Loading Experience

- Animated shield
- Progress bar
- Rotating messages:
  - Analyzing sender...
  - Checking known scam patterns...
  - Evaluating language...
  - Running AI model...
  - Generating explanation...

---

## 17. Results Screen

**Large Security Score**

```
SAFE
92%
```
or
```
HIGH RISK
97%
```

Large colored badge: Green, Amber, Red

---

## 18. AI Explanation

Cards, for example:

- Detected urgency language.
- Requests immediate transfer.
- Contains suspicious phone number.
- Known scam wording detected.
- Sender not verified.

**Each explanation includes:**
- Icon
- Title
- Description
- Confidence

---

## 19. Risk Meter

- Circular gauge
- Range: 0–100
- Colors: Green, Yellow, Red
- Animated

---

## 20. Recommendation Panel

Examples:

- Do not reply.
- Do not click links.
- Do not send money.
- Call your provider.
- Report this sender.

**Each recommendation includes:**
- Icon
- Short explanation

---

## 21. Scam Indicators

Badges, examples:

- Urgency
- Prize
- Unknown Number
- Money Request
- Fake Reversal
- Bank Impersonation
- Suspicious Link

---

## 22. Recent Scans

Table columns:

- Date
- Message Preview
- Prediction
- Confidence
- Action

Compact rows, hover highlight.

---

## 23. Analytics

Cards:

- Messages Checked
- Frauds Prevented
- Average Confidence
- Today's Threats

Simple charts: Bar, Pie, Line — minimal style.

---

## 24. Responsive Design

| Breakpoint | Layout |
|---|---|
| Desktop (1440+) | Sidebar, Two-column dashboard |
| Tablet | Collapsible sidebar |
| Mobile | Bottom navigation, Single column, Large touch targets |

---

## 25. Motion

Use **Framer Motion**

**Animations:** Fade, Slide, Scale
**Duration:** 150–250ms

Never bounce. Never overshoot.

---

## 26. Accessibility

- WCAG AA
- Keyboard navigation
- ARIA labels
- Focus rings
- Contrast ratio above 4.5
- Large clickable buttons
- Readable font sizes

---

## 27. Empty States

**Illustration:** Shield, No previous scans

**Text:**
```
No analyses yet.
Paste an SMS above to begin.
```

---

## 28. Error States

Examples:

- Network Error
- Server Offline
- Model Unavailable
- SMS Too Short
- Invalid Input

Friendly language. Action buttons: Retry.

---

## 29. Future Components

The design system should anticipate future expansion without major redesign. Reserve patterns and reusable components for:

- Real-time SMS monitoring
- Browser extension integration
- WhatsApp message analysis
- Email phishing detection
- QR code scam scanning
- Voice scam transcription analysis
- Scam reporting portal
- Community scam database
- AI chat assistant
- Enterprise dashboards for banks and telecom providers

---

## 30. Component Library

The UI should be built around reusable, composable components rather than page-specific layouts.

### Core Components

- Primary, Secondary, Outline, and Destructive Buttons
- Text Inputs
- Textarea
- Search Field
- Dropdown Select
- Checkbox
- Radio Group
- Toggle Switch
- Tabs
- Accordion
- Tooltip
- Modal Dialog
- Drawer
- Toast Notification
- Pagination
- Breadcrumbs
- Avatar
- Skeleton Loader
- Spinner
- Progress Bar
- Circular Progress
- Badge
- Chip
- Alert Banner
- Card
- Data Table
- Empty State
- Error State
- Timeline
- Stepper
- Statistics Card
- Metric Card
- AI Explanation Card
- Risk Indicator
- Confidence Meter
- Recommendation Card

### All components should support:

- Light and Dark themes
- Keyboard navigation
- Responsive layouts
- Disabled, Hover, Active, Focus, and Loading states

---

## 31. Technology Recommendations

| Category | Technology |
|---|---|
| Frontend Framework | React 19, TypeScript |
| Routing | React Router |
| Styling | Tailwind CSS 4 |
| Component Library | shadcn/ui |
| Icons | Lucide React |
| Charts | Recharts |
| Animations | Framer Motion |
| Form Handling | React Hook Form + Zod |
| Data Fetching | TanStack Query |
| Theme Management | next-themes or a React Context-based solution |

---

## 32. AI Frontend Generation Instructions

When generating code for this application, the AI should adhere to the following principles:

1. Build a responsive, mobile-first interface using reusable components.
2. Maintain strict consistency with the design system for typography, spacing, colors, and interaction states.
3. Separate presentation from business logic. Components should remain stateless where practical.
4. Prioritize accessibility (WCAG AA), keyboard navigation, and semantic HTML.
5. Support both light and dark modes from the outset.
6. Design every component to accept dynamic data from the fraud detection model without requiring layout changes.
7. Use smooth, restrained animations to reinforce feedback without distracting users.
8. Ensure loading, empty, success, warning, and error states are implemented for all major interactions.
9. Favor clarity and trustworthiness over visual novelty; every interface decision should reduce user uncertainty.
10. Organize the codebase into feature-based folders with reusable UI primitives to support future additions such as WhatsApp analysis, QR-code scanning, email phishing detection, and enterprise dashboards.

---
---

# Part 2: Frontend Technology Stack Specification

This section defines the recommended frontend technology stack, architecture, and development standards for building the Anti-MoMo Fraud Detection web application. The frontend should be modern, responsive, accessible, maintainable, and designed to integrate seamlessly with an AI-powered fraud detection backend.

---

## 33. Core Framework

### Framework
- **React 19**

### Language
- **TypeScript**

### Build Tool
- **Vite**

### Package Manager
- **pnpm**

### Why This Stack

- Fast development and build times
- Excellent TypeScript support
- Large ecosystem and community
- Well-supported by AI coding assistants
- Easy future migration to React Native if a mobile application is developed

---

## 34. Styling

### CSS Framework

**Tailwind CSS 4**

**Reasons:**
- Utility-first styling
- Easy design consistency
- Minimal CSS maintenance
- Excellent compatibility with AI-generated code
- Highly responsive by default

### UI Component Library

**shadcn/ui** — use as the foundation for all UI components.

**Required components include:**
- Buttons
- Cards
- Dialogs
- Drawers
- Forms
- Tables
- Badges
- Alerts
- Tooltips
- Dropdowns
- Navigation
- Skeleton loaders
- Toast notifications

All components should remain customizable and reusable.

---

## 35. Icons

### Icon Library

**Lucide React**

**Reasons:**
- Lightweight
- Consistent design language
- Tree-shakeable
- Large icon collection

**Primary icons include:**
- Shield
- ShieldCheck
- ShieldAlert
- TriangleAlert
- CircleCheck
- CircleX
- MessageSquare
- Search
- Bell
- Lock
- History
- Phone
- Banknote
- Scan
- Clipboard

---

## 36. Routing

### Router

**React Router v7**

**Requirements:**
- Nested routes
- Lazy loading
- Protected routes
- Error boundaries
- Route-level code splitting

---

## 37. State Management

Separate server state from client UI state.

### Server State

**TanStack Query**

**Responsibilities:**
- API communication
- Request caching
- Automatic retries
- Background refresh
- Loading states
- Error handling

### Client State

**Zustand**

**Responsibilities:**
- Theme
- Sidebar state
- Dialog visibility
- Temporary UI preferences
- Local settings

Avoid Redux unless application complexity significantly increases.

---

## 38. Form Management

**Library:** React Hook Form

**Validation:** Zod

**Features:**
- Fast validation
- Type-safe forms
- Minimal re-rendering
- Easy API integration

---

## 39. Animations

**Library:** Framer Motion

Use animations sparingly.

**Recommended animations:**
- Fade
- Slide
- Scale
- Loading transitions
- Risk meter animation
- Card reveal
- Modal transitions

**Animation duration:** 150–250ms

**Avoid:**
- Bounce animations
- Excessive motion
- Flashing effects

---

## 40. Data Visualization

**Library:** Recharts

**Future dashboard visualizations:**
- Threat trends
- Daily scans
- Confidence distribution
- Fraud categories
- Historical activity
- Risk analytics

---

## 41. Theme Management

**Support:**
- Light Mode
- Dark Mode
- System Theme

**Recommended solution:** next-themes (or a React Context implementation)

Theme switching should be instant with no page reload.

---

## 42. Folder Structure

```text
src/

│
├── app/
│
├── assets/
│
├── components/
│   ├── ui/
│   ├── forms/
│   ├── dashboard/
│   ├── analysis/
│   ├── layout/
│
├── features/
│   ├── authentication/
│   ├── sms-analysis/
│   ├── dashboard/
│   ├── history/
│   ├── reporting/
│
├── hooks/
│
├── layouts/
│
├── pages/
│
├── routes/
│
├── services/
│
├── store/
│
├── styles/
│
├── types/
│
├── utils/
│
└── main.tsx
```

---

## 43. API Layer

Create a dedicated services folder.

```text
services/

api.ts
analysis.ts
auth.ts
history.ts
reports.ts
```

Never place API calls directly inside components.

---

## 44. Component Architecture

Each UI component should be:

- Reusable
- Fully typed
- Accessible
- Independent
- Easily testable

**Example structure:**

```text
Button/

Button.tsx
Button.types.ts
Button.test.tsx
index.ts
```

---

## 45. Design System Standards

Every component should follow:

**Typography**
- Inter
- SF Pro Display
- Plus Jakarta Sans

**Code**
- JetBrains Mono

**Spacing**
- 8-point grid

**Border Radius**
- Buttons: 8px
- Inputs: 10px
- Cards: 12px
- Badges: Pill (999px)

**Theme**
- Light
- Dark

**States required:** Hover, Focus, Disabled, Loading

---

## 46. Required Reusable Components

### Navigation
- Navbar
- Sidebar
- Breadcrumbs
- Mobile Navigation

### Inputs
- Text Input
- Search Input
- Textarea
- Dropdown
- Checkbox
- Radio
- Toggle

### Display
- Card
- Badge
- Chip
- Alert
- Tooltip
- Divider
- Accordion

### Dashboard
- Statistic Card
- Risk Meter
- Confidence Badge
- AI Explanation Card
- Recommendation Card
- Recent Scan Card
- Threat Timeline

### Feedback
- Spinner
- Skeleton Loader
- Progress Bar
- Circular Progress
- Toast Notification
- Empty State
- Error State

### Layout
- Container
- Grid
- Stack
- Section
- Page Header
- Footer

---

## 47. Accessibility Requirements

Every component must support:

- Keyboard navigation
- Screen readers
- ARIA labels
- Semantic HTML
- WCAG AA compliance
- Visible focus states
- High color contrast
- Reduced motion preference support

---

## 48. Performance Requirements

The frontend should:

- Lazy load routes
- Lazy load charts
- Optimize images
- Minimize bundle size
- Tree-shake unused code
- Memoize expensive components where appropriate
- Use code splitting
- Prefetch frequently visited routes
- Cache API responses using TanStack Query

---

## 49. Testing

### Unit Testing
- Vitest
- React Testing Library

### End-to-End Testing
- Playwright

**Components should be tested for:**
- Rendering
- Accessibility
- User interaction
- API loading states
- Error states

---

## 50. Development Tooling

| Tool | Purpose |
|---|---|
| React 19 | UI Framework |
| TypeScript | Type Safety |
| Vite | Build Tool |
| pnpm | Package Management |
| Tailwind CSS 4 | Styling |
| shadcn/ui | Component Library |
| Lucide React | Icons |
| React Router v7 | Routing |
| TanStack Query | Server State |
| Zustand | Client State |
| React Hook Form | Forms |
| Zod | Validation |
| Framer Motion | Animations |
| Recharts | Data Visualization |
| Vitest | Unit Testing |
| React Testing Library | Component Testing |
| Playwright | End-to-End Testing |
| ESLint | Code Quality |
| Prettier | Code Formatting |

---

## 51. Frontend Development Principles

The frontend should adhere to the following engineering principles:

1. **Component-first architecture**: Build reusable UI primitives before assembling pages.
2. **Feature-based organization**: Group files by application feature rather than file type where appropriate.
3. **Strict TypeScript**: Avoid `any`; define interfaces and types for all props and API responses.
4. **Separation of concerns**: Keep business logic, API calls, and presentation layers isolated.
5. **Responsive by default**: Design mobile-first and progressively enhance for larger screens.
6. **Accessibility-first**: Ensure all interactions are keyboard accessible and WCAG AA compliant.
7. **Performance-conscious**: Use lazy loading, route splitting, memoization, and efficient data fetching.
8. **Consistent design system**: Follow the defined typography, spacing, color palette, and component patterns throughout the application.
9. **Scalable architecture**: Structure the codebase to accommodate future features such as WhatsApp analysis, email phishing detection, QR-code scanning, and enterprise dashboards without major refactoring.
10. **Maintainable code**: Favor readability, composability, and predictable patterns over clever or overly abstract implementations.