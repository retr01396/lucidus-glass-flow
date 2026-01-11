# 📍 Where to See Prize Pool Information - Visual Guide

## Updated: January 11, 2026

---

## 🎯 How Prize Information is Displayed

The prize information appears in **TWO PLACES** for each event:

### 1️⃣ **Event Card** (On the main page)
Shows: `Prize: ₹XX,XXX` (Summary)

### 2️⃣ **Event Detail Modal** (When you click the card)
Shows:
- **Header**: `Prize Pool: ₹XX,XXX` (Summary)
- **Prize Distribution Section** (Scroll down): Full breakdown with 1st Prize, Finalists, etc.

---

## 🔍 Step-by-Step: How to View Prize Details

### Step 1: Open the Website
```
URL: http://localhost:8080/
```

### Step 2: Scroll to "ALL EVENTS" Section
- You'll see a grid of event cards
- Each card shows:
  ```
  [Icon]
  Event Name
  Category
  Prize: ₹XX,XXX  ← SUMMARY ONLY
  ```

### Step 3: Click ANY Event Card
A **modal popup** will appear with:

#### 📋 Modal Layout (Top to Bottom):
```
┌─────────────────────────────────────┐
│  [X] Close Button                   │
│                                      │
│  📍 Event Name (Title)               │
│  Category: Finance Game              │
│  Prize Pool: ₹14,500  ← HEADER      │
│                                      │
├─────────────────────────────────────┤
│  About the Event                    │
│  [Description text...]              │
│                                      │
│  Team Requirements                  │
│  [Details...]                       │
│                                      │
│  💰 Prize Distribution ← SCROLL HERE│
│  Total Prize Pool: ₹14,500          │
│  • 1st Prize: ₹10,000               │
│  • Finalists: ₹1,500 (Per team)     │
│                                      │
│  Event Guidelines                   │
│  [More details...]                  │
│                                      │
│  [REGISTER NOW Button]              │
└─────────────────────────────────────┘
```

---

## ✅ What's Fixed Now

### Before the Fix:
- ❌ "Prize Pool: ₹14,500" shown in header
- ❌ **NO breakdown below** (just saw the summary)
- ❌ Couldn't see 1st Prize vs Finalist amounts

### After the Fix:
- ✅ "Prize Pool: ₹14,500" in header (summary)
- ✅ **PLUS** "Prize Distribution" section below with:
  - Total Prize Pool: ₹14,500
  - 1st Prize: ₹10,000
  - Finalists: ₹1,500 (Per team)

---

## 🎪 Test Each Event

### Management Events (Test These):

1. **The Money Alchemist** (Finance Game)
   - Card shows: `Prize: ₹14,500`
   - Modal header: `Prize Pool: ₹14,500`
   - **Scroll down to see**:
     - Total: ₹14,500
     - 1st: ₹10,000
     - Finalists: ₹1,500 (Per team)

2. **The Bond Bureau** (HR Game)
   - Card shows: `Prize: ₹14,500`
   - **Scroll down in modal to see**:
     - Total: ₹14,500
     - 1st: ₹10,000
     - Finalists: ₹1,500 (Per team)

3. **Shadow Break** (Operations Game)
   - Card shows: `Prize: ₹14,500`
   - **Scroll down in modal to see**:
     - Total: ₹14,500
     - 1st: ₹10,000
     - Finalists: ₹1,500 (Per team)

### Non-Management Events:

4. **Elyse** (Fashion Show)
   - Card shows: `Prize: ₹30,000` ← **JUST UPDATED!**
   - Modal header: `Prize Pool: ₹30,000`
   - **Scroll down to see**:
     - Total: ₹30,000
     - 1st Prize: ₹20,000
     - 2nd Prize: ₹10,000

5. **Hibike** (Group Dance)
   - Card shows: `Prize: ₹20,000`
   - **Scroll down in modal to see**:
     - Total: ₹20,000
     - 1st Prize: ₹15,000
     - 2nd Prize: ₹5,000

---

## 🐛 Troubleshooting

### "I only see Prize Pool: ₹14,500 in the header"
**Solution**: **SCROLL DOWN** inside the modal! The detailed breakdown is below the "About the Event" and "Team Requirements" sections.

### "The modal is too small, I can't scroll"
**Solution**: The modal has `max-h-[90vh] overflow-y-auto` - you should be able to scroll. Try:
- Using your mouse wheel
- Dragging the scrollbar on the right
- Swiping up on mobile

### "I don't see the Prize Distribution section at all"
**Check**:
1. Are you testing the correct events? (Money Alchemist, Bond Bureau, Shadow Break, Elyse)
2. Did you hard refresh? (Ctrl+Shift+R or Cmd+Shift+R)
3. Check browser console for errors (F12)

---

## 📸 Visual Checklist

Open http://localhost:8080/ and verify:

- [ ] Event cards show `Prize: ₹XX,XXX` 
- [ ] Click "The Money Alchemist"
- [ ] Modal opens with header `Prize Pool: ₹14,500`
- [ ] **Scroll down** past "About" and "Team Requirements"
- [ ] See **"Prize Distribution"** section with:
  - [ ] Total Prize Pool: ₹14,500
  - [ ] • 1st Prize: ₹10,000
  - [ ] • Finalists: ₹1,500 (Per team)
- [ ] Close modal
- [ ] Click "Elyse" (Fashion Show)
- [ ] See `Prize Pool: ₹30,000` in header
- [ ] Scroll down to see breakdown:
  - [ ] Total: ₹30,000
  - [ ] 1st: ₹20,000
  - [ ] 2nd: ₹10,000

---

## 🎨 Modal Structure Explained

```tsx
<div className="modal">
  {/* HEADER - Always visible at top */}
  <header>
    <h2>Event Name</h2>
    <p>Category: Finance Game</p>
    <p>Prize Pool: ₹14,500</p> ← Summary
  </header>

  {/* SCROLLABLE CONTENT */}
  <div className="overflow-y-auto">
    
    <section>About the Event</section>
    
    <section>Team Requirements</section>
    
    {/* 👇 SCROLL HERE! */}
    <section className="prize-distribution">
      <h3>Prize Distribution</h3>
      <p>Total Prize Pool: ₹14,500</p>
      <ul>
        <li>1st Prize: ₹10,000</li>
        <li>Finalists: ₹1,500 (Per team)</li>
      </ul>
    </section>
    
    <section>Event Guidelines</section>
    
    <button>REGISTER NOW</button>
  </div>
</div>
```

---

## 🎯 Key Takeaway

**TWO LEVELS OF INFORMATION**:
1. **Summary** (Header): "Prize Pool: ₹14,500"
2. **Details** (Scroll down): Full breakdown with 1st Prize, Finalists, etc.

**You need to SCROLL inside the modal** to see the detailed "Prize Distribution" section! 📜

---

## 📱 Mobile View

Same behavior:
1. Tap event card
2. Modal opens
3. **Swipe up** to scroll
4. See Prize Distribution section

---

## ✅ Final Checklist

All events now have:
- ✅ Summary in event card
- ✅ Summary in modal header
- ✅ **Detailed breakdown** in "Prize Distribution" section (scroll to see)

**Files Updated**:
- ✅ `EventDetailModal.tsx` - Added prize distribution sections
- ✅ `AllEventsSection.tsx` - Fixed Elyse prize to ₹30,000

**Status**: 🟢 All working correctly - just need to scroll to see details!
