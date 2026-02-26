/**
 * SCROLL ENGINE
 * Main animation loop using requestAnimationFrame
 * Handles all scroll-based animations
 */

import {
  smoothLerp,
  easeOutCubic,
  easeInOutCubic,
  scrollProgress,
  elementVisibilityProgress,
  calculateFadeOpacity,
  calculateScaleValue,
  calculateBlurValue,
  calculateStrokeDashOffset,
  clamp,
  easeOutBounce
} from './animationUtils.js';

class ScrollEngine {
  constructor() {
    this.animationFrameId = null;
    this.isRunning = false;
    
    // Cache DOM elements
    this.heroSection = null;
    this.heroImage = null;
    this.experienceSection = null;
    this.timelineCenterLine = null;
    this.timelineGear = null;
    this.experienceCards = null;
    this.experienceNodes = null;
    this.progressCircle = null;
    this.progressSvg = null;
    this.progressCircleStroke = null;
    
    // Animation state
    this.currentScroll = 0;
    this.targetScroll = 0;
    this.smoothScroll = 0;
    
    // Progress values
    this.heroFade = 0;
    this.heroScale = 1;
    this.heroBlur = 0;
    this.timelineHeight = 0;
    this.circleProgress = 0;
    
    // Gear rotation state
    this.lastScrollY = 0;
    this.currentRotation = 0;
    this.rotationVelocity = 0;
    
    // Easing factor for smooth interpolation
    this.easeFactorHero = 0.1;
    this.easeFactorTimeline = 0.08;
    this.easeFactorCircle = 0.12;
  }

  /**
   * Initialize scroll engine
   * Cache DOM elements and setup listeners
   */
  init() {
    this.cacheElements();
    this.setupListeners();
    this.start();
  }

  /**
   * Cache all DOM elements we'll be animating
   */
  cacheElements() {
    this.heroSection = document.querySelector('[data-section="hero"]');
    this.heroImage = document.querySelector('[data-hero-image]');
    this.experienceSection = document.querySelector('[data-section="experience"]');
    this.timelineCenterLine = document.querySelector('[data-timeline-line]');
    this.timelineGear = document.querySelector('[data-timeline-gear]');
    this.experienceCards = document.querySelectorAll('[data-experience-card]');
    this.experienceNodes = document.querySelectorAll('.experience-node');
    this.progressCircle = document.querySelector('[data-progress-circle]');
    this.progressSvg = document.querySelector('.progress-svg');
    this.progressCircleStroke = document.querySelector('[data-progress-stroke]');
  }

  /**
   * Setup event listeners
   */
  setupListeners() {
    // Update scroll position on scroll event
    window.addEventListener('scroll', () => {
      this.targetScroll = window.scrollY;
    }, { passive: true });

    // Handle window resize
    window.addEventListener('resize', () => {
      this.updateDimensions();
    });

    // Add click listener for scroll to top
    if (this.progressCircle) {
      this.progressCircle.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  /**
   * Update cached dimensions
   */
  updateDimensions() {
    // Recalculate any dimension-dependent values
    if (this.heroSection) {
      this.heroHeight = this.heroSection.offsetHeight;
    }
  }

  /**
   * Start animation loop
   */
  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.animate();
  }

  /**
   * Stop animation loop
   */
  stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.isRunning = false;
  }

  /**
   * Main animation loop
   * Called every frame via requestAnimationFrame
   */
  animate = () => {
    // Smooth scroll interpolation
    this.smoothScroll = smoothLerp(
      this.smoothScroll,
      this.targetScroll,
      this.easeFactorHero
    );

    // Update all animations
    this.updateHeroAnimation();
    this.updateTimelineProgress();
    this.updateScrollCircle();
    this.updateGearRotation();

    // Continue animation loop
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  /**
   * UPDATE HERO SECTION ANIMATION
   * - Fade out image
   * - Scale down image
   * - Increase blur
   */
  updateHeroAnimation() {
    if (!this.heroImage) return;

    // Calculate hero fade based on scroll
    // Hero section typically ends around 50-60% of first viewport
    const heroProgress = clamp(this.smoothScroll / (window.innerHeight * 0.6), 0, 1);

    // Apply easing for smooth feel
    const easedProgress = easeOutCubic(heroProgress);

    // Calculate animation values
    const targetFade = 1 - easedProgress; // Fade from 1 to 0
    const targetScale = smoothLerp(1, 0.85, easedProgress); // Scale from 1 to 0.85
    const targetBlur = smoothLerp(0, 15, easedProgress); // Blur from 0 to 15px

    // Smooth interpolation to target values
    this.heroFade = smoothLerp(this.heroFade, targetFade, 0.1);
    this.heroScale = smoothLerp(this.heroScale, targetScale, 0.1);
    this.heroBlur = smoothLerp(this.heroBlur, targetBlur, 0.1);

    // Apply transforms
    this.heroImage.style.opacity = this.heroFade;
    this.heroImage.style.transform = `scale(${this.heroScale})`;
    this.heroImage.style.filter = `blur(${this.heroBlur}px)`;
  }

  /**
   * UPDATE TIMELINE PROGRESS
   * Controls the central vertical line growth and node activation
   */
  updateTimelineProgress() {
    if (!this.timelineCenterLine || !this.experienceSection) return;

    // 1. Calculate progress based on scroll position relative to timeline wrapper
    // Using wrapper instead of section avoids offset from title/padding
    const timelineWrapper = this.timelineCenterLine.parentElement;
    const progress = this.getSectionScrollProgress(timelineWrapper);
    
    // 2. Smooth interpolation for the line height
    // Use linear progress to keep the line tip exactly at viewport center
    this.timelineHeight = smoothLerp(
      this.timelineHeight,
      progress,
      this.easeFactorTimeline
    );

    // 4. Update line height (0% to 100%)
    this.timelineCenterLine.style.height = `${this.timelineHeight * 100}%`;

    // 4b. Update Gear Position (follow the tip)
    if (this.timelineGear) {
      this.timelineGear.style.top = `${this.timelineHeight * 100}%`;
    }

    // 5. Update Cards and Nodes
    this.experienceCards.forEach((card, index) => {
      const cardVisibility = elementVisibilityProgress(card);
      const cardProgress = clamp(cardVisibility, 0, 1);
      
      // Staggered fade/scale for cards
      const staggerDelay = index * 0.05;
      const staggeredProgress = clamp(cardProgress - staggerDelay, 0, 1);
      const opacity = smoothLerp(0, 1, staggeredProgress);
      const scale = smoothLerp(0.9, 1, staggeredProgress);

      card.style.opacity = opacity;
      card.style.transform = `scale(${scale})`;

      // Activate corresponding node
      // Assuming nodes are in the same order as cards
      if (this.experienceNodes && this.experienceNodes[index]) {
        const node = this.experienceNodes[index];
        if (cardProgress > 0.3) {
          node.classList.add('active');
        } else {
          node.classList.remove('active');
        }
      }
    });
  }

  /**
   * UPDATE GEAR ROTATION
   * Rotates the gear based on scroll velocity
   */
  updateGearRotation() {
    if (!this.timelineGear) return;

    const currentScrollY = window.scrollY;
    
    // Calculate velocity (delta)
    const velocity = currentScrollY - this.lastScrollY;
    this.lastScrollY = currentScrollY;

    // Target speed based on velocity (adjust multiplier for sensitivity)
    const targetSpeed = velocity * 0.5;

    // Smooth interpolation for rotation speed (momentum effect)
    this.rotationVelocity = smoothLerp(this.rotationVelocity, targetSpeed, 0.1);

    // Update rotation
    this.currentRotation += this.rotationVelocity;

    // Apply transform (maintain centering translate)
    this.timelineGear.style.transform = `translate(-50%, -50%) rotate(${this.currentRotation}deg)`;

    // Visual flair: Pulse when spinning fast
    if (Math.abs(this.rotationVelocity) > 3) {
      this.timelineGear.classList.add('fast-spin');
    } else {
      this.timelineGear.classList.remove('fast-spin');
    }
  }

  /**
   * UPDATE SCROLL CIRCLE
   * Updates the bottom-right progress indicator
   */
  updateScrollCircle() {
    if (!this.progressCircleStroke || !this.progressCircle) return;

    // 1. Calculate total scroll progress (0-1)
    const totalProgress = scrollProgress();

    // 2. Apply easing
    const easedProgress = easeOutCubic(totalProgress);

    // 3. Smooth interpolation
    this.circleProgress = smoothLerp(
      this.circleProgress,
      easedProgress,
      this.easeFactorCircle
    );

    // 4. Calculate REAL stroke dash offset
    // strokeDashoffset = circumference - (progress * circumference)
    // Manual calculation to ensure reliability
    const circumference = 2 * Math.PI * 45; // ~282.7
    const strokeOffset = circumference * (1 - this.circleProgress);
    
    this.progressCircleStroke.style.strokeDashoffset = strokeOffset;

    // 5. Continuous rotation while scrolling (Rotate SVG only, keep arrow static)
    const rotation = (totalProgress * 360) % 360;
    if (this.progressSvg) {
      // Maintain -90deg offset for starting position
      this.progressSvg.style.transform = `rotate(${rotation - 90}deg)`;
    }
  }

  /**
   * GET SECTION SCROLL PROGRESS
   * Calculates how far we have scrolled through a specific section.
   * 
   * @param {HTMLElement} section 
   * @returns {number} Progress between 0 and 1
   */
  getSectionScrollProgress(section) {
    if (!section) return 0;

    const rect = section.getBoundingClientRect();
    const sectionHeight = rect.height;

    // Calculate progress based on CENTER of viewport (50%)
    // The line tip follows the center of the screen
    const viewportCenter = window.innerHeight * 0.5;
    
    // Distance from viewport center to top of section
    const distanceToCenter = viewportCenter - rect.top;
    
    // Progress calculation
    const progress = distanceToCenter / sectionHeight;

    return clamp(progress, 0, 1);
  }

  /**
   * Get current scroll progress (0-1)
   */
  getScrollProgress() {
    return scrollProgress();
  }

  /**
   * Get hero animation state
   */
  getHeroState() {
    return {
      fade: this.heroFade,
      scale: this.heroScale,
      blur: this.heroBlur
    };
  }
}

// Export singleton instance
export const scrollEngine = new ScrollEngine();
