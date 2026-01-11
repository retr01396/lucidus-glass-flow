# LUCIDUS '26 Events Page - Implementation Guide

## 🎯 Overview

A complete **Dark Fantasy/Anime-themed Events Section** for the LUCIDUS '26 National Level Management Fest website. The implementation features a premium glass-morphism design with fire and ice dual-theme aesthetics.

---

## 📁 Files Created

### 1. **Data Layer**
- **`frontend/src/data/eventsData.ts`**
  - TypeScript data structure with all event information
  - Includes Management Events (6 events) and Non-Management Events (4 events)
  - Total Prize Pool: ₹2,00,000+

### 2. **Components**
- **`frontend/src/components/EventCard.tsx`**
  - Reusable event card component with hover effects
  - Modal dialog for detailed event information
  - Click-to-call coordinator contacts
  - Dual theme support (Management = Fire/Red, Non-Management = Ice/Cyan)

- **`frontend/src/pages/EventsPage.tsx`**
  - Main events page with hero section
  - Tabbed interface for event categories
  - Responsive grid layout
  - Animated reveals and transitions

### 3. **Routing**
- **`frontend/src/App.tsx`** (Updated)
  - Added `/events` route to application router

---

## 🎨 Design Features

### Color Palette
- **Background**: Pure Black (`#000000`) with gradient overlays
- **Management Events**: 
  - Fire theme: Red (`#DC2626`), Orange (`#EA580C`), Gold (`#FFD700`)
  - Glow effects: Amber shadows
- **Non-Management Events**:
  - Ice theme: Cyan (`#06B6D4`), Blue (`#2563EB`), Indigo (`#4F46E5`)
  - Glow effects: Cyan shadows

### Typography
- **Headings**: Serif font (Orbitron) with bold weight
- **Body**: Sans-serif for readability
- **Accents**: Gold/Cyan colors with drop shadows

### Visual Effects
- ✨ **Glassmorphism**: Transparent cards with backdrop blur
- 🔥 **Hover Glow**: Cards glow gold (management) or cyan (non-management)
- 🎭 **Animated Reveals**: Staggered fade-in animations
- 💫 **Background Orbs**: Animated gradient orbs in the background
- ⚔️ **Sword Divider**: Central decorative element
- 🌊 **Smooth Transitions**: All interactions use smooth CSS transitions

---

## 📊 Event Data Structure

### Management Events (6)
1. **PROJECT KAIZEN** - Best Manager - ₹15,000
2. **THE SHOGUN SYNDICATE** - Best Management Team - ₹14,500
3. **THE MONEY ALCHEMIST** - Finance Game - ₹14,500
4. **LOG HORIZON** - Marketing Game - ₹14,500
5. **SHADOW BREAK** - Operations Game - ₹14,500
6. **THE BOND BUREAU** - HR Game - ₹14,500

### Non-Management Events (4)
1. **ELYSE** - Fashion Show - ₹30,000
2. **HIBIKE** - Group Dance - ₹20,000
3. **GRANDLINE** - IPL Auction - ₹14,500
4. **BLUE LOCK** - 3's Football - ₹7,000

---

## 🚀 How to Access

### Development
```bash
# Navigate to the events page
http://localhost:8080/events
```

### Navigation Links
You can add a link to the events page from any component:
```tsx
import { Link } from "react-router-dom";

<Link to="/events">View Events</Link>
```

Or add to the navigation menu in `GlassNavigation.tsx`:
```tsx
<a href="/events" className="nav-link">Events</a>
```

---

## 🎯 Component Usage

### EventCard Component
```tsx
import EventCard from "@/components/EventCard";
import { eventsData } from "@/data/eventsData";

// Usage
<EventCard 
  event={eventsData.management[0]} 
  type="management" 
/>
```

### Props
- `event: EventData` - Event object with all details
- `type: "management" | "non-management"` - Determines color theme

---

## 🎨 Key Features

### Hero Section
- **Title**: LUCIDUS '26 with gold gradient text
- **Subtitle**: National Level Management Fest
- **Date**: 23 JANUARY 2026 with calendar icon
- **Prize Pool**: ₹2,00,000+ in prominent gold badge
- **College**: Christ College of Engineering

### Tab System
- **Management Events**: Fire icon (Flame) with red/orange gradient
- **Non-Management Events**: Ice icon (Snowflake) with cyan/blue gradient
- Smooth tab switching with active state glow effects

### Event Cards
- **Compact View**:
  - Event title and category
  - Image theme description
  - Prize pool with trophy icon
  - Registration fee
  - "View Details" button

- **Modal View** (on click):
  - Full event title and category
  - Prize pool and registration fee in cards
  - Complete guidelines (numbered list)
  - Faculty and student coordinators with clickable phone numbers
  - "Register Now" button

### Responsive Design
- **Mobile**: Single column grid
- **Tablet**: 2 column grid
- **Desktop**: 3 column grid

---

## 🔧 Customization Options

### Change Colors
Edit the gradient classes in `EventCard.tsx`:
```tsx
// For management events
const gradientClass = "from-red-900/20 via-orange-900/20 to-amber-900/20";

// For non-management events  
const gradientClass = "from-cyan-900/20 via-blue-900/20 to-indigo-900/20";
```

### Add New Events
Edit `frontend/src/data/eventsData.ts`:
```tsx
export const eventsData = {
  management: [
    // ... existing events
    {
      id: "new-event",
      title: "NEW EVENT NAME",
      category: "Event Category",
      prizePool: "₹XX,XXX",
      fee: "₹XXX",
      imageTheme: "Theme Description",
      coordinators: {
        faculty: "Name (+91 XXXXX XXXXX)",
        student: "Name (+91 XXXXX XXXXX)"
      },
      guidelines: [
        "Guideline 1",
        "Guideline 2",
        // ... more guidelines
      ]
    }
  ]
};
```

### Modify Animations
Animation delays are set inline:
```tsx
style={{ animationDelay: `${index * 100}ms` }}
```

Adjust the multiplier (100ms) to speed up or slow down staggered animations.

---

## 📱 Mobile Optimization

- Touch-friendly card tap interactions
- Readable text sizes on small screens
- Properly scaled hero section
- Responsive grid that adapts to screen size
- Modal dialogs optimized for mobile viewing

---

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators on interactive elements
- High contrast text for readability
- Clickable phone numbers for easy calling

---

## 🎭 Animation Details

### Card Entrance
- Staggered fade-in with slide-up effect
- Each card delayed by 100ms from previous
- Smooth opacity and transform transitions

### Hover Effects
- Scale transformation (1.05x)
- Glow shadow (gold or cyan)
- Border color change
- Smooth 500ms transition

### Background
- Animated gradient orbs with pulse effect
- Different animation delays for depth
- Blur effect for ambient atmosphere

---

## 🔗 Integration with Existing Site

The Events Page is now integrated into your existing LUCIDUS website:

1. **Route Added**: `/events` is now accessible
2. **Styling Consistent**: Uses your existing Tailwind configuration
3. **Components Compatible**: Uses shadcn/ui components from your project
4. **Theme Aligned**: Follows the dark cinematic aesthetic

### Add to Navigation
Edit `frontend/src/components/GlassNavigation.tsx`:
```tsx
<a 
  href="/events" 
  className="glass-nav-link"
  onClick={(e) => {
    e.preventDefault();
    window.location.href = '/events';
  }}
>
  Events
</a>
```

Or use React Router Link:
```tsx
import { Link } from "react-router-dom";

<Link to="/events" className="glass-nav-link">
  Events
</Link>
```

---

## 📸 Visual Preview

### Layout Structure
```
┌─────────────────────────────────────────┐
│          LUCIDUS '26 HERO               │
│  (Title, Date, Prize Pool, Sword Icon)  │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│     [Management] [Non-Management]       │
│              (Tabs)                     │
└─────────────────────────────────────────┘
┌──────────┬──────────┬──────────┐
│  Card 1  │  Card 2  │  Card 3  │
├──────────┼──────────┼──────────┤
│  Card 4  │  Card 5  │  Card 6  │
└──────────┴──────────┴──────────┘
```

---

## 🚀 Next Steps

### Recommended Enhancements
1. **Registration Integration**: Connect "Register Now" button to actual registration form
2. **Search/Filter**: Add search functionality to filter events by name
3. **Share Feature**: Add social media sharing buttons
4. **Countdown Timer**: Add countdown to event date
5. **Image Gallery**: Add event-specific images
6. **Past Events**: Show previous year's highlights

### Backend Integration
When ready to connect to backend:
```tsx
// In EventsPage.tsx
import { useQuery } from "@tanstack/react-query";

const { data: events } = useQuery({
  queryKey: ['events'],
  queryFn: () => fetch('/api/events').then(res => res.json())
});
```

---

## ✅ Testing Checklist

- [x] TypeScript compilation successful
- [x] No linting errors
- [x] Responsive on mobile, tablet, desktop
- [x] Hover effects working
- [x] Modal opens and closes properly
- [x] Tab switching smooth
- [x] Phone numbers clickable
- [x] Animations render correctly
- [x] Accessible via keyboard
- [x] Dark theme consistent

---

## 🎉 Summary

You now have a **fully functional, beautifully designed Events Page** that:
- ✅ Matches the Dark Fantasy/Anime aesthetic
- ✅ Features all 10 events with complete information
- ✅ Includes premium glassmorphism design
- ✅ Has smooth animations and interactions
- ✅ Is fully responsive across devices
- ✅ Integrates seamlessly with your existing site

Access it at: **http://localhost:8080/events**

---

**Created for**: LUCIDUS '26 - Christ College of Engineering  
**Event Date**: 23 January 2026  
**Total Prize Pool**: ₹2,00,000+
