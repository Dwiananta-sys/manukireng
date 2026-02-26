# 🎨 Personal Portfolio Website - Modern & Minimal

Sebuah personal website modern dengan dark theme, animasi smooth, dan design yang elegan. Terinspirasi dari https://diegovz.com/

## ✨ Fitur Utama

### 📄 Halaman
- **Hero/Landing** - Halaman pembuka dengan animasi bouncy
- **About** - Tentang diri dengan skill tags
- **Experience** - Timeline pengalaman kerja dengan progress bar animasi
- **Projects** - Grid project showcase dengan hover effects
- **Contact** - Form kontak dan social media links

### 🎭 Animasi & Interaksi
- ✅ **Bouncy In/Out** - Animasi tombol yang bouncy saat muncul/hilang
- ✅ **Scroll Fade In** - Fade in + scale bounce saat scroll ke viewport
- ✅ **Progress Bar Animation** - Progress bar "grow" dari 0 ke nilai tertentu
- ✅ **Hover Effects** - Scale + bounce pada hover tombol
- ✅ **Staggered Animations** - Animasi bertahap untuk elemen multiple
- ✅ **Smooth Scroll** - Navigasi smooth ke setiap section

### 🎨 Design
- **Dark Theme** - Skema warna gelap dengan aksen cerah (#00d4ff, #7c3aed)
- **Responsive** - Mobile-first design, responsive di semua ukuran
- **Minimal Typography** - Font clean dan readable
- **SVG Icons** - Semua ikon embedded langsung di HTML

### 📊 Experience Section
- Timeline vertikal dengan progress bar di samping
- Box design untuk setiap pengalaman
- Bullet points untuk deskripsi
- Progress indicator dengan animasi loading

## 📁 Struktur Folder

```
personsite/
├── index.html              # File HTML utama
├── styles/
│   ├── main.css           # Styling utama & layout
│   └── animations.css     # Semua keyframes animasi
├── js/
│   └── main.js            # JavaScript interaktivity
├── data/
│   └── data.js            # Data experience & projects
└── README.md              # Dokumentasi ini
```

## 🚀 Cara Membuka & Preview

### Opsi 1: VS Code Live Server (Recommended)
1. Buka folder `personsite` di VS Code
2. Install extension "Live Server" (oleh Ritwick Dey)
3. Klik kanan pada `index.html` → "Open with Live Server"
4. Browser akan otomatis membuka di `http://localhost:5500`

### Opsi 2: Buka Langsung di Browser
1. Buka folder `personsite`
2. Double-click `index.html`
3. Website akan terbuka di browser default

### Opsi 3: Python Simple Server
```bash
cd personsite
python -m http.server 8000
# Buka http://localhost:8000 di browser
```

## 🎯 Cara Edit & Customize

### Edit Data Experience & Projects
File: `data/data.js`

```javascript
const experienceData = [
    {
        id: 1,
        title: "Your Job Title",
        company: "Company Name",
        period: "2022 - Present",
        progress: 85,  // Progress bar percentage
        description: "Job description",
        bullets: [
            "Achievement 1",
            "Achievement 2"
        ]
    }
];
```

### Edit Warna & Tema
File: `styles/main.css` - Ubah CSS variables di `:root`

```css
:root {
    --primary: #00d4ff;      /* Warna utama */
    --secondary: #7c3aed;    /* Warna sekunder */
    --accent: #ff006e;       /* Warna accent */
    --dark-bg: #0a0e27;      /* Background */
    /* ... */
}
```

### Edit Konten HTML
File: `index.html`
- Ubah nama, deskripsi, dan social links
- Tambah/hapus section sesuai kebutuhan

### Tambah Animasi Baru
File: `styles/animations.css`
- Tambahkan keyframes baru
- Gunakan class di HTML atau JavaScript

## 🎬 Animasi yang Tersedia

### CSS Classes
- `.bouncy-in` - Animasi masuk bouncy
- `.scroll-fade-in` - Fade in saat scroll
- `.staggered-bounce` - Bounce bertahap
- `.hover-bounce` - Bounce saat hover
- `.pulse` - Pulse effect
- `.glow` - Glow effect
- `.rotate` - Rotasi 360°
- `.shimmer` - Shimmer effect

### Delay Classes
- `.delay-100` hingga `.delay-800` - Delay animasi

### Duration Classes
- `.duration-300`, `.duration-500`, `.duration-700`, `.duration-1000`

## 📱 Responsive Breakpoints

- **Desktop** - 1200px+
- **Tablet** - 768px - 1199px
- **Mobile** - < 768px
- **Small Mobile** - < 480px

## 🔧 Customization Tips

### Ubah Kecepatan Animasi
Di `styles/animations.css`, ubah duration di keyframes:
```css
@keyframes bouncyIn {
    /* Ubah 0.6s menjadi durasi yang diinginkan */
    animation: bouncyIn 0.6s cubic-bezier(...) forwards;
}
```

### Ubah Warna Gradient
Di `styles/main.css`:
```css
background: linear-gradient(135deg, #00d4ff, #7c3aed);
```

### Tambah Section Baru
1. Tambahkan HTML di `index.html`
2. Tambahkan CSS di `styles/main.css`
3. Tambahkan JavaScript di `js/main.js` jika perlu interaksi

## 🌐 Deploy

### Netlify (Recommended)
1. Push folder ke GitHub
2. Connect GitHub ke Netlify
3. Deploy otomatis

### Vercel
1. Push ke GitHub
2. Import project di Vercel
3. Deploy

### GitHub Pages
1. Push ke GitHub
2. Enable GitHub Pages di settings
3. Website live di `username.github.io/personsite`

## 📝 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Teknologi yang Digunakan

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS dengan custom properties
- **Vanilla JavaScript** - No frameworks, pure JS
- **SVG** - Vector graphics untuk icons

## 💡 Tips & Tricks

### Menambah Social Links
Edit di `index.html` section Contact:
```html
<a href="https://your-link.com" class="social-link" title="Platform Name">
    <!-- SVG Icon -->
</a>
```

### Mengubah Font
Di `styles/main.css`, ubah font-family:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Menambah Dark Mode Toggle
Tambahkan button di navbar dan toggle class di body dengan JavaScript

## 🐛 Troubleshooting

### Animasi tidak jalan
- Pastikan `animations.css` ter-load dengan benar
- Check browser console untuk error
- Refresh page (Ctrl+Shift+R)

### Progress bar tidak bergerak
- Pastikan `data.js` ter-load sebelum `main.js`
- Check console untuk error di JavaScript

### Responsive tidak bekerja
- Pastikan viewport meta tag ada di HTML
- Clear browser cache
- Test di different devices

## 📞 Support

Untuk pertanyaan atau issue, silakan:
1. Check dokumentasi di atas
2. Inspect element di browser (F12)
3. Check console untuk error messages

## 📄 License

Free to use dan modify untuk personal projects.

---

**Made with ❤️ using HTML, CSS & Vanilla JavaScript**

Selamat menggunakan! 🚀
