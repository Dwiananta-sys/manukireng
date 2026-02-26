# 📐 SCROLL MATH & ANIMATION LOGIC

Dokumentasi teknis untuk semua perhitungan scroll dan animasi.

---

## 🎯 CORE CONCEPTS

### 1. Scroll Progress (0-1)
```javascript
/**
 * Calculate total scroll progress
 * 0 = top of page
 * 1 = bottom of page
 */
function scrollProgress() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;
  
  const totalScroll = documentHeight - windowHeight;
  return Math.min(scrollTop / totalScroll, 1);
}

// Example:
// Page height: 3000px
// Window height: 800px
// Scroll position: 1100px
// Progress: 1100 / (3000 - 800) = 1100 / 2200 = 0.5 (50%)
```

### 2. Element Visibility Progress
```javascript
/**
 * Calculate how much of element is visible in viewport
 * 0 = not visible
 * 1 = fully visible
 */
function elementVisibilityProgress(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  // Element completely above viewport
  if (rect.bottom < 0) return 0;
  
  // Element completely below viewport
  if (rect.top > windowHeight) return 0;
  
  // Calculate visible portion
  const visibleTop = Math.max(0, rect.top);
  const visibleBottom = Math.min(windowHeight, rect.bottom);
  const visibleHeight = visibleBottom - visibleTop;
  const elementHeight = rect.height;
  
  return Math.min(visibleHeight / elementHeight, 1);
}

// Example:
// Element height: 200px
// Visible portion: 100px
// Progress: 100 / 200 = 0.5 (50% visible)
```

### 3. Smooth Interpolation (Lerp)
```javascript
/**
 * Linear interpolation between two values
 * Smooth transition from start to end
 */
function smoothLerp(start, end, factor) {
  return start + (end - start) * factor;
}

// Example:
// smoothLerp(0, 100, 0.5) = 50
// smoothLerp(0, 100, 0.25) = 25
// smoothLerp(0, 100, 0.75) = 75

// In animation loop:
// currentValue = smoothLerp(currentValue, targetValue, 0.1);
// 0.1 = 10% of distance per frame (smooth)
// 0.5 = 50% of distance per frame (fast)
```

---

## 🎬 HERO SECTION ANIMATION

### Fade Out Effect
```javascript
/**
 * Hero image fades out as user scrolls
 * 
 * Calculation:
 * 1. Get scroll distance from top
 * 2. Divide by trigger distance (window height * 0.6)
 * 3. Clamp between 0 and 1
 * 4. Apply easing function
 * 5. Invert for fade out (1 - easedProgress)
 */

const windowHeight = window.innerHeight;
const triggerDistance = windowHeight * 0.6;  // Fade over 60% of viewport

// Raw progress (0-1)
const heroProgress = clamp(scrollY / triggerDistance, 0, 1);

// Apply easing for smooth feel
const easedProgress = easeOutCubic(heroProgress);

// Fade from 1 to 0
const opacity = 1 - easedProgress;

// Smooth interpolation
currentOpacity = smoothLerp(currentOpacity, opacity, 0.1);
heroImage.style.opacity = currentOpacity;
```

### Scale Down Effect
```javascript
/**
 * Hero image scales down as user scrolls
 * 
 * Calculation:
 * 1. Use same progress as fade
 * 2. Interpolate from 1 to 0.85
 * 3. Apply smooth lerp
 */

const minScale = 0.85;
const targetScale = smoothLerp(1, minScale, easedProgress);

// Smooth interpolation
currentScale = smoothLerp(currentScale, targetScale, 0.1);
heroImage.style.transform = `scale(${currentScale})`;
```

### Blur Effect
```javascript
/**
 * Hero image blur increases as user scrolls
 * 
 * Calculation:
 * 1. Use same progress as fade
 * 2. Interpolate from 0 to 15px
 * 3. Apply smooth lerp
 */

const maxBlur = 15;
const targetBlur = smoothLerp(0, maxBlur, easedProgress);

// Smooth interpolation
currentBlur = smoothLerp(currentBlur, targetBlur, 0.1);
heroImage.style.filter = `blur(${currentBlur}px)`;
```

---

## 📊 EXPERIENCE TIMELINE ANIMATION

### Timeline Line Growth
```javascript
/**
 * Vertical timeline line grows as user scrolls
 * 
 * Calculation:
 * 1. Get timeline element position
 * 2. Calculate how much is visible in viewport
 * 3. Apply easing
 * 4. Update CSS custom property for height
 */

const timelineRect = timeline.getBoundingClientRect();
const timelineTop = timelineRect.top;
const timelineHeight = timelineRect.height;
const windowHeight = window.innerHeight;

// Calculate visibility (0-1)
// When timeline enters viewport: visibility increases
// When timeline exits viewport: visibility stays at 1
const timelineVisibility = clamp(
  (windowHeight - timelineTop) / (windowHeight + timelineHeight),
  0,
  1
);

// Apply easing for smooth growth
const easedProgress = easeInOutCubic(timelineVisibility);

// Update CSS variable (0-100%)
timeline.style.setProperty('--timeline-progress', `${easedProgress * 100}%`);

// CSS:
// .timeline-line {
//   max-height: var(--timeline-progress);
//   transition: max-height 0.1s ease-out;
// }
```

### Individual Card Progress
```javascript
/**
 * Each experience card has its own progress bar
 * 
 * Calculation:
 * 1. Get card visibility in viewport
 * 2. Apply bounce easing for fun effect
 * 3. Update card progress bar width
 */

experienceCards.forEach((card, index) => {
  // Get how much of card is visible (0-1)
  const cardVisibility = elementVisibilityProgress(card);
  
  // Apply bounce easing
  const cardProgress = easeOutBounce(cardVisibility);
  
  // Update progress bar
  const progressBar = card.querySelector('[data-progress-bar]');
  progressBar.style.setProperty('--card-progress', `${cardProgress * 100}%`);
  
  // Add glow when card becomes active
  if (cardProgress > 0.3) {
    card.classList.add('active');
  }
});
```

### Staggered Animation
```javascript
/**
 * Multiple cards animate with stagger delay
 * 
 * Calculation:
 * 1. Get card visibility
 * 2. Subtract stagger delay based on index
 * 3. Clamp between 0 and 1
 * 4. Apply easing
 */

const staggerDelay = index * 0.05;  // 5% delay per card
const staggeredProgress = clamp(cardVisibility - staggerDelay, 0, 1);

// Apply easing
const easedProgress = easeOutBounce(staggeredProgress);

// Update opacity and scale
card.style.opacity = smoothLerp(0, 1, easedProgress);
card.style.transform = `scale(${smoothLerp(0.9, 1, easedProgress)})`;
```

---

## 🔵 PROGRESS CIRCLE ANIMATION

### SVG Stroke Calculation
```javascript
/**
 * SVG circle stroke animates based on scroll progress
 * 
 * Calculation:
 * 1. Get total scroll progress (0-1)
 * 2. Apply easing
 * 3. Calculate stroke-dashoffset
 * 4. Update SVG
 */

// SVG circle properties
const radius = 45;  // Circle radius in pixels
const circumference = 2 * Math.PI * radius;  // ~282.7px

// Get total scroll progress
const totalProgress = scrollProgress();

// Apply easing
const easedProgress = easeOutCubic(totalProgress);

// Calculate stroke offset
// When progress = 0: offset = circumference (no fill)
// When progress = 1: offset = 0 (full fill)
const strokeOffset = circumference * (1 - easedProgress);

// Update SVG
stroke.style.strokeDashoffset = strokeOffset;

// CSS:
// .progress-stroke {
//   stroke-dasharray: 282.7;  /* circumference */
//   stroke-dashoffset: 282.7;  /* starts empty */
// }
```

### Rotation Effect
```javascript
/**
 * Circle rotates subtly while scrolling
 * 
 * Calculation:
 * 1. Get total scroll progress
 * 2. Multiply by 360 degrees
 * 3. Use modulo to keep within 0-360
 */

const totalProgress = scrollProgress();
const rotation = (totalProgress * 360) % 360;

circle.style.transform = `rotate(${rotation}deg)`;
```

---

## 🎯 EASING FUNCTIONS

### Cubic Out (Smooth Deceleration)
```javascript
/**
 * Smooth deceleration at the end
 * Fast start, slow end
 * 
 * Formula: 1 - (1-t)³
 */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// Graph:
// t=0.0 → 0.000
// t=0.25 → 0.578
// t=0.5 → 0.875
// t=0.75 → 0.984
// t=1.0 → 1.000
```

### Cubic In-Out (Smooth Both Ways)
```javascript
/**
 * Smooth acceleration and deceleration
 * Slow start, fast middle, slow end
 * 
 * Formula: 4t³ if t<0.5, else 1-(-2t+2)³/2
 */
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Graph:
// t=0.0 → 0.000
// t=0.25 → 0.125
// t=0.5 → 0.500
// t=0.75 → 0.875
// t=1.0 → 1.000
```

### Bounce Out (Bouncy Effect)
```javascript
/**
 * Bouncy effect at the end
 * Creates playful animation
 */
function easeOutBounce(t) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (t < 1 / d1) {
    return n1 * t * t;
  } else if (t < 2 / d1) {
    return n1 * (t -= 1.5 / d1) * t + 0.75;
  } else if (t < 2.5 / d1) {
    return n1 * (t -= 2.25 / d1) * t + 0.9375;
  } else {
    return n1 * (t -= 2.625 / d1) * t + 0.984375;
  }
}

// Creates bounces at the end
```

---

## 🔧 UTILITY FUNCTIONS

### Clamp (Constrain Value)
```javascript
/**
 * Ensure value stays between min and max
 * 
 * Calculation:
 * 1. If value < min: return min
 * 2. If value > max: return max
 * 3. Otherwise: return value
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

// Examples:
// clamp(5, 0, 10) = 5
// clamp(-5, 0, 10) = 0
// clamp(15, 0, 10) = 10
```

### Map Range (Convert Between Ranges)
```javascript
/**
 * Map value from one range to another
 * 
 * Calculation:
 * 1. Normalize value to 0-1 range
 * 2. Scale to output range
 */
function mapRange(value, inMin, inMax, outMin, outMax) {
  return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin);
}

// Example:
// mapRange(50, 0, 100, 0, 1) = 0.5
// mapRange(75, 0, 100, 0, 360) = 270
```

---

## 📈 PERFORMANCE OPTIMIZATION

### requestAnimationFrame Loop
```javascript
/**
 * Main animation loop
 * Called ~60 times per second
 * 
 * Benefits:
 * - Synced with browser refresh rate
 * - Automatic pause when tab not visible
 * - Better performance than setInterval
 */

animate = () => {
  // Update all animations
  this.updateHeroAnimation();
  this.updateExperienceAnimation();
  this.updateProgressCircle();
  
  // Continue loop
  this.animationFrameId = requestAnimationFrame(this.animate);
};
```

### Smooth Interpolation
```javascript
/**
 * Smooth interpolation reduces jank
 * 
 * Instead of:
 * element.style.opacity = targetOpacity;  // Jumpy
 * 
 * Use:
 * currentOpacity = smoothLerp(currentOpacity, targetOpacity, 0.1);
 * element.style.opacity = currentOpacity;  // Smooth
 */

// Factor = 0.1 means:
// Move 10% of distance per frame
// Takes ~10 frames to reach target
// Smooth and natural feeling
```

### CSS will-change
```css
/**
 * Tell browser which properties will animate
 * Enables GPU acceleration
 */

.hero-image {
  will-change: opacity, transform, filter;
}

.progress-stroke {
  will-change: stroke-dashoffset;
}

.experience-card {
  will-change: opacity, transform;
}
```

---

## 🎓 LEARNING RESOURCES

### Understanding Easing
- https://easings.net - Visual easing function reference
- https://cubic-bezier.com - Cubic bezier editor

### SVG Stroke Animation
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset

### requestAnimationFrame
- https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

### Scroll Performance
- https://web.dev/animations-guide/
- https://web.dev/animations/

---

**Semua perhitungan scroll dan animasi dijelaskan di atas! 🚀**
