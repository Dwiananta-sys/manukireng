/**
 * CENTRALIZED ASSET SYSTEM
 * All external URLs, images, and links are managed here
 * No hardcoded URLs in HTML or other JS files
 */

export const SITE_DATA = {
  // Profile & Contact
  profileImage: 'https://imgur.com/0tsUcTV.jpg',
  email: 'mareldwi@gmail.com',
  instagram: 'https://instagram.com/nants._',
  github: 'https://github.com/yourname',
  linkedin: 'https://linkedin.com/in/yourname',

  // Hero Section
  hero: {
    heroLogo: './config/logoku.png', // Menggunakan file lokal logoku.png
    subtitle: 'Hi! I\'m Marel Dwi Ananta! I\'m into editing, designing, and sharping ideas into meaningful content.',
    backgroundImage: 'https://imgur.com/BiOrJKo.png',
  },

  // Experience Data
  experiences: [
    {
      id: 1,
      company: 'Globaliti Podcast',
      position: 'Motion Graphic Editor',
      year: '2021 - 2024',
      duration: 2.5, // years for progress calculation
      description: 'Creating Motion Graphic such as logo animation',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop',
      achievements: [
        'Using skill learned to help organization',
        'Improved content visual',
        'Improving organizations skills',
        'Improving Editing SKills'
      ]
    },
    {
      id: 2,
      company: 'Kiryu Costume Rental',
      position: 'CO-Founder, Designer and Social Media Admin',
      year: '2023 - 2025',
      duration: 2,
      description: 'This is a costume rental business that I co-founded with my friend. I handle the design and social media management, creating content to promote our costumes and engage with customers.',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop',
      achievements: [
        'Making persuative design',
        'Designed and implemented feeds content',
        'Interact with customers and maintain their satisfaction',
        'Maintaining the cleanliness of the costume'
        
      ]
    },
    {
      id: 3,
      company: 'Unit Kegiatan Mahasiswa Multimedia',
      position: 'Video Editor, Software Educator, Vice Chair of National Event Committee',
      year: '2024 - 2026',
      duration: 1,
      description: 'Editing and processing raw video into informative, entertaining and persuasive content, and giving information by doing workshops every 2 weeks to people who want to learn to video edits. And handling teams consist of 60+ people in national event; MAHAKARYA Multimedia#11.',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop',
      achievements: [
        'Handling teams consist of 70 people.',
        'Public speaking as a Software Educator.',
        'Participated as a Vice Chair at a national event Committee.',
        'Making edits, contents to bring more people joining our Student Organization.'
      ]
    }
  ],

  // Projects Data
  projects: [
    {
      id: 1,
      title: 'Valentine Content',
      description: 'A "Full of Humor" content to celebrate Valentine\'s day',
      tags: ['Editing', 'Content', 'AfterEffects', 'MoGraph'],
      image: 'https://imgur.com/Ptq2J4h.jpg',
      link: 'https://www.instagram.com/p/DGCWgceTRLL/'
    },
    {
      id: 2,
      title: '"Meme" visual editing',
      description: 'Make a "cool" visual with a humor type content',
      tags: ['Editing', 'Content', 'Humor'],
      image: 'https://imgur.com/ffLTNto.jpg',
      link: 'https://www.instagram.com/p/DHh1eswzGNY/'
    },
    {
      id: 3,
      title: 'Company Profile UKM Multimedia',
      description: 'Lead the post-production process for the organization’s company profile video and ensured the video effectively represented the organization\’s brand identity.',
      tags: ['Vfx', 'Edits', 'Company', 'AfterEffects'],
      image: 'https://imgur.com/sJyG1fd.jpg',
      link: 'https://www.instagram.com/p/DPsomAqEUPX/'
    }
  ],

  // Social Icons (SVG paths)
  icons: {
    email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" stroke-width="2"/>
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
    </svg>`,
    github: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.586zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.958-1.71 1.187 0 1.915.755 1.938 1.71 0 .951-.751 1.71-1.981 1.71zm1.581 11.597H3.715V9.724h3.203v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
    </svg>`
  }
};

/**
 * Helper function to get asset URL
 * Useful for dynamic image loading
 */
export function getAsset(path) {
  return SITE_DATA[path] || null;
}

/**
 * Helper function to get experience by ID
 */
export function getExperience(id) {
  return SITE_DATA.experiences.find(exp => exp.id === id);
}

/**
 * Helper function to get all experiences sorted by year
 */
export function getAllExperiences() {
  return SITE_DATA.experiences.sort((a, b) => b.id - a.id);
}
