# ⚡ QUICK REFERENCE

Panduan cepat untuk referensi cepat.

## 🎯 File Locations

| File | Purpose | Edit For |
|------|---------|----------|
| `index.html` | Main HTML | Content, structure |
| `styles/main.css` | Main styles | Colors, layout, spacing |
| `styles/animations.css` | Animations | Animation timing, effects |
| `js/main.js` | JavaScript | Interactivity, logic |
| `data/data.js` | Data | Experience, projects |
| `manifest.json` | PWA | App metadata |
| `netlify.toml` | Netlify config | Deployment settings |
| `vercel.json` | Vercel config | Deployment settings |

---

## 🎨 CSS Variables

```css
/* Colors */
--primary: #00d4ff;           /* Main color */
--secondary: #7c3aed;         /* Secondary color */
--accent: #ff006e;            /* Accent color */
--dark-bg: #0a0e27;           /* Background */
--dark-surface: #1a1f3a;      /* Surface */
--dark-border: #2d3561;       /* Border */
--text-primary: #ffffff;      /* Main text */
--text-secondary: #b0b8d4;    /* Secondary text */
--text-muted: #7a8199;        /* Muted text */

/* Spacing */
--spacing-xs: 0.5rem;         /* 8px */
--spacing-sm: 1rem;           /* 16px */
--spacing-md: 1.5rem;         /* 24px */
--spacing-lg: 2rem;           /* 32px */
--spacing-xl: 3rem;           /* 48px */
--spacing-2xl: 4rem;          /* 64px */

/* Border Radius */
--radius-sm: 0.5rem;          /* 8px */
--radius-md: 1rem;            /* 16px */
--radius-lg: 1.5rem;          /* 24px */

/* Transitions */
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

---

## 🎬 Animation Classes

| Class | Effect | Duration |
|-------|--------|----------|
| `.bouncy-in` | Bounce in | 0.6s |
| `.bouncy-out` | Bounce out | 0.6s |
| `.scroll-fade-in` | Fade in on scroll | 0.8s |
| `.staggered-bounce` | Staggered bounce | 2s |
| `.hover-bounce` | Bounce on hover | 0.4s |
| `.pulse` | Pulse effect | 2s |
| `.glow` | Glow effect | 2s |
| `.rotate` | Rotate 360° | 3s |
| `.shimmer` | Shimmer effect | 2s |
| `.wave` | Wave effect | 0.6s |
| `.slide-in-left` | Slide from left | 0.6s |
| `.slide-in-right` | Slide from right | 0.6s |
| `.fade-in` | Simple fade in | 0.6s |

---

## ⏱️ Delay Classes

```html
<div class="scroll-fade-in delay-100">0.1s</div>
<div class="scroll-fade-in delay-200">0.2s</div>
<div class="scroll-fade-in delay-300">0.3s</div>
<div class="scroll-fade-in delay-400">0.4s</div>
<div class="scroll-fade-in delay-500">0.5s</div>
<div class="scroll-fade-in delay-600">0.6s</div>
<div class="scroll-fade-in delay-700">0.7s</div>
<div class="scroll-fade-in delay-800">0.8s</div>
```

---

## ⏳ Duration Classes

```html
<div class="scroll-fade-in duration-300">0.3s</div>
<div class="scroll-fade-in duration-500">0.5s</div>
<div class="scroll-fade-in duration-700">0.7s</div>
<div class="scroll-fade-in duration-1000">1s</div>
```

---

## 🔧 Common Customizations

### Change Primary Color
```css
:root {
    --primary: #YOUR_COLOR;
}
```

### Change Font
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Change Spacing
```css
:root {
    --spacing-lg: 2.5rem;  /* Increase spacing */
}
```

### Change Animation Speed
```css
@keyframes bouncyIn {
    animation: bouncyIn 0.3s ease-out;  /* Faster */
}
```

### Add New Section
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title scroll-fade-in">Title</h2>
        <!-- Content -->
    </div>
</section>
```

---

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1200px) { }

/* Tablet */
@media (max-width: 1199px) { }
@media (max-width: 768px) { }

/* Mobile */
@media (max-width: 480px) { }
```

---

## 🎯 HTML Structure

```html
<!-- Navigation -->
<nav class="navbar">
    <div class="nav-container">
        <div class="nav-logo">Logo</div>
        <ul class="nav-menu">
            <li><a href="#section">Link</a></li>
        </ul>
    </div>
</nav>

<!-- Section -->
<section id="section" class="section">
    <div class="container">
        <h2 class="section-title">Title</h2>
        <!-- Content -->
    </div>
</section>

<!-- Footer -->
<footer class="footer">
    <div class="container">
        <p>Copyright</p>
    </div>
</footer>
```

---

## 🎨 Color Combinations

### Blue & Orange
```css
--primary: #0ea5e9;
--secondary: #f97316;
--accent: #ec4899;
```

### Green & Purple
```css
--primary: #10b981;
--secondary: #8b5cf6;
--accent: #f59e0b;
```

### Red & Yellow
```css
--primary: #ef4444;
--secondary: #eab308;
--accent: #06b6d4;
```

### Teal & Pink
```css
--primary: #14b8a6;
--secondary: #ec4899;
--accent: #f59e0b;
```

---

## 🚀 Deployment Commands

### Netlify
```bash
# Push to GitHub
git push origin main

# Deploy automatically
# (Connected to Netlify)
```

### Vercel
```bash
# Push to GitHub
git push origin main

# Deploy automatically
# (Connected to Vercel)
```

### GitHub Pages
```bash
git add .
git commit -m "Deploy"
git push origin main
```

---

## 🔍 DevTools Shortcuts

| Shortcut | Action |
|----------|--------|
| F12 | Open DevTools |
| Ctrl+Shift+I | Inspect element |
| Ctrl+Shift+J | Open console |
| Ctrl+Shift+C | Element picker |
| Ctrl+Shift+M | Device mode |
| Ctrl+Shift+R | Hard refresh |
| Ctrl+Shift+Delete | Clear cache |

---

## 📊 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Score | 90+ |
| Page Load Time | < 3s |
| First Paint | < 1s |
| First Contentful Paint | < 1.8s |
| Time to Interactive | < 3.8s |
| Total Blocking Time | < 200ms |

---

## 🔐 Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers set
- [ ] Input validation works
- [ ] No sensitive data exposed
- [ ] CORS configured
- [ ] CSP configured
- [ ] Backups configured

---

## 📱 Mobile Checklist

- [ ] Viewport meta tag present
- [ ] Touch targets 44x44px+
- [ ] Responsive layout
- [ ] Mobile menu works
- [ ] Forms mobile-friendly
- [ ] Images optimized
- [ ] Performance good

---

## 🎬 Animation Timing

| Type | Duration |
|------|----------|
| Micro-interaction | 0.2-0.3s |
| Transition | 0.5-0.8s |
| Entrance | 1-1.5s |
| Exit | 0.6-1s |
| Continuous | 2-3s |

---

## 🎯 SEO Checklist

- [ ] Meta description
- [ ] Meta keywords
- [ ] Open Graph tags
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Structured data
- [ ] Mobile friendly
- [ ] Fast loading

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Main documentation |
| QUICKSTART.md | Quick start guide |
| ANIMATIONS.md | Animation guide |
| CUSTOMIZATION.md | Customization guide |
| DEPLOYMENT.md | Deployment guide |
| TESTING.md | Testing guide |
| TIPS.md | Tips & tricks |
| TROUBLESHOOTING.md | Troubleshooting |
| CHANGELOG.md | Version history |
| DOCUMENTATION.md | Doc index |
| SUMMARY.md | Summary |

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Animasi tidak jalan | Hard refresh (Ctrl+Shift+R) |
| Warna tidak berubah | Clear cache, check CSS |
| Data tidak muncul | Check data.js syntax |
| Responsive tidak bekerja | Check viewport meta tag |
| Form tidak bekerja | Check console untuk errors |
| Progress bar tidak animate | Check Intersection Observer |
| Smooth scroll tidak bekerja | Check scroll-behavior: smooth |
| Mobile menu tidak bekerja | Check JavaScript event listeners |

---

## 💡 Quick Tips

1. **Use CSS variables** untuk easy theming
2. **Use transform & opacity** untuk smooth animations
3. **Use relative paths** untuk file references
4. **Test on real devices** untuk mobile testing
5. **Use DevTools** untuk debugging
6. **Minify CSS/JS** sebelum deploy
7. **Optimize images** untuk performance
8. **Enable caching** untuk faster loading

---

## 🎓 Learning Path

1. Read QUICKSTART.md (5 min)
2. Setup locally (5 min)
3. Customize content (30 min)
4. Test responsive (15 min)
5. Deploy (10 min)
6. Read CUSTOMIZATION.md (30 min)
7. Read ANIMATIONS.md (30 min)
8. Read DEPLOYMENT.md (20 min)

---

## 📞 Quick Links

- **GitHub**: https://github.com
- **Netlify**: https://netlify.com
- **Vercel**: https://vercel.com
- **Google Fonts**: https://fonts.google.com
- **MDN Docs**: https://developer.mozilla.org
- **CSS Tricks**: https://css-tricks.com
- **Stack Overflow**: https://stackoverflow.com

---

## ✅ Launch Checklist

- [ ] Content updated
- [ ] Design customized
- [ ] Responsive tested
- [ ] Animations working
- [ ] Forms working
- [ ] Links working
- [ ] Performance optimized
- [ ] SEO configured
- [ ] Analytics setup
- [ ] Deployed

---

**Keep this file handy for quick reference! 📌**
