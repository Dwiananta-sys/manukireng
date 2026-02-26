/**
 * ANIMATION UTILITIES
 * Reusable animation functions and easing functions
 * All scroll-based calculations happen here
 */

/**
 * Linear interpolation between two values
 * @param {number} start - Starting value
 * @param {number} end - Ending value
 * @param {number} factor - Interpolation factor (0-1)
 * @returns {number} Interpolated value
 */
export function smoothLerp(start, end, factor) {
  return start + (end - start) * factor;
}

/**
 * Easing function: Cubic Out
 * Smooth deceleration at the end
 * @param {number} t - Time value (0-1)
 * @returns {number} Eased value
 */
export function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Easing function: Cubic In-Out
 * Smooth acceleration and deceleration
 * @param {number} t - Time value (0-1)
 * @returns {number} Eased value
 */
export function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Easing function: Quad Out
 * Gentle deceleration
 * @param {number} t - Time value (0-1)
 * @returns {number} Eased value
 */
export function easeOutQuad(t) {
  return 1 - (1 - t) * (1 - t);
}

/**
 * Calculate scroll progress (0-1)
 * @returns {number} Scroll progress percentage
 */
export function scrollProgress() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;
  
  // Total scrollable distance
  const totalScroll = documentHeight - windowHeight;
  
  // Return clamped value between 0 and 1
  return Math.min(scrollTop / totalScroll, 1);
}

/**
 * Calculate how much of an element is visible in viewport
 * Returns value between 0 and 1
 * @param {HTMLElement} element - Element to check
 * @returns {number} Visibility progress (0-1)
 */
export function elementVisibilityProgress(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  // Element top position relative to viewport
  const elementTop = rect.top;
  const elementBottom = rect.bottom;
  
  // If element is completely above viewport
  if (elementBottom < 0) return 0;
  
  // If element is completely below viewport
  if (elementTop > windowHeight) return 0;
  
  // Calculate how much of element is visible
  const visibleTop = Math.max(0, elementTop);
  const visibleBottom = Math.min(windowHeight, elementBottom);
  const visibleHeight = visibleBottom - visibleTop;
  const elementHeight = rect.height;
  
  // Return progress (0 = not visible, 1 = fully visible)
  return Math.min(visibleHeight / elementHeight, 1);
}

/**
 * Calculate scroll distance from element to viewport center
 * Useful for fade-in animations
 * @param {HTMLElement} element - Element to check
 * @returns {number} Distance in pixels (negative = above viewport, positive = below)
 */
export function elementDistanceFromCenter(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const elementCenter = rect.top + rect.height / 2;
  const viewportCenter = windowHeight / 2;
  
  return elementCenter - viewportCenter;
}

/**
 * Calculate opacity based on scroll distance
 * Used for fade-in effects
 * @param {HTMLElement} element - Element to check
 * @param {number} triggerDistance - Distance at which to start fading (default 300px)
 * @returns {number} Opacity value (0-1)
 */
export function calculateFadeOpacity(element, triggerDistance = 300) {
  const distance = Math.abs(elementDistanceFromCenter(element));
  
  if (distance > triggerDistance) return 0;
  
  // Fade in as element approaches center
  return 1 - (distance / triggerDistance);
}

/**
 * Calculate scale based on scroll distance
 * Used for scale-in effects
 * @param {HTMLElement} element - Element to check
 * @param {number} minScale - Minimum scale value (default 0.8)
 * @param {number} triggerDistance - Distance at which to start scaling (default 300px)
 * @returns {number} Scale value
 */
export function calculateScaleValue(element, minScale = 0.8, triggerDistance = 300) {
  const distance = Math.abs(elementDistanceFromCenter(element));
  
  if (distance > triggerDistance) return minScale;
  
  // Scale up as element approaches center
  const scaleFactor = 1 - (distance / triggerDistance);
  return minScale + (1 - minScale) * scaleFactor;
}

/**
 * Calculate blur based on scroll distance
 * Used for blur effects
 * @param {HTMLElement} element - Element to check
 * @param {number} maxBlur - Maximum blur value in pixels (default 10)
 * @param {number} triggerDistance - Distance at which to start blurring (default 300px)
 * @returns {number} Blur value in pixels
 */
export function calculateBlurValue(element, maxBlur = 10, triggerDistance = 300) {
  const distance = Math.abs(elementDistanceFromCenter(element));
  
  if (distance > triggerDistance) return maxBlur;
  
  // Reduce blur as element approaches center
  const blurFactor = distance / triggerDistance;
  return maxBlur * blurFactor;
}

/**
 * Clamp value between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Map value from one range to another
 * @param {number} value - Value to map
 * @param {number} inMin - Input minimum
 * @param {number} inMax - Input maximum
 * @param {number} outMin - Output minimum
 * @param {number} outMax - Output maximum
 * @returns {number} Mapped value
 */
export function mapRange(value, inMin, inMax, outMin, outMax) {
  return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin);
}

/**
 * Calculate rotation based on scroll
 * @param {number} scrollAmount - Amount scrolled
 * @param {number} sensitivity - Rotation sensitivity (default 0.5)
 * @returns {number} Rotation in degrees
 */
export function calculateRotation(scrollAmount, sensitivity = 0.5) {
  return (scrollAmount * sensitivity) % 360;
}

/**
 * Bounce easing function
 * Creates a bouncy effect
 * @param {number} t - Time value (0-1)
 * @returns {number} Eased value
 */
export function easeOutBounce(t) {
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

/**
 * Elastic easing function
 * Creates an elastic effect
 * @param {number} t - Time value (0-1)
 * @returns {number} Eased value
 */
export function easeOutElastic(t) {
  const c5 = (2 * Math.PI) / 4.5;

  return t === 0
    ? 0
    : t === 1
    ? 1
    : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c5) + 1;
}

/**
 * Calculate SVG stroke dash offset for circular progress
 * @param {number} progress - Progress value (0-1)
 * @param {number} radius - Circle radius
 * @returns {number} Stroke dash offset
 */
export function calculateStrokeDashOffset(progress, radius = 45) {
  const circumference = 2 * Math.PI * radius;
  return circumference * (1 - progress);
}

/**
 * Interpolate between two colors (RGB)
 * @param {string} color1 - Start color (hex or rgb)
 * @param {string} color2 - End color (hex or rgb)
 * @param {number} factor - Interpolation factor (0-1)
 * @returns {string} Interpolated color in rgb format
 */
export function interpolateColor(color1, color2, factor) {
  // Parse colors (simplified - assumes hex format)
  const c1 = parseInt(color1.slice(1), 16);
  const c2 = parseInt(color2.slice(1), 16);
  
  const r1 = (c1 >> 16) & 255;
  const g1 = (c1 >> 8) & 255;
  const b1 = c1 & 255;
  
  const r2 = (c2 >> 16) & 255;
  const g2 = (c2 >> 8) & 255;
  const b2 = c2 & 255;
  
  const r = Math.round(smoothLerp(r1, r2, factor));
  const g = Math.round(smoothLerp(g1, g2, factor));
  const b = Math.round(smoothLerp(b1, b2, factor));
  
  return `rgb(${r}, ${g}, ${b})`;
}
