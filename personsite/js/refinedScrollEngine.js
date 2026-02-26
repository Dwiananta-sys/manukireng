/**
 * REFINED SCROLL ENGINE
 * Updated functions for center timeline and improved progress circle
 * 
 * Key functions:
 * - updateTimelineProgress() - Center line height based on scroll
 * - updateScrollCircle() - SVG stroke based on real scroll depth
 * - getSectionScrollProgress() - Calculate section scroll percentage
 */

import {
  smoothLerp,
  easeOutCubic,
  clamp,
  easeOutBounce,
  calculateStrokeDashOffset
} from './animationUtils.js';

class RefinedScrollEngine {
  constructor() {
    this.animationFrameId = null;
    this.isRunning = false;
    
    // Cache DOM elements
    this.heroImage = null;
    this.timelineCenterLine = null;
    this.experienceCards = null;
    this.experienceNodes = null;
    this.progressCircle = null;
    this.progressCircleStroke = null;
    this.experienceSection = null;
    
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
    
    // Easing factors
    this.easeFactorHero = 0.1;
    this.easeFactorTimeline = 0.08; // Refined smoothing
    this.easeFactorCircle = 0.08;   // Refined smoothing
    
    // Dimensions
    this.documentHeight = 0;
    this.windowHeight = 0;
  }

  /**
   * Initialize scroll engine
   */
  init() {
    this.cacheElements();
    this.updateDimensions();
    this.setupListeners();
    this.start();
  }

  /**
   * Cache all DOM elements
   */
  cacheElements() {
    this.heroImage = document.querySelector('[data-hero-image]');
    this.timelineCenterLine = document.querySelector('[data-timeline-line]');
    this.experienceCards = document.querySelectorAll('[data-experience-card]');
    this.experienceNodes = document.querySelectorAll('.experience-node');
    this.progressCircle = document.querySelector('[data-progress-circle]');
    this.progressCircleStroke = document.querySelector('[data-progress-stroke]');
    this.experienceSection = document.querySelector('[data-section="experience"]');
  }

  /**
   * Setup event listeners
   */
  setupListeners() {
    window.addEventListener('scroll', () => {
      this.targetScroll = window.scrollY;
    }, { passive: true });

    window.addEventListener('resize', () => {
      this.updateDimensions();
    });
  }

  /**
   * Update cached dimensions
   */
  updateDimensions() {
    this.windowHeight = window.innerHeight;
    this.documentHeight = document.documentElement.scrollHeight;
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
   * Called ~60 times per second via requestAnimationFrame
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
    this.updateExperienceCards();
    this.updateScrollCircle();

    // Continue animation loop
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  /**
   * UPDATE HERO ANIMATION
   * Fade, scale, and blur effects
   */
  updateHeroAnimation() {
    if (!this.heroImage) return;

    const heroProgress = clamp(this.smoothScroll / (this.windowHeight * 0.6), 0, 1);
    const easedProgress = easeOutCubic(heroProgress);

    const targetFade = 1 - easedProgress;
    const targetScale = smoothLerp(1, 0.85, easedProgress);
    const targetBlur = smoothLerp(0, 15, easedProgress);

    this.heroFade = smoothLerp(this.heroFade, targetFade, 0.1);
    this.heroScale = smoothLerp(this.heroScale, targetScale, 0.1);
    this.heroBlur = smoothLerp(this.heroBlur, targetBlur, 0.1);

    this.heroImage.style.opacity = this.heroFade;
    this.heroImage.style.transform = `scale(${this.heroScale})`;
    this.heroImage.style.filter = `blur(${this.heroBlur}px)`;
  }

  /**
   * UPDATE CENTER TIMELINE PROGRESS
   * 
   * Calculation:
   * 1. Calculate viewport center (absolute document position)
   * 2. Calculate progress relative to section top
   * 3. Clamp between 0 and 1
   * 4. Apply lerp smoothing (0.08)
   * 
   * viewportCenter = window.scrollY + (window.innerHeight / 2)
   * progress = (viewportCenter - sectionTop) / sectionHeight
   */
  updateTimelineProgress() {
    if (!this.timelineCenterLine || !this.experienceSection) return;

    // Logic: Progress based on viewport center relative to section bounds
    const viewportCenter = window.scrollY + (this.windowHeight / 2);
    const sectionRect = this.experienceSection.getBoundingClientRect();
    const sectionTop = sectionRect.top + window.scrollY; // Absolute top
    const sectionHeight = sectionRect.height;
    const sectionBottom = sectionTop + sectionHeight;

    let targetProgress = 0;

    if (viewportCenter < sectionTop) targetProgress = 0;
    else if (viewportCenter > sectionBottom) targetProgress = 1;
    else targetProgress = (viewportCenter - sectionTop) / sectionHeight;

    // Smooth interpolation (lerp 0.08)
    this.timelineHeight = smoothLerp(
      this.timelineHeight,
      targetProgress,
      this.easeFactorTimeline
    );

    // Update timeline height
    const actualHeight = sectionHeight * this.timelineHeight;
    this.timelineCenterLine.style.height = `${actualHeight}px`;
  }

  /**
   * UPDATE EXPERIENCE CARDS
   * 
   * Activation Logic:
   * Node becomes active when it crosses the center of the viewport.
   * node.offsetTop < viewportCenter
   * 
   * Effects:
   * - Glow ring animation (via CSS .active)
   * - Slight scale bounce (via CSS .active)
   * - Fade in card
   */
  updateExperienceCards() {
    // Re-query nodes if they were injected dynamically and not cached yet
    if (!this.experienceNodes || this.experienceNodes.length === 0) {
        this.experienceNodes = document.querySelectorAll('.experience-node');
    }
    
    if (!this.experienceCards.length && !this.experienceNodes.length) return;

    const viewportCenter = this.windowHeight / 2; // Relative to viewport for getBoundingClientRect

    this.experienceCards.forEach((card, index) => {
      const node = this.experienceNodes[index];
      
      // If we have a corresponding node, check its position relative to center
      if (node) {
        const nodeRect = node.getBoundingClientRect();
        
        // Check if node is above the center line
        if (nodeRect.top < viewportCenter) {
            node.classList.add('active');
            card.classList.add('active'); // Fade in card
            card.style.opacity = 1;
            card.style.transform = 'scale(1)';
        } else {
            node.classList.remove('active');
            card.classList.remove('active');
            card.style.opacity = 0.2; // Dim inactive cards
            card.style.transform = 'scale(0.95)';
        }
      }
    });
  }

  /**
   * UPDATE SCROLL PROGRESS CIRCLE
   * 
   * Calculation:
   * 1. Calculate total scroll progress (0-1)
   *    progress = scrollY / (documentHeight - windowHeight)
   * 
   * 2. Apply easing for smooth feel
   * 
   * 3. Calculate SVG stroke dash offset
   *    offset = circumference * (1 - progress)
   *    circumference = 2 * PI * radius = 282.7 (for radius 45)
   * 
   * 4. Add subtle rotation based on scroll
   * 
   * 5. Use smooth lerp for interpolation
   */
  updateScrollCircle() {
    if (!this.progressCircleStroke || !this.progressCircle) return;

    // Calculate total scroll progress (0-1)
    const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    // Prevent divide by zero
    const maxScroll = totalScrollableHeight > 0 ? totalScrollableHeight : 1;
    
    const rawProgress = window.scrollY / maxScroll;
    const targetProgress = clamp(rawProgress, 0, 1);

    // Smooth interpolation to target progress
    this.circleProgress = smoothLerp(
      this.circleProgress,
      targetProgress,
      this.easeFactorCircle
    );

    /**
     * SVG STROKE CALCULATION
     * 
     * Circle circumference = 2 * PI * radius
     * For radius 45px: circumference ≈ 282.7px
     * 
     * stroke-dasharray: 282.7 (full circle)
     * stroke-dashoffset: circumference * (1 - progress)
     * 
     * When progress = 0: offset = 282.7 (empty)
     * When progress = 1: offset = 0 (full)
     */
    const circumference = 2 * Math.PI * 45;
    const strokeOffset = circumference * (1 - this.circleProgress);

    this.progressCircleStroke.style.strokeDashoffset = strokeOffset;

    /**
     * SUBTLE ROTATION
     * Rotate circle slightly based on smoothed scroll progress
     * Creates visual feedback of scrolling
     */
    const rotation = (this.circleProgress * 360) % 360;
    this.progressCircle.style.transform = `rotate(${rotation}deg)`;
  }

  /**
   * GET SECTION SCROLL PROGRESS
   * 
   * Calculate how much of a section is visible in viewport
   * Returns value between 0 and 1
   * 
   * @param {HTMLElement} section - Section element to check
   * @returns {number} Progress value (0-1)
   */
  getSectionScrollProgress(section) {
    if (!section) return 0;

    const rect = section.getBoundingClientRect();
    const windowHeight = this.windowHeight;

    // Section completely above viewport
    if (rect.bottom < 0) return 0;

    // Section completely below viewport
    if (rect.top > windowHeight) return 0;

    // Calculate visible portion
    const visibleTop = Math.max(0, rect.top);
    const visibleBottom = Math.min(windowHeight, rect.bottom);
    const visibleHeight = visibleBottom - visibleTop;
    const sectionHeight = rect.height;

    return Math.min(visibleHeight / sectionHeight, 1);
  }

  /**
   * Get current scroll progress (0-1)
   */
  getScrollProgress() {
    const totalScrollableHeight = this.documentHeight - this.windowHeight;
    return clamp(this.targetScroll / totalScrollableHeight, 0, 1);
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

  /**
   * Get timeline animation state
   */
  getTimelineState() {
    return {
      height: this.timelineHeight,
      actualHeight: this.timelineCenterLine?.style.height || '0px'
    };
  }
}

// Export singleton instance
export const refinedScrollEngine = new RefinedScrollEngine();
