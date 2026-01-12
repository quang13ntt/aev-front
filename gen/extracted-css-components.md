# Extracted CSS Components from AEV Design

Based on analysis of screenshots `01.png` (Cinema Showtimes Page) and `03.png` (TOP 5 Box Office), here are the key CSS components extracted from `AEV design CSS.txt`.

## Color Palette

```css
/* Primary Colors */
--black-900: #0D0D0D;        /* Main color */
--white: #FFFFFF;
--white-smoke: #F2F2F2;       /* Main background color */

/* Support Colors */
--pink: #E476FA;              /* Happy Day highlight */
--blue: #73E5EA;              /* Age rating badge */
--purple: #707EFA;
--lemon: #CEFA69;             /* Happy morning badge */
--red: #FA6E66;               /* Low seats warning */

/* Opacity/Utility Colors */
--black-100: #E3E3E3;         /* Dividers */
--opacity-black-60: rgba(13, 13, 13, 0.6);
--opacity-white-60: rgba(255, 255, 255, 0.6);
```

## Typography

```css
/* Font Family */
font-family: 'ABC Diatype';

/* SP/H3: Bold - Movie Titles, Time Slots */
font-weight: 700;
font-size: 24px;
line-height: 29px;
letter-spacing: -0.015em;

/* SP/Body: Bold - Tab Labels, Location */
font-weight: 700;
font-size: 15px;
line-height: 18px;

/* SP/Caption 1: Bold - Age Rating, Details Labels */
font-weight: 700;
font-size: 13px;
line-height: 17px;

/* SP/Caption 1: Regular - Body Text, Details */
font-weight: 400;
font-size: 13px;
line-height: 17px;

/* SP/Caption 2: AA Bold - Screen Labels */
font-weight: 700;
font-size: 11px;
line-height: 14px;
text-transform: uppercase;

/* SP/Caption 2: Regular - Seats Info */
font-weight: 400;
font-size: 11px;
line-height: 14px;

/* Date Selector Numbers */
font-weight: 700;
font-size: 26px;
line-height: 29px;
letter-spacing: -0.36px;

/* Date Selector Month/Day */
font-weight: 700;
font-size: 12px;
line-height: 13px;
text-transform: capitalize;

/* Date Selector Day Label */
font-weight: 700;
font-size: 11px;
line-height: 7px;
```

## Component Styles

### 1. Date Selector (Horizontal Scroll)

```css
/* Date Selector Container */
.date-selector {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 343px;
  height: 87px;
  overflow-x: scroll;
}

/* Date Item */
.date-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 11px;
  width: 58px;
  height: 87px;
}

/* Date Number Container */
.date-number {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 10px;
  width: 40px;
  height: 40px;
}

/* Selected Date (Black Background) */
.date-number.selected {
  background: #0D0D0D;
  color: #FFFFFF;
}

/* Regular Date */
.date-number.regular {
  color: #0D0D0D;
}

/* Happy Day (Pink) */
.date-number.happy-day {
  color: #E476FA;
}

/* Month Label */
.date-month {
  font-weight: 700;
  font-size: 12px;
  line-height: 13px;
  text-align: center;
  text-transform: capitalize;
  color: #0D0D0D;
}

.date-month.happy-day {
  color: #E476FA;
}

/* Day Label */
.date-day {
  font-weight: 700;
  font-size: 11px;
  line-height: 7px;
  text-align: right;
  padding: 3px 3px 5px;
}
```

### 2. Tabs (Showing Now / Coming Soon)

```css
/* Tab Container */
.tabs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  gap: 1px;
  width: 375px;
  height: 54px;
}

/* Single Tab */
.tab {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 187px;
  height: 54px;
  background: #FFFFFF;
}

/* Tab Title */
.tab-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  gap: 10px;
  width: 187px;
  height: 54px;
}

/* Tab Text */
.tab-text {
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #0D0D0D;
}

/* Active Tab Line */
.tab-line.active {
  width: 187px;
  height: 0px;
  border: 3px solid #000000;
}

/* Inactive Tab Line */
.tab-line.inactive {
  width: 187px;
  height: 0px;
  border: 3px solid #E3E3E3;
}
```

### 3. Location Selector

```css
/* Location Selector */
.location-selector {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 295px;
  height: 56px;
  background: #F2F2F2;
}

/* Location Text Container */
.location-text {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 10px 16px;
  gap: 10px;
  height: 56px;
  flex-grow: 1;
}

/* Theatre Name */
.theatre-name {
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #0D0D0D;
}

/* Dropdown Icon Container */
.location-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 16px 16px 0px;
  gap: 10px;
  width: 40px;
  height: 56px;
}
```

### 4. Movie Showtime Card

```css
/* Movie Card Container */
.movie-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 375px;
}

/* Movie Poster */
.movie-poster {
  width: 107px;
  height: 60px;
  background: url(image.png);
}

/* Age Rating Badge (Small) */
.age-rating-small {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  gap: 10px;
  width: 29px;
  height: 16px;
  background: #73E5EA;
}

.age-rating-text {
  font-weight: 700;
  font-size: 13px;
  line-height: 17px;
  text-align: right;
  color: #000000;
}

/* Movie Title */
.movie-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.015em;
  color: #0D0D0D;
}

/* Movie Meta Info */
.movie-meta {
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #0D0D0D;
}
```

### 5. Showtime Slots

```css
/* Showtime Row */
.showtime-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 343px;
  height: 75px;
}

/* Showtime Slot */
.showtime-slot {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 14px;
  width: 167.5px;
  height: 75px;
}

/* Screen Label */
.screen-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px;
  gap: 10px;
  width: 167.5px;
  height: 20px;
  background: #0D0D0D;
}

.screen-text {
  font-weight: 700;
  font-size: 11px;
  line-height: 14px;
  text-transform: uppercase;
  color: #FFFFFF;
}

/* Happy Morning Badge */
.happy-morning-badge {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 10px;
  width: 103px;
  height: 20px;
  background: #CEFA69;
}

/* Time Display */
.time-display {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px;
  gap: 16px;
  width: 167.5px;
  height: 37px;
}

/* Start Time */
.start-time {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.015em;
  color: #0D0D0D;
}

/* Time Range Dash */
.time-dash {
  width: 5.5px;
  height: 0px;
  border: 1.5px solid #000000;
}

/* End Time */
.end-time {
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #0D0D0D;
}

/* Seats Left Info */
.seats-left {
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  color: #0D0D0D;
}

/* Low Seats Warning */
.seats-left.low {
  color: #FA6E66;
}

/* Format Badge (3D, IMAX) */
.format-badge {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 2px;
  gap: 12px;
  width: 17px;
  height: 8px;
}

/* Sold Out State */
.showtime-slot.sold-out {
  opacity: 0.2;
}
```

### 6. Dividers

```css
/* Horizontal Divider */
.divider {
  width: 375px;
  height: 0px;
  border: 1px solid #E3E3E3;
}

/* Section Divider */
.section-divider {
  width: 343px;
  height: 0px;
  border: 1px solid #E3E3E3;
}
```

### 7. Main Container & Layout

```css
/* Page Container */
.page-container {
  position: relative;
  width: 375px;
  background: #FFFFFF;
}

/* Main Content Container */
.main-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 375px;
}

/* Showtime Container */
.showtime-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 48px;
  width: 375px;
}

/* Content Wrapper */
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 32px;
  width: 375px;
}
```

### 8. Image Carousel (From screenshot analysis)

```css
/* Carousel Container */
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 2px;
  width: 375px;
  height: 275px;
}

/* Main Thumbnail */
.main-thumbnail {
  width: 375px;
  height: 213px;
  overflow-x: scroll;
}

/* Carousel Images */
.carousel-images {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  isolation: isolate;
  position: absolute;
  width: 1875px;
  height: 213px;
}

/* Individual Carousel Image */
.carousel-image {
  width: 375px;
  height: 213px;
  background: url(image.png);
}

/* Thumbnail Strip */
.thumbnails {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
  width: 375px;
  height: 60px;
}

/* Thumbnail Scroll Container */
.thumbnail-scroll {
  margin: 0 auto;
  width: 290px;
  height: 60px;
  overflow-x: scroll;
}

/* Individual Thumbnail */
.movie-thumb {
  width: 107px;
  height: 60px;
}

/* Darkened Thumbnail */
.movie-thumb.inactive {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(image);
}

/* Play Icon Overlay */
.play-icon {
  position: absolute;
  width: 48px;
  height: 48px;
}
```

## Key Layout Patterns

### Auto Layout Pattern
Most components use CSS Flexbox with the following common pattern:
```css
display: flex;
flex-direction: column | row;
align-items: flex-start | center | flex-end;
padding: 0px;
gap: [value]px;
```

### Inside Auto Layout Properties
```css
flex: none;
order: [number];
flex-grow: 0 | 1;
align-self: stretch;
```

### Scroll Containers
```css
overflow-x: scroll;
```

### Opacity States
```css
/* Normal */
opacity: 1;

/* Disabled/Sold Out */
opacity: 0.2;
```

## Spacing System

- Small gap: 4px, 8px
- Medium gap: 12px, 14px, 16px
- Large gap: 24px, 32px, 40px, 48px

## Border Radius

```css
/* ALL elements use sharp corners (0px) */
border-radius: 0px;

/* EXCEPTION: Only truly circular elements (profile pictures, icon buttons) */
border-radius: 9999px;

/* Note: Badges, buttons, cards, containers - ALL use sharp corners (0px) */
/* This is a core design principle of the AEV brand */
```

## Notes

1. **Font**: ABC Diatype is the custom font family used throughout
2. **Responsive**: Design is mobile-first at 375px width
3. **Special days**: "Happy Day" uses pink (#E476FA) highlighting
4. **Status colors**: 
   - Low seats: Red (#FA6E66)
   - Happy morning: Lemon yellow (#CEFA69)
   - Age ratings: Cyan (#73E5EA)
5. **Sold out**: Uses 20% opacity on the entire slot
6. **Scroll behavior**: Horizontal scrolling for dates and thumbnails

## Component Hierarchy (From Image 01.png)

```
Cinema Page
├── Header (with tabs)
├── Location Selector
├── Date Selector (horizontal scroll)
└── Movie Listings
    ├── Movie Poster
    ├── Movie Info (title, age rating, runtime)
    └── Showtime Slots Grid
        ├── Screen Label
        ├── Special Badge (Happy Morning, etc.)
        ├── Time Display (start - end)
        ├── Seats Info
        └── Format Badge (3D, IMAX)
```

## Component Hierarchy (From Image 03.png)

```
TOP 5 Box Office Section
├── Logo/Badge ("TOP 5")
├── Headline ("Box office hits at AEON BETA this week")
├── Subtitle/Description
└── Movie Grid (5 movies horizontal)
    ├── Movie Poster
    ├── Ranking Number (#1, #2, etc.)
    ├── Age Rating Badge
    └── Movie Title
```
