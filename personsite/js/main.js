/**
 * MAIN APPLICATION FILE
 * Integrates all modules and initializes the portfolio
 */

import { SITE_DATA } from '../config/assets.js';
import { scrollEngine } from './scrollEngine.js';

/**
 * Initialize the entire application
 */
class PortfolioApp {
  constructor() {
    this.siteData = SITE_DATA;
  }

  /**
   * Initialize app
   */
  init() {
    this.injectAssets();
    this.renderExperience();
    this.renderProjects();
    this.setupContactLinks();
    this.setupSocialIcons();
    this.setupScrollEngine();
    this.setupSmoothScroll();
    this.setupProjectModal();
    this.setupScrollAnimations();
    this.setupMobileMenu();
    this.setupCursorRipple();
    this.setupExperienceInteractions();
  }

  /**
   * Inject assets from centralized config
   */
  injectAssets() {
    // Hero background image
    const heroImage = document.querySelector('[data-hero-image]');
    if (heroImage && this.siteData.hero.backgroundImage) {
      heroImage.src = this.siteData.hero.backgroundImage;
      heroImage.alt = this.siteData.hero.title;
    }

    // Profile image
    const profileImg = document.querySelector('[data-profile-image]');
    if (profileImg && this.siteData.profileImage) {
      profileImg.src = this.siteData.profileImage;
      profileImg.alt = 'Profile';
    }

    // Hero title and subtitle
    const heroTitle = document.querySelector('[data-hero-title]');
    if (heroTitle) {
      heroTitle.textContent = this.siteData.hero.title;
    }

    const heroSubtitle = document.querySelector('[data-hero-subtitle]');
    if (heroSubtitle) {
      heroSubtitle.textContent = this.siteData.hero.subtitle;
    }
  }

  /**
   * Render experience cards dynamically
   */
  renderExperience() {
    const experienceList = document.querySelector('[data-experience-list]');
    if (!experienceList) return;

    experienceList.innerHTML = this.siteData.experiences
      .map((exp, index) => `
        <div class="experience-card" data-experience-card data-index="${index}">
          <!-- Progress bar at top -->
          <div class="experience-progress" data-progress-bar></div>

          <!-- Card content -->
          <div class="experience-header">
            <div class="experience-company">${exp.company}</div>
            <h3 class="experience-position">${exp.position}</h3>
            <div class="experience-year">${exp.year}</div>
          </div>

          <p class="experience-description">${exp.description}</p>

          <ul class="experience-achievements">
            ${exp.achievements.map(achievement => `
              <li>${achievement}</li>
            `).join('')}
          </ul>
        </div>
      `)
      .join('');
  }

  /**
   * Render project cards dynamically
   */
  renderProjects() {
    const projectsGrid = document.querySelector('[data-projects-grid]');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = this.siteData.projects
      .map((project, index) => `
        <div class="project-card animate-on-scroll" data-project-index="${index}" style="animation-delay: ${index * 0.1}s">
          <img src="${project.image}" alt="${project.title}" class="project-image">
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
              ${project.tags.map(tag => `
                <span class="project-tag">${tag}</span>
              `).join('')}
            </div>
            <button class="btn btn-secondary" style="margin-top: var(--spacing-md); width: 100%;">View Details</button>
          </div>
        </div>
      `)
      .join('');
  }

  /**
   * Setup contact links from assets
   */
  setupContactLinks() {
    const emailLink = document.querySelector('[data-contact-email]');
    if (emailLink && this.siteData.email) {
      emailLink.href = `mailto:${this.siteData.email}`;
    }

    const instagramLink = document.querySelector('[data-contact-instagram]');
    if (instagramLink && this.siteData.instagram) {
      instagramLink.href = this.siteData.instagram;
      instagramLink.target = '_blank';
    }
  }

  /**
   * Setup social icons from SVG data
   */
  setupSocialIcons() {
    const iconElements = document.querySelectorAll('[data-icon]');
    
    iconElements.forEach(element => {
      const iconType = element.getAttribute('data-icon');
      const svgContent = this.siteData.icons[iconType];
      
      if (svgContent) {
        element.innerHTML = svgContent;
      }
    });
  }

  /**
   * Setup scroll engine
   */
  setupScrollEngine() {
    scrollEngine.init();
  }

  /**
   * Setup smooth scroll for navigation links
   */
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        // Hanya jalankan smooth scroll jika href diawali # dan bukan cuma # saja
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  /**
   * Setup Project Modal Interaction
   */
  setupProjectModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = modal.querySelector('.close-modal');
    const modalImage = modal.querySelector('[data-modal-image]');
    const modalTitle = modal.querySelector('[data-modal-title]');
    const modalDesc = modal.querySelector('[data-modal-description]');
    const modalTags = modal.querySelector('[data-modal-tags]');
    const modalLink = modal.querySelector('[data-modal-link]');

    // Open Modal
    document.querySelector('[data-projects-grid]').addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      if (!card) return;

      const index = card.dataset.projectIndex;
      const project = this.siteData.projects[index];

      if (project) {
        modalImage.src = project.image;
        modalTitle.textContent = project.title;
        modalDesc.textContent = project.description;
        
        // Populate tags
        modalTags.innerHTML = project.tags.map(tag => 
          `<span class="project-tag">${tag}</span>`
        ).join('');

        // Setup link button
        // Assumes project data has a 'link' property for the URL
        if (project.links && project.links.demo) {
            modalLink.href = project.links.demo;
            modalLink.style.display = 'inline-block';
            modalLink.textContent = 'Visit Project';
            modalLink.target = '_blank';
            modalLink.rel = 'noopener noreferrer';
        } else if (project.link) {
            modalLink.href = project.link;
            modalLink.style.display = 'inline-block';
            modalLink.textContent = 'Visit Project';
            modalLink.target = '_blank';
            modalLink.rel = 'noopener noreferrer';
        } else {
            modalLink.style.display = 'none';
        }

        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }
    });

    // Close Modal Function
    const closeModal = () => {
      modal.classList.add('closing');
      // Wait for bounceOut animation to finish (500ms)
      setTimeout(() => {
        modal.classList.remove('show');
        modal.classList.remove('closing');
        document.body.style.overflow = '';
      }, 500);
    };

    closeBtn.addEventListener('click', closeModal);
    
    // Close on click outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  /**
   * Setup Scroll Animations (Intersection Observer)
   * Triggers animations when elements enter viewport
   */
  setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('out');
        } else {
          // Animate out when leaving viewport
          if (entry.target.classList.contains('visible')) {
            entry.target.classList.remove('visible');
            entry.target.classList.add('out');
          }
        }
      });
    }, { threshold: 0.15 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
  }

  /**
   * Setup Mobile Menu Toggle
   */
  setupMobileMenu() {
    const menuBtn = document.querySelector('[data-mobile-menu-btn]');
    const navMenu = document.querySelector('[data-nav-menu]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuBtn || !navMenu) return;

    const toggleMenu = () => {
      menuBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
      // Prevent scrolling when menu is open
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    };

    menuBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          toggleMenu();
        }
      });
    });
  }

  /**
   * Setup Cursor Ripple Effect (Water Wipe)
   */
  setupCursorRipple() {
    let lastTime = 0;
    document.addEventListener('mousemove', (e) => {
      const now = Date.now();
      // Throttle creation to avoid performance issues (approx 20fps)
      if (now - lastTime < 50) return; 
      lastTime = now;

      const ripple = document.createElement('div');
      ripple.className = 'cursor-ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);

      // Cleanup is handled by CSS animation end, but strictly:
      setTimeout(() => ripple.remove(), 1000);
    });
  }

  /**
   * Setup Experience Card Interactions (UKM Modal)
   */
  setupExperienceInteractions() {
    const cards = document.querySelectorAll('[data-experience-card]');
    const modal = document.getElementById('ukm-modal');
    if (!modal) return;

    const closeBtn = modal.querySelector('.close-modal');
    const gallery = document.getElementById('ukm-gallery');
    const btnSertif = document.getElementById('btn-sertif');
    const btnEducator = document.getElementById('btn-educator');

    // URL Foto (Ganti URL placeholder ini dengan link foto asli Anda)
    const photos = {
      sertif: [
        "https://imgur.com/3Z1TqVQ.jpg",
        "https://imgur.com/W0e8dCz.jpg",
      ],
      educator: [
        "https://imgur.com/mqQla1w.jpg",
        "https://imgur.com/lPTHJzA.jpg"
      ]
    };

    // Cari kartu "Unit Kegiatan Mahasiswa" dan buat bisa diklik
    cards.forEach(card => {
      // Cek apakah teks kartu mengandung kata kunci
      if (card.textContent.toLowerCase().includes('unit kegiatan mahasiswa')) {
        card.style.cursor = 'pointer';
        card.title = "Klik untuk melihat detail";
        
        card.addEventListener('click', () => {
          modal.classList.add('show');
          document.body.style.overflow = 'hidden';
          gallery.innerHTML = ''; // Reset galeri saat dibuka
        });
      }
    });

    // Event Listener Tombol Sertifikat
    if (btnSertif) {
      btnSertif.addEventListener('click', () => {
        gallery.innerHTML = photos.sertif.map(url => 
          `<img src="${url}" class="cert-frame" alt="Sertifikat">`
        ).join('');
      });
    }

    // Event Listener Tombol Educator
    if (btnEducator) {
      btnEducator.addEventListener('click', () => {
        gallery.innerHTML = photos.educator.map(url => 
          `<img src="${url}" alt="Software Educator">`
        ).join('');
      });
    }

    // Logic Tutup Modal
    const closeModal = () => {
      modal.classList.add('closing');
      setTimeout(() => {
        modal.classList.remove('show');
        modal.classList.remove('closing');
        document.body.style.overflow = '';
      }, 500);
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

/**
 * Initialize app when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  const app = new PortfolioApp();
  app.init();

  // Log initialization
  console.log('%c✨ Portfolio initialized with dynamic scroll animations', 
    'font-size: 14px; color: #00d4ff; font-weight: bold;');
});

/**
 * Handle visibility changes
 * Pause animations when tab is not visible
 */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    scrollEngine.stop();
  } else {
    scrollEngine.start();
  }
});
