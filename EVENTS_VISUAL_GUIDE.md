# LUCIDUS '26 Events Page - Quick Start Guide

## 🚀 Access the Events Page

**URL**: http://localhost:8080/events

---

## 🎨 Visual Design Overview

### Color Scheme
```
┌─────────────────────────────────────────┐
│  🔥 MANAGEMENT EVENTS (Fire Theme)      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  • Primary: Red (#DC2626) → Orange     │
│  • Accent: Gold (#FFD700)              │
│  • Glow: Amber Shadow                  │
│  • Icon: Flame 🔥                      │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  ❄️  NON-MANAGEMENT EVENTS (Ice Theme)  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  • Primary: Cyan (#06B6D4) → Blue      │
│  • Accent: Cyan (#06B6D4)              │
│  • Glow: Cyan Shadow                   │
│  • Icon: Snowflake ❄️                  │
└─────────────────────────────────────────┘
```

---

## 📱 Layout Structure

```
╔═══════════════════════════════════════════════╗
║                                               ║
║              ⚔️  SWORD DIVIDER                ║
║                                               ║
║           LUCIDUS '26                         ║
║     (Gold Gradient, Glowing Text)             ║
║                                               ║
║    National Level Management Fest             ║
║                                               ║
║         📅  23 JANUARY 2026                   ║
║                                               ║
║    ┌─────────────────────────────────┐       ║
║    │  🏆  Total Prize Pool            │       ║
║    │     ₹2,00,000+                   │       ║
║    │  (Gold Badge with Glow)          │       ║
║    └─────────────────────────────────┘       ║
║                                               ║
║    Christ College of Engineering              ║
║                                               ║
╚═══════════════════════════════════════════════╝

╔═══════════════════════════════════════════════╗
║         TAB NAVIGATION                        ║
║  ┌──────────────┬──────────────┐             ║
║  │ 🔥 Management│ ❄️ Non-Mgmt   │             ║
║  │   (Active)   │   (Inactive)  │             ║
║  └──────────────┴──────────────┘             ║
╚═══════════════════════════════════════════════╝

╔═══════════════════════════════════════════════╗
║          EVENT CARDS GRID                     ║
║                                               ║
║  ┌─────────┐  ┌─────────┐  ┌─────────┐      ║
║  │ EVENT 1 │  │ EVENT 2 │  │ EVENT 3 │      ║
║  │ [Card]  │  │ [Card]  │  │ [Card]  │      ║
║  └─────────┘  └─────────┘  └─────────┘      ║
║                                               ║
║  ┌─────────┐  ┌─────────┐  ┌─────────┐      ║
║  │ EVENT 4 │  │ EVENT 5 │  │ EVENT 6 │      ║
║  │ [Card]  │  │ [Card]  │  │ [Card]  │      ║
║  └─────────┘  └─────────┘  └─────────┘      ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

---

## 🎴 Event Card Anatomy

```
┌─────────────────────────────────────┐
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │ ← Top Accent Line
│                          ┌─────┐    │
│  [CATEGORY BADGE]        │ 🔥  │    │ ← Icon Badge
│                          └─────┘    │
│  EVENT TITLE                        │
│  (Large, Bold, Serif)               │
│                                     │
│  Theme Description                  │
│  (Italic, Gray)                     │
│                                     │
│  🏆 Prize Pool                      │
│     ₹XX,XXX (Gold/Cyan)             │
│                                     │
│  Registration Fee                   │
│  ₹XXX                               │
│                                     │
│  ┌───────────────────────────────┐ │
│  │     View Details              │ │ ← CTA Button
│  └───────────────────────────────┘ │
│                                     │
│ (Bottom Glow on Hover)              │
└─────────────────────────────────────┘
```

---

## 💬 Event Detail Modal

```
╔═════════════════════════════════════════╗
║  ━━━  (Colored accent line)             ║
║                                         ║
║  EVENT TITLE                            ║
║  (Large, Bold)                          ║
║                                         ║
║  Category • Theme                       ║
║  ────────────────────────────           ║
║                                         ║
║  ┌──────────────┐  ┌──────────────┐   ║
║  │ 🏆 Prize Pool│  │ Reg. Fee     │   ║
║  │   ₹XX,XXX    │  │   ₹XXX       │   ║
║  └──────────────┘  └──────────────┘   ║
║                                         ║
║  👥 Event Guidelines                    ║
║  ① Guideline 1                         ║
║  ② Guideline 2                         ║
║  ③ Guideline 3                         ║
║  ...                                    ║
║                                         ║
║  ────────────────────────────           ║
║                                         ║
║  📞 Contact Coordinators                ║
║  ┌─────────────────────────────────┐   ║
║  │ Faculty Coordinator             │   ║
║  │ 📞 Name (+91 XXXXX XXXXX)       │   ║
║  └─────────────────────────────────┘   ║
║  ┌─────────────────────────────────┐   ║
║  │ Student Coordinator             │   ║
║  │ 📞 Name (+91 XXXXX XXXXX)       │   ║
║  └─────────────────────────────────┘   ║
║                                         ║
║  ┌───────────────────────────────────┐ ║
║  │      REGISTER NOW                 │ ║
║  └───────────────────────────────────┘ ║
╚═════════════════════════════════════════╝
```

---

## 🎯 Interactive Elements

### Hover Effects
- **Event Cards**: Scale up (1.05x) + Glow effect
- **Buttons**: Color darkens + Shadow increases
- **Links**: Underline appears + Color change

### Click Actions
- **Event Card**: Opens detail modal
- **Phone Numbers**: Initiates phone call
- **Register Button**: Ready for integration

### Tab Switching
- **Management Tab**: Red/Orange gradient + Flame icon
- **Non-Management Tab**: Cyan/Blue gradient + Snowflake icon

---

## 📊 Event Categories

### 🔥 Management Events (6)
```
1. PROJECT KAIZEN          (₹15,000)  - Best Manager
2. THE SHOGUN SYNDICATE    (₹14,500)  - Best Mgmt Team
3. THE MONEY ALCHEMIST     (₹14,500)  - Finance Game
4. LOG HORIZON             (₹14,500)  - Marketing Game
5. SHADOW BREAK            (₹14,500)  - Operations Game
6. THE BOND BUREAU         (₹14,500)  - HR Game
```

### ❄️ Non-Management Events (4)
```
1. ELYSE                   (₹30,000)  - Fashion Show
2. HIBIKE                  (₹20,000)  - Group Dance
3. GRANDLINE               (₹14,500)  - IPL Auction
4. BLUE LOCK               (₹7,000)   - 3's Football
```

---

## 🎨 Animation Timeline

```
0ms    → Hero Section Fades In
100ms  → Sword Divider Appears
200ms  → Title Gradient Animates
300ms  → Tabs Section Fades In
400ms  → First Event Card Appears
500ms  → Second Event Card Appears
600ms  → Third Event Card Appears
...
```

---

## 🔗 Quick Links

### Navigate to Events Page
```tsx
// In any component
import { Link } from "react-router-dom";

<Link to="/events">
  View All Events
</Link>
```

### Direct URL
```
http://localhost:8080/events
```

---

## 🎯 Key Features Implemented

✅ **Dark Fantasy Aesthetic**
  - Pure black background
  - Gold/Red/Cyan accent colors
  - Glassmorphism effects

✅ **Dual Theme System**
  - Fire theme for Management
  - Ice theme for Non-Management

✅ **Interactive Cards**
  - Hover glow effects
  - Click to open modal
  - Smooth animations

✅ **Complete Event Info**
  - Prize pools
  - Registration fees
  - Guidelines
  - Coordinators

✅ **Responsive Design**
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 columns

✅ **Accessibility**
  - Keyboard navigation
  - Clickable phone links
  - High contrast text

---

## 🚀 Ready to Use!

Your Events Page is **fully functional** and **live** at:

**http://localhost:8080/events**

All 10 events are loaded with complete information, beautiful animations, and premium design that matches the LUCIDUS '26 brand!
