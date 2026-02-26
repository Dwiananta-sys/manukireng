# 🎬 START HERE - Panduan Memulai

Selamat datang! Ikuti panduan ini untuk memulai dengan portfolio website Anda.

## ⏱️ Waktu yang Dibutuhkan

- Setup: 5 menit
- Customization: 30 menit
- Testing: 15 menit
- Deploy: 10 menit
- **Total: ~1 jam**

---

## 📋 Step-by-Step Guide

### Step 1: Buka Folder di VS Code (2 menit)

1. Buka VS Code
2. Klik `File` → `Open Folder`
3. Pilih folder `personsite`
4. Folder akan terbuka di VS Code

**Hasil:** Folder terbuka di VS Code ✅

---

### Step 2: Install Live Server (2 menit)

1. Buka Extensions (tekan `Ctrl+Shift+X`)
2. Search "Live Server"
3. Klik install pada extension dari **Ritwick Dey**
4. Tunggu instalasi selesai
5. Reload VS Code (tekan `Ctrl+Shift+P` → type "reload" → Enter)

**Hasil:** Live Server extension installed ✅

---

### Step 3: Preview Website (1 menit)

1. Klik kanan pada file `index.html`
2. Pilih "Open with Live Server"
3. Browser akan otomatis membuka di `http://localhost:5500`

**Hasil:** Website preview di browser ✅

---

### Step 4: Customize Content (30 menit)

#### 4.1 Update Nama & Informasi

**File:** `index.html`

Cari dan ubah:
```html
<!-- Ubah logo -->
<span class="logo-text">Your Name</span>

<!-- Ubah hero title -->
<h1 class="hero-title">
    <span class="text-gradient">Your Title</span>
    <br>
    <span class="text-light">Your Subtitle</span>
</h1>

<!-- Ubah hero subtitle -->
<p class="hero-subtitle">Your professional tagline</p>
```

#### 4.2 Update Experience Data

**File:** `data/data.js`

Ubah array `experienceData`:
```javascript
const experienceData = [
    {
        id: 1,
        title: "Your Job Title",
        company: "Company Name",
        period: "2022 - Present",
        progress: 85,
        description: "Your job description",
        bullets: [
            "Achievement 1",
            "Achievement 2",
            "Achievement 3"
        ]
    },
    // Tambah lebih banyak experience...
];
```

#### 4.3 Update Projects Data

**File:** `data/data.js`

Ubah array `projectsData`:
```javascript
const projectsData = [
    {
        id: 1,
        title: "Project Name",
        description: "Project description",
        tags: ["React", "Node.js", "MongoDB"],
        emoji: "🎯",
        links: {
            demo: "https://demo-link.com",
            github: "https://github.com/username/project"
        }
    },
    // Tambah lebih banyak projects...
];
```

#### 4.4 Update Social Links

**File:** `index.html` - Cari section Contact

```html
<div class="social-links">
    <a href="https://github.com/your-username" class="social-link" title="GitHub">
        <!-- SVG Icon -->
    </a>
    <a href="https://linkedin.com/in/your-username" class="social-link" title="LinkedIn">
        <!-- SVG Icon -->
    </a>
    <a href="https://twitter.com/your-username" class="social-link" title="Twitter">
        <!-- SVG Icon -->
    </a>
</div>
```

#### 4.5 Ubah Warna Tema (Optional)

**File:** `styles/main.css`

Cari `:root` dan ubah:
```css
:root {
    --primary: #00d4ff;      /* Ubah warna utama */
    --secondary: #7c3aed;    /* Ubah warna sekunder */
    --accent: #ff006e;       /* Ubah warna accent */
}
```

**Hasil:** Website sudah ter-customize ✅

---

### Step 5: Test Website (15 menit)

#### 5.1 Test Navigation
```
1. Klik setiap link di navbar
2. Verifikasi smooth scroll ke section
3. Test hamburger menu di mobile (Ctrl+Shift+M)
```

#### 5.2 Test Responsive
```
1. Tekan Ctrl+Shift+M untuk device mode
2. Test di berbagai ukuran:
   - Desktop (1920x1080)
   - Tablet (768x1024)
   - Mobile (375x667)
```

#### 5.3 Test Animations
```
1. Scroll halaman - check fade in animations
2. Hover buttons - check bounce effect
3. Lihat progress bars - check animation
```

#### 5.4 Test Form
```
1. Scroll ke Contact section
2. Coba submit form kosong - should show error
3. Isi form dengan data valid
4. Submit - should show success
```

**Hasil:** Website berfungsi dengan baik ✅

---

### Step 6: Deploy Website (10 menit)

#### Option A: Netlify (Recommended)

1. **Push ke GitHub**
```bash
# Di terminal, masuk ke folder personsite
cd personsite

# Initialize git
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/personsite.git
git push -u origin main
```

2. **Deploy ke Netlify**
   - Buka https://netlify.com
   - Click "New site from Git"
   - Connect GitHub
   - Select repository `personsite`
   - Click Deploy
   - Website live! 🎉

#### Option B: Vercel

1. **Push ke GitHub** (sama seperti di atas)

2. **Deploy ke Vercel**
   - Buka https://vercel.com
   - Click "New Project"
   - Import GitHub repository
   - Click Deploy
   - Website live! 🎉

#### Option C: GitHub Pages

1. **Create repository**
   - Buat repo baru: `username.github.io`

2. **Push files**
```bash
git clone https://github.com/username/username.github.io.git
cd username.github.io
# Copy semua files dari personsite ke sini
git add .
git commit -m "Initial commit"
git push
```

3. **Website live di** `username.github.io` 🎉

**Hasil:** Website live di internet ✅

---

## 🎯 Verification Checklist

Sebelum melanjutkan, pastikan:

- [ ] Folder terbuka di VS Code
- [ ] Live Server extension installed
- [ ] Website preview di browser
- [ ] Nama & informasi sudah diupdate
- [ ] Experience data sudah diupdate
- [ ] Projects data sudah diupdate
- [ ] Social links sudah diupdate
- [ ] Navigation links bekerja
- [ ] Responsive design bekerja
- [ ] Animations smooth
- [ ] Form validation bekerja

---

## 📚 Next Steps

Setelah selesai dengan panduan ini:

1. **Baca QUICKSTART.md** - Panduan lebih detail
2. **Baca CUSTOMIZATION.md** - Customize lebih lanjut
3. **Baca ANIMATIONS.md** - Pelajari animasi
4. **Baca DEPLOYMENT.md** - Deploy ke production
5. **Baca TIPS.md** - Tips & tricks

---

## 🆘 Troubleshooting

### Live Server tidak buka
```
1. Pastikan Live Server extension installed
2. Reload VS Code (Ctrl+Shift+P → reload)
3. Coba klik kanan index.html lagi
```

### Website tidak ter-update
```
1. Hard refresh browser (Ctrl+Shift+R)
2. Clear cache (Ctrl+Shift+Delete)
3. Reload Live Server
```

### Data tidak muncul
```
1. Check console (F12)
2. Verify data.js syntax
3. Pastikan data.js di-load sebelum main.js
```

### Responsive tidak bekerja
```
1. Tekan Ctrl+Shift+M untuk device mode
2. Check viewport meta tag di HTML
3. Reload page
```

---

## 💡 Tips

1. **Save often** - Ctrl+S
2. **Use DevTools** - F12 untuk debug
3. **Test mobile** - Ctrl+Shift+M
4. **Check console** - Untuk error messages
5. **Keep it simple** - Minimal design is best

---

## 🎉 Congratulations!

Anda sudah berhasil:
- ✅ Setup website locally
- ✅ Customize content
- ✅ Test functionality
- ✅ Deploy ke internet

Sekarang website Anda siap untuk dibagikan ke dunia! 🚀

---

## 📞 Need Help?

1. **Check documentation** - Semua jawaban ada di sini
2. **Check console** - F12 untuk error messages
3. **Google it** - Search untuk solusi
4. **Ask community** - Stack Overflow, Reddit, etc.

---

## 🚀 Ready to Share?

Sekarang Anda bisa:
- ✅ Share link website dengan teman & keluarga
- ✅ Add ke resume/CV
- ✅ Share di social media
- ✅ Use untuk job applications
- ✅ Showcase your work!

---

**Selamat! Anda sudah membuat portfolio website yang awesome! 🎉✨**

Mulai dari sini dan ikuti langkah-langkahnya. Jika ada pertanyaan, check dokumentasi atau console untuk error messages.

**Happy Building! 🚀**
