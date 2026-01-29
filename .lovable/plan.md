
# Visual Enhancement Plan: Grid Glow & Rotating Card Border

## Overview
Add two premium visual effects to elevate your portfolio's design:

---

## 1. Grid Hover Glow Effect
**What it does:** A soft, glowing gradient that follows your cursor as you move over the grid background

**How it looks:**
- A subtle radial gradient glow appears around your cursor
- In **light mode**: Soft gray/white glow
- In **dark mode**: Subtle white/blue glow
- Smooth, fluid animation that follows cursor movement
- Blends naturally with the existing grid pattern

---

## 2. Rotating Glow Border on Cards
**What it does:** A continuous glowing light that revolves around the edges of each project/experience card in a clockwise motion

**How it looks:**
- A smooth, animated glow that travels around the border
- Always rotating (never stops)
- In **light mode**: Subtle gray/charcoal glow for elegance
- In **dark mode**: Soft white/blue glow for that premium feel
- Works on all cards: Projects, Experience timeline, Connect section cards

---

## Cards Affected
- Project cards in "Selected Projects" section
- Experience items in "Experience" section  
- Social link cards in "Let's Connect" section

---

## Technical Approach
- Custom CSS animations with `conic-gradient` for the rotating border effect
- JavaScript mouse tracking for the cursor-following grid glow
- Theme-aware colors using your existing CSS variables
- Smooth performance with GPU-accelerated animations
