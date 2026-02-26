# 🎨 Customization Guide - Personal Portfolio

Panduan lengkap untuk customize portfolio sesuai kebutuhan Anda.

## 🎯 Quick Start Customization

### 1. Ubah Nama & Informasi Dasar

**File:** `index.html`

```html
<!-- Ubah title -->
<title>Your Name - Portfolio</title>

<!-- Ubah logo -->
<span class="logo-text">Your Name</span>

<!-- Ubah hero title -->
<h1 class="hero-title">
    <span class="text-gradient">Your Title</span>
    <br>
    <span class="text-light">Your Subtitle</span>
</h1>

<!-- Ubah hero subtitle -->
<p class="hero-subtitle">Your professional tagline here</p>
```

---

### 2. Ubah Warna Tema

**File:** `styles/main.css`

Cari section `:root` dan ubah CSS variables:

```css
:root {
    /* Primary color - warna utama */
    --primary: #00d4ff;      /* Cyan - ubah ke warna pilihan */
    
    /* Secondary color - warna sekunder */
    --secondary: #7c3aed;    /* Purple - ubah ke warna pilihan */
    
    /* Accent color - warna highlight */
    --accent: #ff006e;       /* Pink - ubah ke warna pilihan */
    
    /* Background colors */
    --dark-bg: #0a0e27;      /* Main background */
    --dark-surface: #1a1f3a; /* Surface/card background */
    --dark-border: #2d3561;  /* Border color */
    
    /* Text colors */
    --text-primary: #ffffff;     /* Main text */
    --text-secondary: #b0b8d4;   /* Secondary text */
    --text-muted: #7a8199;       /* Muted text */
}
```

**Contoh Kombinasi Warna:**

```css
/* Blue & Orange Theme */
--primary: #0ea5e9;
--secondary: #f97316;
--accent: #ec4899;

/* Green & Purple Theme */
--primary: #10b981;
--secondary: #8b5cf6;
--accent: #f59e0b;

/* Red & Yellow Theme */
--primary: #ef4444;
--secondary: #eab308;
--accent: #06b6d4;
```

---

### 3. Ubah Font

**File:** `styles/main.css`

```css
body {
    /* Default system fonts */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    
    /* Atau gunakan Google Fonts */
    /* font-family: 'Poppins', sans-serif; */
    /* font-family: 'Inter', sans-serif; */
    /* font-family: 'JetBrains Mono', monospace; */
}
```

**Cara Tambah Google Fonts:**

1. Buka https://fonts.google.com
2. Pilih font yang diinginkan
3. Copy link di `index.html` head:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

4. Update CSS:

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

---

### 4. Edit Experience Data

**File:** `data/data.js`

```javascript
const experienceData = [
    {
        id: 1,
        title: "Your Job Title",           // Ubah judul
        company: "Company Name",            // Ubah nama perusahaan
        period: "2022 - Present",           // Ubah periode
        progress: 85,                       // Ubah progress (0-100)
        description: "Job description",     // Ubah deskripsi
        bullets: [
            "Achievement 1",                // Ubah bullet points
            "Achievement 2",
            "Achievement 3"
        ]
    },
    // Tambah lebih banyak experience...
];
```

**Contoh Lengkap:**

```javascript
const experienceData = [
    {
        id: 1,
        title: "Lead Developer",
        company: "Tech Company",
        period: "2023 - Present",
        progress: 90,
        description: "Leading development team and architecting scalable solutions",
        bullets: [
            "Managed team of 8 developers",
            "Improved app performance by 50%",
            "Implemented CI/CD pipeline",
            "Mentored junior developers"
        ]
    },
    {
        id: 2,
        title: "Full Stack Developer",
        company: "Startup Inc",
        period: "2021 - 2023",
        progress: 75,
        description: "Built full-stack web applications",
        bullets: [
            "Developed React applications",
            "Created REST APIs with Node.js",
            "Managed PostgreSQL databases",
            "Deployed to AWS"
        ]
    }
];
```

---

### 5. Edit Projects Data

**File:** `data/data.js`

```javascript
const projectsData = [
    {
        id: 1,
        title: "Project Name",
        description: "Project description",
        tags: ["React", "Node.js", "MongoDB"],
        emoji: "🎯",  // Ubah emoji
        links: {
            demo: "https://project-demo.com",
            github: "https://github.com/username/project"
        }
    },
    // Tambah lebih banyak projects...
];
```

**Emoji Suggestions:**
- 🛍️ E-commerce
- ✓ Task Manager
- 📊 Analytics
- 👥 Social Media
- 🤖 AI/Bot
- 🎨 Design
- 📱 Mobile App
- 🎮 Game
- 📚 Learning
- 💼 Business

---

### 6. Ubah Social Links

**File:** `index.html` - Section Contact

```html
<div class="social-links">
    <a href="https://github.com/yourname" class="social-link" title="GitHub">
        <!-- SVG Icon -->
    </a>
    <a href="https://linkedin.com/in/yourname" class="social-link" title="LinkedIn">
        <!-- SVG Icon -->
    </a>
    <a href="https://twitter.com/yourname" class="social-link" title="Twitter">
        <!-- SVG Icon -->
    </a>
</div>
```

---

## 🎨 Advanced Customization

### Ubah Spacing & Sizing

**File:** `styles/main.css`

```css
:root {
    /* Spacing */
    --spacing-xs: 0.5rem;    /* 8px */
    --spacing-sm: 1rem;      /* 16px */
    --spacing-md: 1.5rem;    /* 24px */
    --spacing-lg: 2rem;      /* 32px */
    --spacing-xl: 3rem;      /* 48px */
    --spacing-2xl: 4rem;     /* 64px */
    
    /* Border Radius */
    --radius-sm: 0.5rem;     /* 8px */
    --radius-md: 1rem;       /* 16px */
    --radius-lg: 1.5rem;     /* 24px */
}
```

### Ubah Transition Speed

**File:** `styles/main.css`

```css
:root {
    --transition-fast: 0.2s ease;    /* 200ms */
    --transition-normal: 0.3s ease;  /* 300ms */
    --transition-slow: 0.5s ease;    /* 500ms */
}
```

### Ubah Animation Duration

**File:** `styles/animations.css`

```css
@keyframes bouncyIn {
    /* Ubah 0.6s menjadi durasi yang diinginkan */
    animation: bouncyIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}
```

---

## 📱 Responsive Customization

### Ubah Mobile Breakpoints

**File:** `styles/main.css`

```css
/* Tablet */
@media (max-width: 768px) {
    /* Ubah styles untuk tablet */
}

/* Mobile */
@media (max-width: 480px) {
    /* Ubah styles untuk mobile */
}
```

---

## 🎬 Animation Customization

### Ubah Animasi Bouncy

**File:** `styles/animations.css`

```css
@keyframes bouncyIn {
    0% {
        opacity: 0;
        transform: scale(0.3);  /* Ubah scale value */
    }
    50% {
        opacity: 1;
        transform: scale(1.05); /* Ubah bounce height */
    }
    70% {
        transform: scale(0.95);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
```

### Buat Animasi Custom

```css
@keyframes myCustomAnimation {
    0% {
        opacity: 0;
        transform: translateY(20px) rotate(0deg);
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
        transform: translateY(0) rotate(5deg);
    }
}

.my-custom-animation {
    animation: myCustomAnimation 0.8s ease-out forwards;
}
```

---

## 🔧 Component Customization

### Ubah Button Style

**File:** `styles/main.css`

```css
.btn-primary {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: var(--dark-bg);
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: var(--radius-md);
}

.btn-primary:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}
```

### Ubah Card Style

```css
.project-card {
    background: rgba(29, 35, 66, 0.5);
    border: 1px solid var(--dark-border);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
}

.project-card:hover {
    background: rgba(29, 35, 66, 0.8);
    border-color: var(--primary);
    transform: translateY(-10px);
}
```

---

## 📝 Content Customization

### Ubah About Section

**File:** `index.html`

```html
<section id="about" class="about">
    <div class="container">
        <h2 class="section-title scroll-fade-in">About Me</h2>
        <div class="about-content">
            <div class="about-text scroll-fade-in">
                <p>Your about text here...</p>
                <p>More about you...</p>
                <div class="skills-grid">
                    <div class="skill-tag">Skill 1</div>
                    <div class="skill-tag">Skill 2</div>
                    <!-- Add more skills -->
                </div>
            </div>
        </div>
    </div>
</section>
```

### Ubah Hero Section

```html
<section id="hero" class="hero">
    <div class="hero-content">
        <h1 class="hero-title">
            <span class="text-gradient">Your Main Title</span>
            <br>
            <span class="text-light">Your Subtitle</span>
        </h1>
        <p class="hero-subtitle">Your tagline or description</p>
        <div class="hero-buttons">
            <button class="btn btn-primary bouncy-in">Button 1</button>
            <button class="btn btn-secondary bouncy-in">Button 2</button>
        </div>
    </div>
</section>
```

---

## 🌐 SEO Customization

**File:** `index.html` - Head section

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Your portfolio description">
    <meta name="keywords" content="developer, designer, portfolio">
    <meta name="author" content="Your Name">
    <title>Your Name - Portfolio</title>
    
    <!-- Open Graph -->
    <meta property="og:title" content="Your Name - Portfolio">
    <meta property="og:description" content="Your portfolio description">
    <meta property="og:image" content="your-image-url">
    <meta property="og:url" content="your-website-url">
</head>
```

---

## 🚀 Performance Optimization

### Lazy Load Images

```html
<img src="image.jpg" loading="lazy" alt="Description">
```

### Optimize SVG

```html
<!-- Minimize SVG paths -->
<svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
</svg>
```

### CSS Optimization

```css
/* Use CSS variables untuk reusability */
:root {
    --primary: #00d4ff;
}

/* Gunakan shorthand properties */
.element {
    margin: 0 auto;
    padding: 1rem;
    border-radius: 0.5rem;
}
```

---

## 📊 Analytics Integration

Tambahkan Google Analytics:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

---

## 🔐 Security Tips

1. **Sanitize User Input** - Jika ada form
2. **Use HTTPS** - Saat deploy
3. **Validate Data** - Di backend jika ada
4. **Protect API Keys** - Jangan expose di frontend

---

## 📋 Checklist Customization

- [ ] Ubah nama dan informasi dasar
- [ ] Ubah warna tema sesuai brand
- [ ] Update experience data
- [ ] Update projects data
- [ ] Ubah social links
- [ ] Update about section
- [ ] Customize fonts
- [ ] Test responsive design
- [ ] Optimize images
- [ ] Add analytics
- [ ] Deploy website

---

**Happy Customizing! 🎨✨**
