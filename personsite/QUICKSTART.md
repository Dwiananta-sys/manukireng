# ⚡ Quick Start Guide

Panduan cepat untuk mulai menggunakan portfolio website.

## 🎯 5 Menit Setup

### Step 1: Buka Folder di VS Code
```bash
# Buka VS Code
# File → Open Folder → Pilih folder "personsite"
```

### Step 2: Install Live Server Extension
1. Buka Extensions (Ctrl+Shift+X)
2. Search "Live Server"
3. Install extension dari Ritwick Dey
4. Reload VS Code

### Step 3: Start Live Server
1. Klik kanan pada `index.html`
2. Pilih "Open with Live Server"
3. Browser otomatis membuka di `http://localhost:5500`

### Step 4: Edit Content
1. Buka `data/data.js`
2. Update experience dan projects data
3. Buka `index.html`
4. Update nama, deskripsi, social links
5. Changes otomatis reload di browser

### Step 5: Customize Warna
1. Buka `styles/main.css`
2. Cari `:root` section
3. Ubah warna di CSS variables
4. Lihat perubahan real-time di browser

---

## 📁 File Structure

```
personsite/
├── index.html              ← Main HTML file
├── styles/
│   ├── main.css           ← Main styles
│   └── animations.css     ← All animations
├── js/
│   └── main.js            ← JavaScript logic
├── data/
│   └── data.js            ← Experience & Projects data
├── README.md              ← Full documentation
├── ANIMATIONS.md          ← Animation guide
├── CUSTOMIZATION.md       ← Customization guide
├── DEPLOYMENT.md          ← Deployment guide
└── QUICKSTART.md          ← This file
```

---

## 🎨 Customization Cepat

### Ubah Nama
**File:** `index.html`
```html
<span class="logo-text">Your Name</span>
```

### Ubah Warna Utama
**File:** `styles/main.css`
```css
:root {
    --primary: #00d4ff;      /* Ubah warna ini */
    --secondary: #7c3aed;    /* Dan ini */
}
```

### Ubah Experience
**File:** `data/data.js`
```javascript
const experienceData = [
    {
        title: "Your Job Title",
        company: "Company Name",
        period: "2022 - Present",
        progress: 85,
        description: "Your description",
        bullets: ["Achievement 1", "Achievement 2"]
    }
];
```

### Ubah Projects
**File:** `data/data.js`
```javascript
const projectsData = [
    {
        title: "Project Name",
        description: "Project description",
        tags: ["React", "Node.js"],
        emoji: "🎯",
        links: {
            demo: "https://demo-link.com",
            github: "https://github.com/link"
        }
    }
];
```

---

## 🚀 Deploy Cepat

### Netlify (Recommended)
1. Push ke GitHub
2. Buka https://netlify.com
3. Click "New site from Git"
4. Connect GitHub & select repository
5. Deploy! ✅

### Vercel
1. Push ke GitHub
2. Buka https://vercel.com
3. Click "New Project"
4. Import repository
5. Deploy! ✅

### GitHub Pages
1. Create repo: `username.github.io`
2. Push files
3. Enable GitHub Pages di settings
4. Live di `username.github.io` ✅

---

## 🎬 Animasi yang Tersedia

### Gunakan di HTML
```html
<!-- Bouncy In -->
<button class="btn bouncy-in">Click Me</button>

<!-- Scroll Fade In -->
<div class="scroll-fade-in">Content</div>

<!-- Hover Bounce -->
<div class="hover-bounce">Hover Me</div>

<!-- Pulse -->
<div class="pulse">Pulsing</div>
```

### Delay Animasi
```html
<div class="scroll-fade-in delay-100">0.1s delay</div>
<div class="scroll-fade-in delay-200">0.2s delay</div>
<div class="scroll-fade-in delay-300">0.3s delay</div>
```

---

## 🔧 Common Tasks

### Tambah Section Baru
1. Tambah HTML di `index.html`
2. Tambah CSS di `styles/main.css`
3. Tambah JavaScript di `js/main.js` jika perlu

### Ubah Font
1. Buka `styles/main.css`
2. Ubah `font-family` di `body`
3. Atau import dari Google Fonts

### Tambah Social Link
1. Buka `index.html` - Contact section
2. Tambah link baru dengan SVG icon
3. Update href ke social profile Anda

### Ubah Animasi Speed
1. Buka `styles/animations.css`
2. Ubah duration di `@keyframes`
3. Contoh: `0.6s` → `0.3s` (lebih cepat)

---

## 📱 Testing

### Test Responsive
1. Buka DevTools (F12)
2. Click device toggle (Ctrl+Shift+M)
3. Test di berbagai ukuran

### Test Performance
1. Buka https://pagespeed.web.dev
2. Masukkan URL website
3. Lihat score dan recommendations

### Test Accessibility
1. Buka DevTools
2. Tab Lighthouse
3. Run audit
4. Fix issues

---

## 🐛 Troubleshooting

### Animasi tidak jalan
- Refresh page (Ctrl+Shift+R)
- Check console (F12)
- Pastikan animations.css ter-load

### Warna tidak berubah
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check CSS syntax

### Data tidak muncul
- Check `data.js` syntax
- Pastikan `data.js` di-load sebelum `main.js`
- Check console untuk error

### Responsive tidak bekerja
- Check viewport meta tag di HTML
- Test di different devices
- Check media queries di CSS

---

## 📚 Learn More

- **Full Documentation:** Baca `README.md`
- **Animations Guide:** Baca `ANIMATIONS.md`
- **Customization:** Baca `CUSTOMIZATION.md`
- **Deployment:** Baca `DEPLOYMENT.md`

---

## 🎯 Next Steps

1. ✅ Setup & preview website
2. ✅ Update personal information
3. ✅ Customize warna & font
4. ✅ Add experience & projects
5. ✅ Test responsive design
6. ✅ Deploy ke internet
7. ✅ Share dengan dunia! 🌟

---

## 💡 Tips

- **Save often** - Ctrl+S
- **Use DevTools** - F12 untuk debug
- **Test mobile** - Ctrl+Shift+M
- **Check console** - Untuk error messages
- **Keep it simple** - Minimal design is best
- **Update regularly** - Keep portfolio fresh

---

## 🆘 Need Help?

1. Check documentation files
2. Search in browser DevTools
3. Check console for errors
4. Inspect element (F12)
5. Try different browser

---

**Happy Building! 🚀✨**

Selamat menggunakan portfolio website Anda!
