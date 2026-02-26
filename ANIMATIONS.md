# 🎬 Animation Guide - Personal Portfolio

Dokumentasi lengkap semua animasi yang tersedia di portfolio website.

## 📚 Daftar Animasi

### 1. Bouncy In Animation
**File:** `styles/animations.css`

Animasi masuk dengan efek bouncy yang playful.

```css
@keyframes bouncyIn {
    0% {
        opacity: 0;
        transform: scale(0.3);
    }
    50% {
        opacity: 1;
        transform: scale(1.05);
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

**Penggunaan:**
```html
<button class="btn btn-primary bouncy-in" data-delay="0.2s">Click Me</button>
```

**Durasi:** 0.6s
**Easing:** cubic-bezier(0.68, -0.55, 0.265, 1.55)

---

### 2. Bouncy Out Animation
**File:** `styles/animations.css`

Animasi keluar dengan efek bouncy yang smooth.

```css
@keyframes bouncyOut {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    30% {
        transform: scale(1.05);
    }
    50% {
        opacity: 0;
        transform: scale(0.3);
    }
    100% {
        opacity: 0;
        transform: scale(0);
    }
}
```

**Penggunaan:**
```html
<div class="bouncy-out">Content yang akan hilang</div>
```

---

### 3. Scroll Fade In Animation
**File:** `styles/animations.css`

Fade in dengan scale bounce saat elemen masuk viewport.

```css
@keyframes scrollFadeIn {
    0% {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
    }
    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
```

**Penggunaan:**
```html
<div class="scroll-fade-in">Content yang akan fade in saat scroll</div>
```

**Durasi:** 0.8s
**Trigger:** Intersection Observer (otomatis saat scroll)

---

### 4. Staggered Bounce Animation
**File:** `styles/animations.css`

Bounce animation dengan delay bertahap untuk multiple elements.

```css
@keyframes staggeredBounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}
```

**Penggunaan:**
```html
<div class="staggered-bounce">Item 1</div>
<div class="staggered-bounce">Item 2</div>
<div class="staggered-bounce">Item 3</div>
```

**Durasi:** 2s
**Delay:** Otomatis 0.1s per item

---

### 5. Hover Bounce Animation
**File:** `styles/animations.css`

Scale bounce saat hover pada elemen.

```css
@keyframes hoverBounce {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}
```

**Penggunaan:**
```html
<button class="hover-bounce">Hover Me</button>
```

**Durasi:** 0.4s
**Trigger:** Hover event

---

### 6. Pulse Animation
**File:** `styles/animations.css`

Efek pulse/breathing untuk menarik perhatian.

```css
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
```

**Penggunaan:**
```html
<div class="pulse">Pulsing Element</div>
```

---

### 7. Slide In From Left
**File:** `styles/animations.css`

Slide masuk dari kiri dengan fade in.

```css
@keyframes slideInLeft {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
```

**Penggunaan:**
```html
<div class="slide-in-left">Slide from left</div>
```

---

### 8. Slide In From Right
**File:** `styles/animations.css`

Slide masuk dari kanan dengan fade in.

```css
@keyframes slideInRight {
    0% {
        opacity: 0;
        transform: translateX(50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
```

---

### 9. Glow Animation
**File:** `styles/animations.css`

Efek glow yang berkilau.

```css
@keyframes glow {
    0%, 100% {
        box-shadow: 0 0 5px rgba(0, 212, 255, 0.5);
    }
    50% {
        box-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
    }
}
```

**Penggunaan:**
```html
<div class="glow">Glowing Element</div>
```

---

### 10. Rotate Animation
**File:** `styles/animations.css`

Rotasi 360 derajat terus menerus.

```css
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
```

**Penggunaan:**
```html
<svg class="rotate"><!-- Icon --></svg>
```

---

### 11. Shimmer Animation
**File:** `styles/animations.css`

Efek shimmer/kilau yang bergerak.

```css
@keyframes shimmer {
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
}
```

---

### 12. Fade In Animation
**File:** `styles/animations.css`

Simple fade in effect.

```css
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
```

---

### 13. Wave Animation
**File:** `styles/animations.css`

Efek wave untuk multiple elements.

```css
@keyframes wave {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}
```

---

## ⏱️ Delay Utilities

Gunakan class delay untuk mengatur delay animasi:

```html
<div class="scroll-fade-in delay-100">Delay 0.1s</div>
<div class="scroll-fade-in delay-200">Delay 0.2s</div>
<div class="scroll-fade-in delay-300">Delay 0.3s</div>
<!-- ... hingga delay-800 -->
```

---

## ⏳ Duration Utilities

Ubah durasi animasi dengan class:

```html
<div class="scroll-fade-in duration-300">0.3s</div>
<div class="scroll-fade-in duration-500">0.5s</div>
<div class="scroll-fade-in duration-700">0.7s</div>
<div class="scroll-fade-in duration-1000">1s</div>
```

---

## 🎯 Progress Bar Animation

Animasi khusus untuk progress bar di Experience section.

```css
@keyframes progressGrow {
    from {
        width: 0%;
    }
    to {
        width: var(--progress-value, 100%);
    }
}
```

**Penggunaan di JavaScript:**
```javascript
const progressFill = document.querySelector('.progress-fill');
progressFill.style.setProperty('--progress-value', '85%');
```

---

## 🔄 Transition Utilities

Smooth transitions untuk hover effects:

```html
<div class="transition-all">Smooth transition</div>
<div class="transition-fast">Fast transition (0.15s)</div>
<div class="transition-slow">Slow transition (0.5s)</div>
```

---

## 🎨 Transform Utilities

Quick transform effects:

```html
<div class="scale-hover">Scale on hover</div>
<div class="translate-y-hover">Move up on hover</div>
<div class="rotate-hover">Rotate on hover</div>
```

---

## 📱 Mobile Animations

Semua animasi responsive dan bekerja di mobile. Beberapa tips:

1. **Reduce Motion** - Respect user preference:
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

2. **Performance** - Gunakan `transform` dan `opacity` untuk animasi smooth
3. **Touch** - Hindari hover-only interactions di mobile

---

## 🚀 Performance Tips

1. **Gunakan GPU Acceleration:**
```css
.animated-element {
    transform: translateZ(0);
    will-change: transform;
}
```

2. **Limit Animations:**
- Jangan animate terlalu banyak elemen sekaligus
- Gunakan delay untuk stagger animations

3. **Optimize SVG:**
- Gunakan simple paths
- Minimize stroke complexity

---

## 🔧 Custom Animation Template

Buat animasi custom dengan template ini:

```css
@keyframes customAnimation {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.custom-animation {
    animation: customAnimation 0.6s ease-out forwards;
}
```

---

## 📊 Animation Timing Functions

Easing functions yang digunakan:

- `ease` - Default, smooth
- `ease-in` - Slow start
- `ease-out` - Slow end
- `ease-in-out` - Slow start & end
- `linear` - Constant speed
- `cubic-bezier()` - Custom timing

---

## 🎬 Combining Animations

Kombinasikan multiple animations:

```css
.combined {
    animation: 
        bouncyIn 0.6s ease-out,
        glow 2s ease-in-out infinite;
}
```

---

## 📝 Best Practices

1. ✅ Gunakan `transform` dan `opacity` untuk performance
2. ✅ Limit animation duration (0.3s - 1s ideal)
3. ✅ Gunakan easing functions yang natural
4. ✅ Test di berbagai devices
5. ✅ Respect user motion preferences
6. ✅ Dokumentasikan custom animations
7. ✅ Gunakan meaningful delays untuk stagger

---

**Happy Animating! 🎨✨**
