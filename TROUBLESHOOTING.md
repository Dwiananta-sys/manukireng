# 🆘 TROUBLESHOOTING GUIDE

Panduan lengkap untuk mengatasi masalah yang mungkin terjadi.

## 🔧 Common Issues & Solutions

### 1. Animasi Tidak Jalan

**Problem:** Animasi tidak muncul atau tidak smooth

**Solutions:**
```
1. Hard refresh browser (Ctrl+Shift+R)
2. Clear browser cache
3. Check console (F12) untuk errors
4. Pastikan animations.css ter-load
5. Check animation syntax di CSS
6. Verify animation class di HTML
```

**Debug:**
```javascript
// Check if animation is applied
const element = document.querySelector('.bouncy-in');
console.log(window.getComputedStyle(element).animation);
```

---

### 2. Warna Tidak Berubah

**Problem:** CSS variables tidak ter-update

**Solutions:**
```
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R)
3. Check CSS syntax
4. Verify :root selector
5. Check for CSS conflicts
6. Inspect element (F12) untuk lihat applied styles
```

**Debug:**
```css
/* Check if variable is defined */
:root {
    --primary: #00d4ff;
}

/* Check if variable is used */
.element {
    color: var(--primary);
}
```

---

### 3. Data Tidak Muncul

**Problem:** Experience atau Projects tidak ter-render

**Solutions:**
```
1. Check data.js syntax (F12 Console)
2. Verify data.js di-load sebelum main.js
3. Check HTML element IDs match JavaScript
4. Verify data structure di data.js
5. Check console untuk JavaScript errors
6. Verify renderExperience() dipanggil
```

**Debug:**
```javascript
// Check if data loaded
console.log(experienceData);
console.log(projectsData);

// Check if functions exist
console.log(typeof renderExperience);
console.log(typeof renderProjects);
```

---

### 4. Responsive Tidak Bekerja

**Problem:** Layout tidak responsive di mobile

**Solutions:**
```
1. Check viewport meta tag di HTML
2. Verify media queries di CSS
3. Test di different devices
4. Check DevTools device mode (Ctrl+Shift+M)
5. Clear cache dan reload
6. Check CSS breakpoints
```

**Debug:**
```html
<!-- Verify viewport meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

```css
/* Check media queries */
@media (max-width: 768px) {
    /* Mobile styles */
}
```

---

### 5. Form Tidak Bekerja

**Problem:** Form submission tidak berfungsi

**Solutions:**
```
1. Check form ID di HTML
2. Verify form inputs have correct attributes
3. Check JavaScript event listeners
4. Verify form validation logic
5. Check console untuk errors
6. Test form submission manually
```

**Debug:**
```javascript
// Check if form exists
const form = document.getElementById('contactForm');
console.log(form);

// Check if event listener attached
console.log(form.onsubmit);
```

---

### 6. Progress Bar Tidak Animate

**Problem:** Progress bar tidak bergerak

**Solutions:**
```
1. Check progress value di data.js
2. Verify progress-fill element exists
3. Check CSS animation syntax
4. Verify Intersection Observer works
5. Check console untuk errors
6. Verify animateProgressBars() dipanggil
```

**Debug:**
```javascript
// Check progress values
console.log(experienceData.map(e => e.progress));

// Check if animation triggered
const progressFill = document.querySelector('.progress-fill');
console.log(progressFill.style.animation);
```

---

### 7. Smooth Scroll Tidak Bekerja

**Problem:** Scroll tidak smooth ke section

**Solutions:**
```
1. Check HTML scroll-behavior: smooth
2. Verify anchor links (#id)
3. Check JavaScript scroll event
4. Verify section IDs match links
5. Test di different browsers
6. Check for JavaScript conflicts
```

**Debug:**
```css
/* Check if smooth scroll enabled */
html {
    scroll-behavior: smooth;
}
```

---

### 8. Mobile Menu Tidak Bekerja

**Problem:** Hamburger menu tidak toggle

**Solutions:**
```
1. Check hamburger element exists
2. Verify nav-menu element exists
3. Check JavaScript event listeners
4. Verify CSS classes untuk active state
5. Check console untuk errors
6. Test touch events
```

**Debug:**
```javascript
// Check if hamburger exists
const hamburger = document.querySelector('.hamburger');
console.log(hamburger);

// Check if menu exists
const menu = document.querySelector('.nav-menu');
console.log(menu);
```

---

### 9. Social Links Tidak Bekerja

**Problem:** Social media links tidak buka

**Solutions:**
```
1. Check href attribute di HTML
2. Verify URL format
3. Check for typos di URL
4. Test links di browser
5. Check if links open in new tab
6. Verify social media profiles exist
```

**Debug:**
```html
<!-- Check href format -->
<a href="https://github.com/username">GitHub</a>
```

---

### 10. Console Errors

**Problem:** JavaScript errors di console

**Solutions:**
```
1. Read error message carefully
2. Check line number di error
3. Verify syntax di file
4. Check for missing elements
5. Verify data structure
6. Check for typos
```

**Common Errors:**
```
- "Cannot read property of undefined"
  → Check if element/variable exists

- "Unexpected token"
  → Check for syntax errors

- "ReferenceError: X is not defined"
  → Check if variable is declared

- "TypeError: X is not a function"
  → Check if function exists
```

---

## 🌐 Browser-Specific Issues

### Chrome/Edge
```
Issue: Animations stuttering
Solution: 
- Disable extensions
- Clear cache
- Update browser
- Check GPU acceleration
```

### Firefox
```
Issue: CSS variables not working
Solution:
- Update Firefox
- Check CSS syntax
- Verify :root selector
- Clear cache
```

### Safari
```
Issue: Animations not smooth
Solution:
- Update Safari
- Check webkit prefixes
- Verify CSS syntax
- Test on different device
```

### Mobile Browsers
```
Issue: Touch events not working
Solution:
- Check touch event listeners
- Verify touch targets are 44x44px
- Test on real device
- Check for event conflicts
```

---

## 📱 Mobile-Specific Issues

### Issue: Layout broken on mobile
```
Solutions:
1. Check viewport meta tag
2. Verify media queries
3. Test on real device
4. Check font sizes
5. Check touch targets
```

### Issue: Animations laggy on mobile
```
Solutions:
1. Reduce animation complexity
2. Use transform & opacity only
3. Reduce number of animations
4. Check device performance
5. Profile with DevTools
```

### Issue: Form hard to use on mobile
```
Solutions:
1. Increase input size
2. Increase button size
3. Improve spacing
4. Use mobile-friendly inputs
5. Test on real device
```

---

## 🔍 Debugging Tools

### Browser DevTools
```
F12 - Open DevTools
Ctrl+Shift+I - Inspect element
Ctrl+Shift+J - Open console
Ctrl+Shift+C - Element picker
Ctrl+Shift+M - Device mode
```

### Console Commands
```javascript
// Check element
document.querySelector('.element')

// Check computed styles
window.getComputedStyle(element)

// Check animation
element.style.animation

// Check data
console.log(experienceData)

// Check function
console.log(typeof functionName)
```

### Network Tab
```
1. Open DevTools
2. Go to Network tab
3. Reload page
4. Check:
   - File sizes
   - Load times
   - Failed requests
   - Cache status
```

### Performance Tab
```
1. Open DevTools
2. Go to Performance tab
3. Click record
4. Interact with page
5. Stop recording
6. Analyze results
```

---

## 🚀 Deployment Issues

### Issue: 404 Error After Deploy
```
Solutions:
1. Check file paths
2. Verify index.html exists
3. Check build settings
4. Verify publish directory
5. Check for typos in paths
```

### Issue: Styles/Scripts Not Loading
```
Solutions:
1. Use relative paths
2. Check file permissions
3. Clear browser cache
4. Check MIME types
5. Verify file exists
```

### Issue: Slow Performance After Deploy
```
Solutions:
1. Minify CSS/JS
2. Optimize images
3. Enable caching
4. Use CDN
5. Check server response time
```

### Issue: Form Not Working After Deploy
```
Solutions:
1. Check form service
2. Verify CORS settings
3. Check backend
4. Verify API endpoint
5. Check error logs
```

---

## 📊 Performance Issues

### Issue: Slow Page Load
```
Solutions:
1. Optimize images
2. Minify CSS/JS
3. Enable caching
4. Use CDN
5. Reduce HTTP requests
6. Check server response time
```

### Issue: Animations Stuttering
```
Solutions:
1. Use transform & opacity
2. Reduce animation complexity
3. Check for layout thrashing
4. Profile with DevTools
5. Reduce number of animations
```

### Issue: High Memory Usage
```
Solutions:
1. Remove unused code
2. Optimize images
3. Clear event listeners
4. Check for memory leaks
5. Profile with DevTools
```

---

## 🔐 Security Issues

### Issue: Mixed Content Warning
```
Solutions:
1. Use HTTPS for all resources
2. Update resource URLs
3. Check for hardcoded HTTP
4. Verify SSL certificate
```

### Issue: CORS Error
```
Solutions:
1. Check CORS headers
2. Verify API endpoint
3. Check request method
4. Verify credentials
5. Check browser console
```

### Issue: CSP Violation
```
Solutions:
1. Check Content Security Policy
2. Update CSP headers
3. Verify resource origins
4. Check inline scripts
5. Check inline styles
```

---

## 📝 Getting Help

### Step 1: Identify the Problem
```
1. Read error message
2. Check console (F12)
3. Inspect element
4. Check network tab
5. Note exact steps to reproduce
```

### Step 2: Search for Solution
```
1. Check documentation
2. Search Google
3. Check Stack Overflow
4. Check GitHub issues
5. Check MDN docs
```

### Step 3: Debug
```
1. Use DevTools
2. Add console.log
3. Check syntax
4. Verify data
5. Test in isolation
```

### Step 4: Ask for Help
```
1. Provide error message
2. Provide steps to reproduce
3. Provide code snippet
4. Provide screenshot
5. Provide browser/OS info
```

---

## 📞 Support Resources

### Documentation
- README.md - Main documentation
- QUICKSTART.md - Quick start guide
- CUSTOMIZATION.md - Customization guide
- ANIMATIONS.md - Animation guide
- DEPLOYMENT.md - Deployment guide

### Online Resources
- MDN Web Docs: https://developer.mozilla.org
- CSS Tricks: https://css-tricks.com
- JavaScript.info: https://javascript.info
- Stack Overflow: https://stackoverflow.com

### Tools
- Chrome DevTools: Built-in
- Firefox DevTools: Built-in
- VS Code: https://code.visualstudio.com
- Lighthouse: Built-in DevTools

---

## ✅ Troubleshooting Checklist

- [ ] Read error message carefully
- [ ] Check browser console (F12)
- [ ] Inspect element (F12)
- [ ] Check network tab
- [ ] Clear cache and reload
- [ ] Try different browser
- [ ] Check documentation
- [ ] Search online
- [ ] Test in isolation
- [ ] Ask for help

---

**Still Having Issues?**

1. Check all documentation files
2. Review error messages carefully
3. Use browser DevTools
4. Search online for similar issues
5. Test in different browser
6. Try on different device
7. Check for typos
8. Verify file paths
9. Check syntax
10. Ask for help with details

---

**Happy Troubleshooting! 🔧✨**

Semoga masalah Anda terselesaikan!
