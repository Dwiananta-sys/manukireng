# 🎬 CARA MEMBUKA & PREVIEW WEBSITE

Panduan lengkap untuk membuka dan preview website di VS Code.

---

## 📋 Persyaratan

Pastikan Anda sudah memiliki:
- ✅ VS Code (https://code.visualstudio.com)
- ✅ Browser (Chrome, Firefox, Safari, Edge)
- ✅ Folder `personsite` sudah dibuat

---

## 🚀 Cara Membuka di VS Code

### Method 1: Drag & Drop (Paling Mudah)

1. **Buka VS Code**
2. **Buka File Explorer** (Windows: tekan `Win+E`)
3. **Cari folder `personsite`** di `Documents/personal site/`
4. **Drag folder ke VS Code window**
5. **Folder akan terbuka di VS Code**

### Method 2: File Menu

1. **Buka VS Code**
2. **Klik `File` di menu bar**
3. **Pilih `Open Folder`**
4. **Navigate ke `Documents/personal site/personsite`**
5. **Klik `Select Folder`**

### Method 3: Command Line

```bash
# Buka terminal/command prompt
# Navigate ke folder
cd "Documents/personal site/personsite"

# Buka di VS Code
code .
```

---

## 🔌 Install Live Server Extension

### Step 1: Buka Extensions
- Tekan `Ctrl+Shift+X` (Windows/Linux)
- Atau tekan `Cmd+Shift+X` (Mac)
- Atau klik icon Extensions di sidebar kiri

### Step 2: Search Live Server
- Di search box, ketik "Live Server"
- Cari extension dari **Ritwick Dey**
- Pastikan itu yang official (punya banyak downloads)

### Step 3: Install
- Klik tombol "Install"
- Tunggu instalasi selesai
- Klik "Reload" jika diminta

### Step 4: Verify Installation
- Klik icon Live Server di sidebar (icon dengan "Go Live")
- Atau klik kanan file HTML → "Open with Live Server"

---

## 🌐 Preview Website

### Method 1: Right-Click (Paling Mudah)

1. **Di VS Code, buka file `index.html`**
2. **Klik kanan pada `index.html`**
3. **Pilih "Open with Live Server"**
4. **Browser akan otomatis membuka**
5. **Website preview di `http://localhost:5500`**

### Method 2: Go Live Button

1. **Di VS Code, buka file `index.html`**
2. **Lihat di bottom-right corner**
3. **Klik tombol "Go Live"**
4. **Browser akan otomatis membuka**

### Method 3: Command Palette

1. **Tekan `Ctrl+Shift+P`**
2. **Ketik "Live Server: Open with Live Server"**
3. **Tekan Enter**
4. **Browser akan otomatis membuka**

---

## ✏️ Edit & Auto-Reload

### Cara Edit File

1. **Di VS Code, buka file yang ingin diedit**
   - `index.html` - untuk content
   - `styles/main.css` - untuk styling
   - `js/main.js` - untuk JavaScript
   - `data/data.js` - untuk data

2. **Edit file sesuai kebutuhan**

3. **Tekan `Ctrl+S` untuk save**

4. **Browser akan otomatis reload** (jika Live Server aktif)

### Tips Editing

- **Ctrl+S** - Save file
- **Ctrl+Z** - Undo
- **Ctrl+Y** - Redo
- **Ctrl+F** - Find
- **Ctrl+H** - Find & Replace
- **Ctrl+/** - Comment/Uncomment

---

## 🔍 Debug dengan DevTools

### Buka DevTools

- **Tekan `F12`** (Windows/Linux)
- **Atau tekan `Cmd+Option+I`** (Mac)
- **Atau klik kanan → "Inspect"**

### DevTools Tabs

| Tab | Gunakan Untuk |
|-----|---------------|
| Elements | Inspect HTML & CSS |
| Console | Check JavaScript errors |
| Network | Check file loading |
| Performance | Check performance |
| Application | Check storage & cache |

### Console Commands

```javascript
// Check if data loaded
console.log(experienceData);

// Check if element exists
console.log(document.querySelector('.element'));

// Check computed styles
console.log(window.getComputedStyle(element));
```

---

## 📱 Test Responsive Design

### Buka Device Mode

1. **Tekan `Ctrl+Shift+M`** (Windows/Linux)
2. **Atau tekan `Cmd+Shift+M`** (Mac)
3. **Atau klik icon device di DevTools**

### Test Berbagai Ukuran

- **Desktop** - 1920x1080
- **Laptop** - 1366x768
- **Tablet** - 768x1024
- **Mobile** - 375x667
- **Small Mobile** - 320x568

### Test Orientasi

- **Portrait** - Vertikal
- **Landscape** - Horizontal

---

## 🔄 Reload & Clear Cache

### Reload Page

- **Tekan `F5`** - Normal reload
- **Tekan `Ctrl+R`** - Normal reload
- **Tekan `Ctrl+Shift+R`** - Hard refresh (clear cache)

### Clear Cache

1. **Tekan `Ctrl+Shift+Delete`**
2. **Pilih time range: "All time"**
3. **Check "Cookies and other site data"**
4. **Click "Clear data"**

---

## 🆘 Troubleshooting

### Live Server tidak buka

**Problem:** Klik "Open with Live Server" tapi tidak ada yang terjadi

**Solution:**
1. Pastikan Live Server extension installed
2. Reload VS Code (Ctrl+Shift+P → reload)
3. Coba klik "Go Live" button di bottom-right
4. Coba buka browser manual di `http://localhost:5500`

### Website tidak ter-update

**Problem:** Edit file tapi website tidak berubah

**Solution:**
1. Pastikan file sudah di-save (Ctrl+S)
2. Hard refresh browser (Ctrl+Shift+R)
3. Clear cache (Ctrl+Shift+Delete)
4. Reload Live Server

### Port sudah digunakan

**Problem:** Error "Port 5500 already in use"

**Solution:**
1. Close semua browser windows
2. Restart VS Code
3. Atau gunakan port berbeda di Live Server settings

### File tidak ditemukan

**Problem:** Error "404 Not Found"

**Solution:**
1. Check file path di HTML
2. Pastikan file ada di folder
3. Check untuk typos di filename
4. Gunakan relative paths

---

## ⚙️ Live Server Settings

### Buka Settings

1. **Tekan `Ctrl+,`** (Windows/Linux)
2. **Atau tekan `Cmd+,`** (Mac)
3. **Search "Live Server"**

### Useful Settings

```json
{
    "liveServer.settings.port": 5500,
    "liveServer.settings.root": "/",
    "liveServer.settings.CustomBrowser": "chrome",
    "liveServer.settings.AdvanceCustomBrowserCmdLine": "",
    "liveServer.settings.MultiRootWorkspacePath": "",
    "liveServer.settings.https": false,
    "liveServer.settings.ignoreFiles": [
        ".vscode/**",
        "**/*.scss",
        "**/*.sass",
        "**/*.ts"
    ]
}
```

---

## 🎯 Workflow Optimal

### Setup Awal

1. Buka VS Code
2. Open folder `personsite`
3. Install Live Server extension
4. Right-click `index.html` → "Open with Live Server"

### Editing

1. Edit file di VS Code
2. Save (Ctrl+S)
3. Browser auto-reload
4. Check hasil di browser

### Debugging

1. Tekan F12 untuk DevTools
2. Check Console untuk errors
3. Inspect elements untuk CSS
4. Check Network untuk file loading

### Testing

1. Tekan Ctrl+Shift+M untuk device mode
2. Test di berbagai ukuran
3. Test semua interactions
4. Check console untuk errors

---

## 📝 Keyboard Shortcuts

### VS Code

| Shortcut | Action |
|----------|--------|
| Ctrl+S | Save file |
| Ctrl+Z | Undo |
| Ctrl+Y | Redo |
| Ctrl+F | Find |
| Ctrl+H | Find & Replace |
| Ctrl+/ | Comment/Uncomment |
| Ctrl+Shift+X | Open Extensions |
| Ctrl+, | Open Settings |
| Ctrl+` | Open Terminal |

### Browser DevTools

| Shortcut | Action |
|----------|--------|
| F12 | Open DevTools |
| Ctrl+Shift+I | Inspect element |
| Ctrl+Shift+J | Open Console |
| Ctrl+Shift+C | Element picker |
| Ctrl+Shift+M | Device mode |
| F5 | Reload |
| Ctrl+R | Reload |
| Ctrl+Shift+R | Hard refresh |

---

## 🎬 Video Tutorial (Text Version)

### Step 1: Setup (2 min)
1. Open VS Code
2. Open folder personsite
3. Install Live Server
4. Reload VS Code

### Step 2: Preview (1 min)
1. Right-click index.html
2. Select "Open with Live Server"
3. Browser opens automatically

### Step 3: Edit (5 min)
1. Edit data/data.js
2. Update experience & projects
3. Save file (Ctrl+S)
4. Browser auto-reloads

### Step 4: Customize (10 min)
1. Edit index.html
2. Update nama & deskripsi
3. Edit styles/main.css
4. Change colors
5. Save & preview

### Step 5: Test (5 min)
1. Open DevTools (F12)
2. Test responsive (Ctrl+Shift+M)
3. Check console untuk errors
4. Test semua interactions

---

## ✅ Verification Checklist

- [ ] VS Code installed
- [ ] Folder opened di VS Code
- [ ] Live Server extension installed
- [ ] Website preview di browser
- [ ] Auto-reload working
- [ ] DevTools accessible
- [ ] Responsive mode working
- [ ] Console accessible

---

## 🎉 Ready to Go!

Sekarang Anda siap untuk:
- ✅ Edit website
- ✅ Preview changes
- ✅ Debug issues
- ✅ Test responsive
- ✅ Deploy website

---

## 📞 Quick Help

### Website tidak muncul?
- Check browser di `http://localhost:5500`
- Check console (F12) untuk errors
- Restart Live Server

### Changes tidak ter-update?
- Save file (Ctrl+S)
- Hard refresh (Ctrl+Shift+R)
- Clear cache (Ctrl+Shift+Delete)

### Port error?
- Close semua browser windows
- Restart VS Code
- Atau gunakan port berbeda

### File not found?
- Check file path
- Check untuk typos
- Use relative paths

---

**Happy Editing! 🚀✨**

Sekarang Anda siap untuk membuat portfolio website yang awesome!
