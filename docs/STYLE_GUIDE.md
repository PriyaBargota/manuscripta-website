# Comprehensive Style Guide

> **Version:** X.Y.Z • Academic Modern  
> **Last Updated:** January 2026  

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Fraunces Variable Font](#fraunces-variable-font)
5. [Header Settings](#header-settings)
6. [Font Settings Summary](#font-settings-summary)
7. [Spacing System](#spacing-system)
8. [Border Radius](#border-radius)
9. [Shadows & Elevation](#shadows--elevation)
10. [Layout System](#layout-system)
11. [Component Patterns](#component-patterns)
12. [Interactive States](#interactive-states)
13. [Icons & Imagery](#icons--imagery)
14. [Animation & Transitions](#animation--transitions)
15. [Z-Index Scale](#z-index-scale)
16. [Responsive Design](#responsive-design)
17. [Dark Mode Considerations](#dark-mode-considerations)
18. [Accessibility](#accessibility)
19. [Code Examples](#code-examples)

---

## Design Philosophy

This style guide describes an **Academic Modern** design approach:

- **Clean & Professional**: Minimal visual clutter with clear hierarchy
- **Functional First**: Every element serves a purpose
- **Consistent**: Repeated patterns create familiarity
- **Accessible**: High contrast, clear focus states, screen reader friendly
- **Responsive**: Works seamlessly across devices

### Core Principles

1. **Clarity over decoration** - Use whitespace generously
2. **Consistency over creativity** - Reuse established patterns
3. **Feedback over ambiguity** - Show state changes clearly
4. **Hierarchy through size and color** - Guide the eye naturally

---

## Color System

### Brand Colors

| Color Name | Tailwind Class | Hex Value | Usage |
|------------|----------------|-----------|-------|
| Brand Green | `bg-brand-green` | `#2D5A3D` | Primary sidebar, headers, CTAs |
| Brand Orange | `bg-brand-orange` | `#E07A3D` | Accents, active states, highlights |

### Semantic Colors

```css
/* Primary Palette */
--color-brand-green: #2D5A3D;      /* Primary brand color */
--color-brand-green-dark: #1E3D2A; /* Hover/pressed states */
--color-brand-green-light: #3D7A52; /* Lighter variant */

--color-brand-orange: #E07A3D;     /* Accent/highlight color */
--color-brand-orange-dark: #C56A30; /* Hover/pressed states */
--color-brand-orange-light: #F09A5D; /* Lighter variant */

/* Neutrals */
--color-white: #FFFFFF;
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;
--color-gray-500: #6B7280;
--color-gray-600: #4B5563;
--color-gray-700: #374151;
--color-gray-800: #1F2937;
--color-gray-900: #111827;

/* Status Colors */
--color-success: #10B981;          /* Green - success states */
--color-warning: #F59E0B;          /* Amber - warning states */
--color-error: #EF4444;            /* Red - error states */
--color-info: #3B82F6;             /* Blue - info states */

/* Background Colors */
--color-bg-primary: #F9FAFB;       /* Main content background */
--color-bg-secondary: #FFFFFF;     /* Card backgrounds */
--color-bg-sidebar: #2D5A3D;       /* Sidebar background */
```

### Color Usage Guidelines

| Context | Color | Class |
|---------|-------|-------|
| Sidebar background | Brand Green | `bg-brand-green` |
| Active navigation | Brand Orange | `bg-brand-orange` |
| Primary buttons | Brand Green | `bg-brand-green hover:bg-brand-green-dark` |
| Secondary buttons | Gray | `bg-gray-100 hover:bg-gray-200` |
| Page background | Gray 50 | `bg-gray-50` |
| Card background | White | `bg-white` |
| Primary text | Gray 900 | `text-gray-900` |
| Secondary text | Gray 600 | `text-gray-600` |
| Muted text | Gray 400 | `text-gray-400` |
| Links | Brand Green | `text-brand-green hover:text-brand-green-dark` |
| Borders | Gray 200 | `border-gray-200` |
| Dividers | Gray 100 | `border-gray-100` |

### Opacity Variants

For overlays and subtle backgrounds:

```
white/10  - 10% white (hover backgrounds on dark surfaces)
white/20  - 20% white (slightly more visible)
white/50  - 50% white (muted text on dark)
black/10  - 10% black (subtle shadows)
black/50  - 50% black (modal backdrops)
```

---

## Typography

### Font Families

```css
/* Primary Font Stack (Sans-Serif) - Body text, UI elements */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             Roboto, 'Helvetica Neue', Arial, sans-serif;

/* Display/Header Font Stack (Serif) - Branding, major headings */
font-family: 'Fraunces', 'Georgia', 'Times New Roman', serif;

/* Monospace (for code) */
font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
```

### Font Loading (index.html)

Add these Google Fonts imports to your `<head>`:

```html
<!-- Preconnect for performance -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Inter - Primary UI font -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Fraunces - Header/Brand font (Variable font with optical size) -->
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap" rel="stylesheet">

<!-- JetBrains Mono - Code font (optional) -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Tailwind Font Classes

| Class | Font Family | Usage |
|-------|-------------|-------|
| `font-sans` | Inter | **Default** - Body text, buttons, navigation, UI |
| `font-serif` | Fraunces | Brand name, hero headings, elegant titles |
| `font-mono` | JetBrains Mono | Code blocks, technical data |

### Fraunces Variable Font

**Fraunces** is a display typeface with a unique "wonky" character, well-suited to an Academic Modern aesthetic. It's a variable font with multiple axes:

#### Variable Font Axes

| Axis | Code | Range | Description |
|------|------|-------|-------------|
| Weight | `wght` | 100–900 | Thin to Black |
| Optical Size | `opsz` | 9–144 | Auto-adjusts details for size |
| WONK | `WONK` | 0–1 | Toggles "wonky" quirky forms |
| SOFT | `SOFT` | 0–100 | Adjusts corner softness |

#### Recommended Fraunces Settings

```css
/* Preferred preset (DEFAULT) */
.fraunces-preferred {
  font-family: 'Fraunces', serif;
  font-weight: 800;
  font-variation-settings: 'opsz' 24, 'SOFT' 0, 'WONK' 0;
}

/* Brand name / Logo - Preferred (clean, academic) */
.brand-title {
  font-family: 'Fraunces', serif;
  font-weight: 800;
  font-variation-settings: 'opsz' 24, 'SOFT' 0, 'WONK' 0;
}

/* Large display headings - Preferred (same preset, heavier weight) */
.display-heading {
  font-family: 'Fraunces', serif;
  font-weight: 800;
  font-variation-settings: 'opsz' 24, 'SOFT' 0, 'WONK' 0;
}

/* Smaller elegant headings - more refined */
.elegant-heading {
  font-family: 'Fraunces', serif;
  font-weight: 800;
  font-variation-settings: 'opsz' 24, 'SOFT' 0, 'WONK' 0;
}

/* Note: `SOFT` and `WONK` are variable axes; if your font import
   doesn't include them (or you’re using a static Fraunces), the browser
   will safely ignore those axis settings. */
```

#### Tailwind CSS Custom Classes (Optional)

Add to your CSS for easy Fraunces variants:

```css
@layer utilities {
  .font-fraunces-preferred {
    font-family: 'Fraunces', serif;
    font-weight: 800;
    font-variation-settings: 'opsz' 24, 'SOFT' 0, 'WONK' 0;
  }

  .font-fraunces-display {
    font-family: 'Fraunces', serif;
    font-weight: 800;
    font-variation-settings: 'opsz' 24, 'SOFT' 0, 'WONK' 0;
  }
  
  .font-fraunces-heading {
    font-family: 'Fraunces', serif;
    font-weight: 800;
    font-variation-settings: 'opsz' 24, 'SOFT' 0, 'WONK' 0;
  }
  
  .font-fraunces-wonky {
    font-variation-settings: 'WONK' 1;
  }
  
  .font-fraunces-soft {
    font-variation-settings: 'SOFT' 100;
  }
}
```

#### Why Fraunces

- **Academic character**: Old-style serifs with a scholarly feel
- **Personality**: The "wonky" axis adds warmth and approachability
- **Versatility**: Variable axes allow tuning for different contexts
- **Modern yet classic**: Fits the "Academic Modern" design philosophy

---

## Header Settings

### Main Application Header

```html
<header class="app-header">
  <!-- Left: Logo/Brand -->
  <div class="header-brand">
    <div class="brand-icon">B</div>
    <div>
      <h1 class="brand-title" style="font-variation-settings: 'opsz' 24, 'SOFT' 0, 'WONK' 0;">
        Brandname
      </h1>
      <p class="brand-subtitle">Product Dashboard</p>
    </div>
  </div>

  <!-- Center: Page Title (optional, hidden on mobile) -->
  <div class="header-page-title">
    <h2>Page Title</h2>
  </div>

  <!-- Right: Actions -->
  <div class="header-actions">
    <!-- Search, notifications, user menu -->
  </div>
</header>
```

### Header Dimensions & Styling

| Property | Value | Tailwind Class |
|----------|-------|----------------|
| Height | 64px | `h-16` |
| Background | White | `bg-white` |
| Border | Bottom, gray-200 | `border-b border-gray-200` |
| Padding | 24px horizontal | `px-6` |
| Layout | Flex, centered, spaced | `flex items-center justify-between` |
| Z-Index | 10 (below sidebar) | `z-10` |

### Brand/Logo Typography

```html
<!-- Brand Name (Serif - elegant, academic) -->
<h1 class="brand-title" style="font-variation-settings: 'opsz' 24, 'SOFT' 0, 'WONK' 0;">
  Brandname
</h1>

<!-- Alternative: Larger brand for landing pages -->
<h1 class="brand-title brand-title--hero" style="font-variation-settings: 'opsz' 24, 'SOFT' 0, 'WONK' 0;">
  Brandname
</h1>
```

| Property | Value | Class |
|----------|-------|-------|
| Font Family | Fraunces | `font-serif` |
| Font Size | 20px (header), 30px (hero) | `text-xl`, `text-3xl` |
| Font Weight | 800 | `font-extrabold` |
| Color | Gray 900 | `text-gray-900` |
| Letter Spacing | Tight | `tracking-tight` |

### Subtitle/Tagline Typography

```html
<!-- Subtitle under brand -->
<p class="brand-subtitle">Product Dashboard</p>

<!-- Tagline -->
<p class="tagline">Content management</p>
```

| Property | Value | Class |
|----------|-------|-------|
| Font Family | Inter | `font-sans` |
| Font Size | 12px or 14px | `text-xs`, `text-sm` |
| Font Weight | 400 | `font-normal` (default) |
| Color | Gray 500 or 600 | `text-gray-500`, `text-gray-600` |

### Page Title (In Header)

```html
<h2 class="page-title-header">Page Title</h2>
```

| Property | Value | Class |
|----------|-------|-------|
| Font Family | Inter | `font-sans` |
| Font Size | 18px | `text-lg` |
| Font Weight | 600 | `font-semibold` |
| Color | Gray 800 | `text-gray-800` |

### Content Page Headers

```html
<!-- Main Page Title -->
<div class="page-header">
  <h1 class="page-title">Dashboard</h1>
  <p class="page-description">Overview of your workspace and activity</p>
</div>

<!-- With Breadcrumb -->
<div class="page-header">
  <nav class="breadcrumb">
    <span>Home</span>
    <span class="breadcrumb-separator">/</span>
    <span class="breadcrumb-current">Library</span>
  </nav>
  <h1 class="page-title">Library</h1>
</div>
```

### Section Headers (Within Pages)

```html
<!-- Card/Section Title -->
<h3 class="section-title">Recent Activity</h3>

<!-- Subsection -->
<h4 class="subsection-title">Settings</h4>

<!-- Small section label -->
<h5 class="section-label">Options</h5>
```

### Complete Header Component Example

```html
<header class="app-header">
  <!-- Mobile menu button -->
  <button class="menu-toggle" onclick="toggleMenu()">
    <!-- Menu icon (SVG) -->
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  </button>

  <!-- Brand -->
  <div class="header-brand">
    <div class="brand-icon">B</div>
    <div class="brand-text">
      <h1 class="brand-title" style="font-variation-settings: 'opsz' 24, 'SOFT' 0, 'WONK' 0;">
        Brandname
      </h1>
      <p class="brand-subtitle">Product Dashboard</p>
    </div>
  </div>

  <!-- Page Title - Center (desktop only) -->
  <div class="header-page-title">
    <h2>Page Title</h2>
  </div>

  <!-- Right Actions -->
  <div class="header-actions">
    <!-- Search -->
    <button class="icon-btn" aria-label="Search">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    </button>

    <!-- Notifications -->
    <button class="icon-btn" aria-label="Notifications">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
      <span class="notification-dot"></span>
    </button>

    <!-- User Avatar -->
    <button class="user-btn">
      <div class="avatar avatar--sm">JD</div>
      <span class="user-name">John Doe</span>
    </button>
  </div>
</header>
```

---

## Font Settings Summary

### When to Use Each Font

| Font | Class | Use For |
|------|-------|---------|
| **Fraunces** (Serif) | `font-serif` | Brand name, hero headings, elegant/formal titles, marketing pages |
| **Inter** (Sans-Serif) | `font-sans` | Everything else - body text, buttons, navigation, labels, page titles, UI elements |
| **JetBrains Mono** | `font-mono` | Code snippets, technical IDs, timestamps, monospaced data |

### Font Pairing: Fraunces + Inter

The combination of **Fraunces** (serif) and **Inter** (sans-serif) creates a sophisticated yet modern aesthetic:

- **Fraunces**: Adds warmth, personality, and academic gravitas
- **Inter**: Provides clean, highly legible UI text

### Typography Pairing Examples

```html
<!-- Brand + Tagline -->
<div>
  <h1 class="brand-title">Brandname</h1>
  <p class="tagline">Modern content platform</p>
</div>

<!-- Section with elegant header -->
<section>
  <h2 class="elegant-heading">Featured Items</h2>
  <p class="section-description">Curated content for your audience</p>
</section>

<!-- Standard UI heading (use sans-serif) -->
<div>
  <h2 class="page-title">Project Dashboard</h2>
  <p class="page-description">View your activity and key metrics</p>
</div>
```

### Font Size Scale

| Size Name | Tailwind Class | Pixel Size | Line Height | Usage |
|-----------|----------------|------------|-------------|-------|
| Extra Small | `text-xs` | 12px | 16px | Captions, helper text, badges |
| Small | `text-sm` | 14px | 20px | Body text, inputs, buttons |
| Base | `text-base` | 16px | 24px | Default body text |
| Large | `text-lg` | 18px | 28px | Subheadings |
| XL | `text-xl` | 20px | 28px | Section headers |
| 2XL | `text-2xl` | 24px | 32px | Page titles |
| 3XL | `text-3xl` | 30px | 36px | Large titles |
| 4XL | `text-4xl` | 36px | 40px | Hero text |

### Font Weights

| Weight | Tailwind Class | Numeric | Usage |
|--------|----------------|---------|-------|
| Normal | `font-normal` | 400 | Body text |
| Medium | `font-medium` | 500 | Navigation, labels |
| Semibold | `font-semibold` | 600 | Buttons, headings |
| Bold | `font-bold` | 700 | Emphasis, titles |
| Extra Bold | `font-extrabold` | 800 | Brand name (Fraunces preset) |
| Black | `font-black` | 900 | Rare: hero/marketing emphasis |

### Typography Combinations

```html
<!-- Page Title -->
<h1 class="page-title">Dashboard</h1>

<!-- Section Header -->
<h2 class="section-title">Recent Activity</h2>

<!-- Card Title -->
<h3 class="card-title">Item Overview</h3>

<!-- Subsection -->
<h4 class="subsection-title">Details</h4>

<!-- Body Text -->
<p class="body-text">Description text goes here.</p>

<!-- Caption/Helper -->
<span class="caption">Last updated 2 hours ago</span>

<!-- Navigation Item -->
<span class="nav-label">Library</span>

<!-- Button Text -->
<button class="btn">Save Changes</button>
```

### Line Height

| Tailwind Class | Value | Usage |
|----------------|-------|-------|
| `leading-none` | 1 | Tightly packed text |
| `leading-tight` | 1.25 | Headings |
| `leading-snug` | 1.375 | Cards |
| `leading-normal` | 1.5 | Default body |
| `leading-relaxed` | 1.625 | Long-form content |
| `leading-loose` | 2 | Very spaced |

---

## Spacing System

### Base Unit
The spacing system uses **4px as the base unit** following Tailwind's default scale.

### Spacing Scale

| Tailwind Class | Pixels | Rem | Common Usage |
|----------------|--------|-----|--------------|
| `1` | 4px | 0.25rem | Tight gaps, icon margins |
| `2` | 8px | 0.5rem | Small gaps, compact spacing |
| `3` | 12px | 0.75rem | Medium-small spacing |
| `4` | 16px | 1rem | Standard spacing, button padding |
| `5` | 20px | 1.25rem | Medium spacing |
| `6` | 24px | 1.5rem | Section padding, card padding |
| `8` | 32px | 2rem | Large section spacing |
| `10` | 40px | 2.5rem | Extra large spacing |
| `12` | 48px | 3rem | Page sections |
| `16` | 64px | 4rem | Major sections |

### Padding Patterns

```html
<!-- Buttons -->
<button class="btn btn--sm">Small Button</button>
<button class="btn">Standard Button</button>
<button class="btn btn--lg">Large Button</button>

<!-- Cards -->
<div class="card card--compact">Compact Card</div>
<div class="card">Standard Card</div>
<div class="card card--spacious">Spacious Card</div>

<!-- Inputs -->
<input class="input" type="text">
<input class="input input--lg" type="text">

<!-- Container/Section -->
<section class="section">Content</section>
<main class="main-content">Main Content</main>
```

### Margin & Gap Patterns

```html
<!-- Vertical Stacking -->
<div class="stack stack--tight">Tight Stack (8px)</div>
<div class="stack">Standard Stack (16px)</div>
<div class="stack stack--comfortable">Comfortable Stack (24px)</div>
<div class="stack stack--spacious">Spacious Stack (32px)</div>

<!-- Horizontal Spacing -->
<div class="row row--tight">Tight Horizontal (8px)</div>
<div class="row">Standard Horizontal (16px)</div>

<!-- Grid Gaps -->
<div class="grid gap-standard">Standard Grid Gap</div>
<div class="grid gap-comfortable">Comfortable Grid Gap</div>
```

### Sidebar Specific

```css
/* Sidebar container */
.sidebar { width: 256px; padding: 24px; }

/* Navigation items */
.sidebar-nav > * + * { margin-top: 8px; }

/* Nav button */
.nav-btn { padding: 12px 16px; }
```

---

## Border Radius

### Border Radius Scale

| Tailwind Class | Pixels | Usage |
|----------------|--------|-------|
| `rounded-none` | 0px | Square corners |
| `rounded-sm` | 2px | Subtle rounding |
| `rounded` | 4px | Small elements |
| `rounded-md` | 6px | **Navigation items, buttons** |
| `rounded-lg` | 8px | Cards, modals |
| `rounded-xl` | 12px | Large cards, sections |
| `rounded-2xl` | 16px | Hero sections |
| `rounded-full` | 9999px | Pills, avatars, circles |

### Usage Guidelines

| Element | Recommended Radius | Class |
|---------|-------------------|-------|
| Navigation buttons | Medium | `rounded-md` |
| Primary buttons | Medium | `rounded-md` |
| Input fields | Medium | `rounded-md` |
| Cards | Large | `rounded-lg` |
| Modals | XL | `rounded-xl` |
| Badges/Tags | Full | `rounded-full` |
| Avatar images | Full | `rounded-full` |
| Thumbnails | Large | `rounded-lg` |
| Dropdowns | Medium | `rounded-md` |
| Tooltips | Medium | `rounded-md` |

### Examples

```html
<!-- Navigation Button -->
<button class="nav-btn">Nav Item</button>

<!-- Card -->
<div class="card">Card Content</div>

<!-- Modal -->
<div class="modal">Modal Content</div>

<!-- Badge -->
<span class="badge badge--primary">Active</span>

<!-- Avatar -->
<img class="avatar" src="..." alt="User">

<!-- Input -->
<input class="input" type="text">
```

---

## Shadows & Elevation

### Shadow Scale

| Tailwind Class | Usage | CSS Value |
|----------------|-------|-----------|
| `shadow-sm` | Subtle elevation | `0 1px 2px 0 rgb(0 0 0 / 0.05)` |
| `shadow` | Default cards | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` |
| `shadow-md` | **Active states** | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` |
| `shadow-lg` | Dropdowns, popovers | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` |
| `shadow-xl` | **Sidebar, major panels** | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` |
| `shadow-2xl` | Modals | `0 25px 50px -12px rgb(0 0 0 / 0.25)` |

### Elevation Hierarchy

```
Level 0: No shadow      - Background surfaces
Level 1: shadow-sm      - Subtle cards, input fields (resting)
Level 2: shadow         - Default card state
Level 3: shadow-md      - Active navigation, hover states
Level 4: shadow-lg      - Dropdowns, popovers
Level 5: shadow-xl      - Sidebar, major navigation panels
Level 6: shadow-2xl     - Modals, dialogs, critical UI
```

### Usage Examples

```html
<!-- Sidebar Panel (fixed, high prominence) -->
<aside class="sidebar">...</aside>

<!-- Standard Card -->
<div class="card">...</div>

<!-- Card with hover effect -->
<div class="card card--hoverable">...</div>

<!-- Active Navigation Item -->
<button class="nav-btn nav-btn--active">Active Nav</button>

<!-- Dropdown Menu -->
<div class="dropdown-menu">...</div>

<!-- Modal -->
<div class="modal">...</div>
```

---

## Layout System

### Main Layout Structure

```html
<div class="app-shell">
  <div class="app-layout">
    <!-- Sidebar - Fixed width -->
    <aside class="sidebar">
      <!-- Sidebar content -->
    </aside>

    <!-- Main content area - Flexible -->
    <main class="main-area">
      <!-- Header -->
      <header class="app-header">
        <!-- Header content -->
      </header>

      <!-- Content -->
      <div class="content-area">
        <!-- Page content -->
      </div>
    </main>
  </div>
</div>
```

### Sidebar Dimensions

```
Width: 256px (w-64)
Padding: 24px (p-6)
Background: brand-green
Text: white
Shadow: shadow-xl
Z-Index: z-20
```

### Header Dimensions

```
Height: 64px (h-16)
Background: white
Border: border-b border-gray-200
Padding: px-6 (24px horizontal)
```

### Content Area

```
Padding: p-6 (24px all sides)
Background: bg-gray-50 (main) or bg-white (cards)
Max-width: Use container classes or custom (max-w-7xl)
```

### Grid Layouts

```html
<!-- Dashboard Grid (Stats) -->
<div class="grid grid--4-col">
  <!-- Stat cards -->
</div>

<!-- Content Grid (Cards) -->
<div class="grid grid--3-col">
  <!-- Content cards -->
</div>

<!-- Two-column Layout -->
<div class="grid grid--sidebar">
  <div class="grid__main"><!-- Main content --></div>
  <div class="grid__aside"><!-- Sidebar content --></div>
</div>
```

### Flexbox Patterns

```html
<!-- Horizontal with space between -->
<div class="flex flex--between">...</div>

<!-- Horizontal with gap -->
<div class="flex flex--gap">...</div>

<!-- Vertical stack -->
<div class="stack">...</div>

<!-- Centered content -->
<div class="flex flex--center">...</div>
```

---

## Component Patterns

### Navigation Button (Sidebar)

```html
<button class="nav-btn nav-btn--active" onclick="handleNavigation('view')">
  <!-- Icon (inline SVG) -->
  <svg class="nav-btn__icon" width="20" height="20">...</svg>
  Label
</button>
```

### Card Component

```html
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Card Title</h3>
    <button class="icon-btn" aria-label="More options">
      <!-- More icon SVG -->
    </button>
  </div>
  <p class="card__description">Card description text.</p>
</div>
```

### Primary Button

```html
<button class="btn btn--primary">Primary Action</button>
```

### Secondary Button

```html
<button class="btn btn--secondary">Secondary Action</button>
```

### Ghost Button

```html
<button class="btn btn--ghost">Ghost Button</button>
```

### Danger Button

```html
<button class="btn btn--danger">Delete</button>
```

### Input Field

```html
<div class="form-group">
  <label class="form-label" for="example-input">Label</label>
  <input
    type="text"
    id="example-input"
    class="input"
    placeholder="Enter text..."
  >
  <p class="form-helper">Helper text goes here</p>
</div>
```

### Select/Dropdown

```html
<select class="input">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Badge/Tag

```html
<!-- Status Badge -->
<span class="badge badge--success">Active</span>

<!-- Category Tag -->
<span class="tag">Category</span>
```

### Modal/Dialog

```html
<!-- Backdrop -->
<div class="modal-backdrop"></div>

<!-- Modal Container -->
<div class="modal-wrapper">
  <div class="modal">
    <!-- Modal Header -->
    <div class="modal__header">
      <h2 class="modal__title">Modal Title</h2>
    </div>

    <!-- Modal Body -->
    <div class="modal__body">
      <!-- Content -->
    </div>

    <!-- Modal Footer -->
    <div class="modal__footer">
      <button class="btn btn--secondary">Cancel</button>
      <button class="btn btn--primary">Confirm</button>
    </div>
  </div>
</div>
```

### Table

```html
<div class="table-container">
  <table class="data-table">
    <thead>
      <tr>
        <th>Column</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Empty State

```html
<div class="empty-state">
  <!-- Icon SVG -->
  <svg class="empty-state__icon" width="48" height="48">...</svg>
  <h3 class="empty-state__title">No items found</h3>
  <p class="empty-state__description">Get started by creating a new item.</p>
  <button class="btn btn--primary">Create New</button>
</div>
```

---

## Interactive States

### Hover States

```css
/* Button hover */
hover:bg-brand-green-dark    /* Darker variant */
hover:bg-gray-100            /* Light background */
hover:bg-white/10            /* On dark backgrounds */
hover:text-gray-900          /* Darker text */
hover:shadow-md              /* Elevated shadow */

/* Transition */
transition-all duration-200
transition-colors duration-200
transition-shadow duration-200
```

### Active States

```css
/* Navigation active */
bg-brand-orange text-white shadow-md

/* Button pressed */
active:scale-95              /* Slight shrink effect */
active:bg-brand-green-dark   /* Darker background */
```

### Focus States

```css
/* Standard focus ring */
focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2

/* Subtle focus (inputs) */
focus:ring-2 focus:ring-brand-green focus:border-brand-green

/* High contrast focus */
focus:ring-4 focus:ring-brand-green/50
```

### Disabled States

```css
/* Disabled state */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--color-gray-300);
}
```

### Loading States

```html
<!-- Button with spinner -->
<button class="btn btn--loading" disabled>
  <svg class="spinner" viewBox="0 0 24 24" width="16" height="16">...</svg>
  Loading...
</button>

<!-- Skeleton loading -->
<div class="skeleton">
  <div class="skeleton__line skeleton__line--75"></div>
  <div class="skeleton__line skeleton__line--50"></div>
</div>
```

---

## Icons & Imagery

### Icon Library

Uses inline **SVG icons** (e.g. from [Lucide](https://lucide.dev/) or [Heroicons](https://heroicons.com/)):

```html
<!-- Example: Home icon (inline SVG) -->
<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  <polyline points="9 22 9 12 15 12 15 22"/>
</svg>
```

### Icon Sizes

| Size | Class | Pixels | Usage |
|------|-------|--------|-------|
| XS | `w-3 h-3` | 12px | Inline with small text |
| SM | `w-4 h-4` | 16px | Buttons, inputs |
| MD | `w-5 h-5` | 20px | **Navigation, default** |
| LG | `w-6 h-6` | 24px | Headers, emphasis |
| XL | `w-8 h-8` | 32px | Empty states |
| 2XL | `w-12 h-12` | 48px | Hero icons |

### Icon Color Guidelines

```html
<!-- Default (inherit text color) -->
<svg class="icon" width="20" height="20">...</svg>

<!-- Muted -->
<svg class="icon icon--muted" width="20" height="20">...</svg>

<!-- On dark background -->
<svg class="icon icon--light" width="20" height="20">...</svg>

<!-- Colored -->
<svg class="icon icon--primary" width="20" height="20">...</svg>

<!-- Status colors -->
<svg class="icon icon--success" width="20" height="20">...</svg>
<svg class="icon icon--warning" width="20" height="20">...</svg>
<svg class="icon icon--error" width="20" height="20">...</svg>
```

### Avatar/Image Styling

```html
<!-- Avatar -->
<img class="avatar" src="avatar.jpg" alt="User Name">

<!-- Thumbnail -->
<img class="thumbnail" src="thumbnail.jpg" alt="Item Title">

<!-- Placeholder Avatar -->
<div class="avatar avatar--placeholder">JD</div>
```

---

## Animation & Transitions

### Transition Durations

| Duration | Class | Usage |
|----------|-------|-------|
| Fast | `duration-100` | Micro-interactions |
| Default | `duration-200` | **Standard transitions** |
| Medium | `duration-300` | Modals, larger elements |
| Slow | `duration-500` | Page transitions |

### Transition Properties

```css
transition: all 0.2s ease;         /* All properties (use sparingly) */
transition: color 0.2s ease;       /* Color changes only */
transition: box-shadow 0.2s ease;  /* Shadow changes */
transition: opacity 0.2s ease;     /* Fade effects */
transition: transform 0.2s ease;   /* Scale, translate, rotate */
```

### Common Animation Patterns

```html
<!-- Hover transition -->
<button class="btn">Click me</button>

<!-- Shadow elevation on hover -->
<div class="card card--hoverable">Card</div>

<!-- Scale on hover -->
<div class="card card--scalable">Card</div>

<!-- Fade in -->
<div class="animate-fade-in">Content</div>

<!-- Spin (loading) -->
<svg class="spinner" width="20" height="20">...</svg>

<!-- Pulse (loading skeleton) -->
<div class="skeleton__line"></div>

<!-- Bounce (attention) -->
<div class="animate-bounce">!</div>
```

### Custom Animations (add to CSS)

```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { 
    opacity: 0;
    transform: translateY(10px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 200ms ease-out;
}

.animate-slide-up {
  animation: slide-up 300ms ease-out;
}

.animate-scale-in {
  animation: scale-in 200ms ease-out;
}
```

---

## Z-Index Scale

| Level | Value | Class | Usage |
|-------|-------|-------|-------|
| Base | 0 | `z-0` | Default content |
| Raised | 10 | `z-10` | Sticky headers within content |
| Sidebar | 20 | `z-20` | **Main sidebar** |
| Dropdown | 30 | `z-30` | Dropdown menus |
| Sticky | 40 | `z-40` | Sticky elements |
| Modal Backdrop | 40 | `z-40` | Modal backdrop |
| Modal | 50 | `z-50` | **Modals, dialogs** |
| Popover | 50 | `z-50` | Tooltips, popovers |
| Toast | 60 | `z-60` | Toast notifications |
| Maximum | 9999 | `z-[9999]` | Critical overlays |

---

## Responsive Design

### Breakpoints

| Breakpoint | Min Width | Tailwind Prefix |
|------------|-----------|-----------------|
| Mobile | 0px | (default) |
| SM | 640px | `sm:` |
| MD | 768px | `md:` |
| LG | 1024px | `lg:` |
| XL | 1280px | `xl:` |
| 2XL | 1536px | `2xl:` |

### Responsive Patterns

```css
/* Stack on mobile, row on desktop */
.responsive-row {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media (min-width: 768px) {
  .responsive-row { flex-direction: row; }
}

/* Hide sidebar on mobile */
.sidebar {
  display: none;
}
@media (min-width: 1024px) {
  .sidebar { display: block; width: 256px; }
}

/* Responsive grid */
.grid--responsive {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 768px) {
  .grid--responsive { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid--responsive { grid-template-columns: repeat(3, 1fr); }
}
```

### Mobile-First Guidelines

1. Design for mobile first, then enhance for larger screens
1. Use `min-width` media queries (mobile-first)
3. Consider touch targets (min 44x44px on mobile)
4. Collapse sidebar to hamburger menu on mobile
5. Stack cards vertically on narrow screens

---

## Dark Mode Considerations

While the current implementation focuses on light mode, here's the dark mode palette for future reference:

### Dark Mode Colors

```css
/* Dark mode backgrounds */
--color-bg-dark-primary: #111827;    /* gray-900 */
--color-bg-dark-secondary: #1F2937;  /* gray-800 */
--color-bg-dark-tertiary: #374151;   /* gray-700 */

/* Dark mode text */
--color-text-dark-primary: #F9FAFB;  /* gray-50 */
--color-text-dark-secondary: #D1D5DB; /* gray-300 */
--color-text-dark-muted: #9CA3AF;    /* gray-400 */

/* Dark mode borders */
--color-border-dark: #374151;        /* gray-700 */
```

### Dark Mode Implementation

```css
/* Dark mode via prefers-color-scheme */
@media (prefers-color-scheme: dark) {
  .card {
    background-color: var(--color-bg-dark-secondary);
    color: var(--color-text-dark-primary);
    border-color: var(--color-border-dark);
  }
}
```

---

## Accessibility

### Color Contrast

- Maintain minimum **4.5:1** contrast ratio for normal text
- Maintain minimum **3:1** contrast ratio for large text (18px+)
- The brand-green (#2D5A3D) on white provides sufficient contrast
- White text on brand-green provides sufficient contrast

### Focus Management

```css
/* Always provide visible focus states */
.btn:focus,
.input:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-brand-green);
}
```

```html
<!-- Skip to main content link -->
<a href="#main" class="sr-only focus-visible">Skip to main content</a>
```

### Screen Reader

```html
<!-- Screen reader only text -->
<span class="sr-only">Open menu</span>

<!-- Aria labels -->
<button aria-label="Close modal">
  <svg width="20" height="20"><!-- X icon --></svg>
</button>

<!-- Aria-hidden for decorative elements -->
<svg aria-hidden="true" width="20" height="20">...</svg>
```

### Interactive Elements

- Minimum touch target: **44x44px**
- All interactive elements must be keyboard accessible
- Use semantic HTML (`<button>`, `<a>`, `<input>`)
- Provide loading and disabled states

---

## Code Examples

### Complete Card Component

```html
<div class="card">
  <h3 class="card__title">Card Title</h3>
  <p class="card__description">Optional description text.</p>
  <!-- Additional card content -->
</div>
```

```css
.card {
  background-color: var(--color-white);
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  padding: 24px;
  transition: box-shadow 0.2s ease;
}
.card:hover {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
.card__title {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-gray-900);
  margin-bottom: 8px;
}
.card__description {
  font-size: 14px;
  color: var(--color-gray-600);
  margin-bottom: 16px;
}
```

### Complete Button Component

```html
<!-- Button variants -->
<button class="btn btn--primary">Primary</button>
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--ghost">Ghost</button>
<button class="btn btn--danger">Delete</button>

<!-- Button sizes -->
<button class="btn btn--primary btn--sm">Small</button>
<button class="btn btn--primary">Medium (default)</button>
<button class="btn btn--primary btn--lg">Large</button>

<!-- Loading state -->
<button class="btn btn--primary btn--loading" disabled>
  <svg class="spinner" viewBox="0 0 24 24" width="16" height="16">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"/>
    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" opacity="0.75"/>
  </svg>
  Loading...
</button>
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 6px;
  transition: color 0.2s ease, background-color 0.2s ease;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border: none;
}
.btn:focus { outline: none; box-shadow: 0 0 0 2px var(--color-brand-green); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }

.btn--primary { background-color: var(--color-brand-green); color: white; }
.btn--primary:hover { background-color: var(--color-brand-green-dark); }
.btn--secondary { background-color: var(--color-gray-100); color: var(--color-gray-700); }
.btn--secondary:hover { background-color: var(--color-gray-200); }
.btn--ghost { background: none; color: var(--color-gray-600); }
.btn--ghost:hover { background-color: var(--color-gray-100); color: var(--color-gray-900); }
.btn--danger { background-color: #EF4444; color: white; }
.btn--danger:hover { background-color: #DC2626; }

.btn--sm { padding: 6px 12px; font-size: 12px; }
.btn--lg { padding: 12px 24px; font-size: 16px; }
```

### Theme Context Example

```css
/* CSS Custom Properties for theming */
:root {
  /* Brand */
  --color-brand-green: #2D5A3D;
  --color-brand-green-dark: #1E3D2A;
  --color-brand-green-light: #3D7A52;
  --color-brand-orange: #E07A3D;
  --color-brand-orange-dark: #C56A30;
  --color-brand-orange-light: #F09A5D;

  /* Neutrals */
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;

  /* Background */
  --bg-primary: var(--color-gray-50);
  --bg-surface: #FFFFFF;
  --text-primary: var(--color-gray-900);
  --text-secondary: var(--color-gray-600);
  --border-color: var(--color-gray-200);
}
```

---

## CSS Configuration Reference

These are the CSS custom properties that should be defined in your stylesheet. See the [Theme Variables](#theme-context-example) section above for the full `:root` declaration.

```css
/* Example: applying brand colors and fonts */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--text-primary);
  background-color: var(--bg-primary);
}

h1, h2, h3 {
  font-family: 'Fraunces', serif;
  font-weight: 600;
}

.brand-title {
  font-family: 'Fraunces', serif;
  font-weight: 800;
  font-variation-settings: 'opsz' 24, 'SOFT' 0, 'WONK' 0;
}
```

---

## Quick Reference Cheat Sheet

### Most Used Classes

```
// Layouts
flex items-center justify-between
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
space-y-4
w-64 (sidebar)
h-16 (header)

// Spacing
p-4, p-6 (padding)
px-4 py-2, px-4 py-3 (buttons)
gap-4, gap-6 (grids)
space-y-2 (nav items)

// Typography
font-serif text-xl font-extrabold tracking-tight (brand name)
font-sans text-sm font-medium (nav, buttons)
font-sans text-lg font-semibold (card titles)
font-sans text-2xl font-bold (page titles)
text-xs text-gray-400 (captions)
font-mono (code)

// Font Families
font-sans  → Inter (default, UI)
font-serif → Fraunces (brand, elegant headings)
font-mono  → JetBrains Mono (code)

// Colors
bg-brand-green, bg-brand-orange
bg-white, bg-gray-50, bg-gray-100
text-white, text-gray-900, text-gray-600, text-gray-400

// Borders & Radius
rounded-md (buttons, inputs)
rounded-lg (cards)
rounded-xl (modals)
rounded-full (badges, avatars)
border border-gray-200

// Shadows
shadow (cards)
shadow-md (active nav)
shadow-xl (sidebar)
shadow-2xl (modals)

// Transitions
transition-all duration-200
transition-colors duration-200
hover:bg-white/10 (on dark)
hover:bg-gray-100 (on light)

// Focus
focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2

// Header
h-16 bg-white border-b border-gray-200 px-6
flex items-center justify-between
sticky top-0 z-10
```

### Font Quick Reference

```
<!-- Brand Name (Fraunces - Serif) -->
<h1 class="brand-title" style="font-variation-settings: 'opsz' 24, 'SOFT' 0, 'WONK' 0;">
  Brandname
</h1>

<!-- Brand Name — larger, for landing pages -->
<h1 class="brand-title brand-title--hero" style="font-variation-settings: 'opsz' 24, 'SOFT' 0, 'WONK' 0;">
  Brandname
</h1>

<!-- Page Title (Sans) -->
<h1 class="page-title">Dashboard</h1>

<!-- Section Header (Sans) -->
<h2 class="section-title">Recent Activity</h2>

<!-- Body Text (Sans - default) -->
<p class="body-text">Description text</p>

<!-- Code (Mono) -->
<code class="code-inline">npm install</code>

/* Fraunces Variable Axes (for advanced styling) */
font-weight: 800;                        /* Preferred weight */
font-variation-settings: 'opsz' 24;      /* Preferred optical size (9-144) */
font-variation-settings: 'WONK' 0;       /* Preferred wonk (0-1) */
font-variation-settings: 'SOFT' 0;       /* Preferred softness (0-100) */
```

---

*This style guide is version X.Y.Z • Academic Modern theme. Last updated January 2026.*
