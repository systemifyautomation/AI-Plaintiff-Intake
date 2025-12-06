# Deployment Guide

## 🚀 Quick Deployment

This application is production-ready and can be deployed to various platforms with minimal configuration.

## Prerequisites

- Node.js 18+ installed
- Git repository connected
- Production build tested locally: `npm run build`

---

## Deployment Platforms

### 1. Vercel (Recommended) ⚡

**Why Vercel?**
- Zero-config React deployment
- Automatic HTTPS
- Global CDN
- Instant rollbacks

**Steps:**

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   vercel
   ```

3. **Or Deploy via GitHub**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

**Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Custom Domain:**
```bash
vercel --prod
vercel domains add aiplaintiffintake.com
```

---

### 2. Netlify 🌐

**Steps:**

1. **Deploy via CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

2. **Or Deploy via GitHub**:
   - Go to [netlify.com](https://netlify.com)
   - "New site from Git"
   - Select repository
   - Configuration is auto-detected from `netlify.toml`

**Configuration:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18

---

### 3. AWS Amplify ☁️

**Steps:**

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Connect your GitHub repository
3. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

---

### 4. GitHub Pages (Free Static Hosting) 🆓

**Setup:**

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/tally-clio-lead-automation",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js** (add base path):
   ```javascript
   export default defineConfig({
     base: '/tally-clio-lead-automation/',
     // ... rest of config
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

---

## Environment Variables

Create `.env.local` for local development (copy from `.env.example`):

```bash
cp .env.example .env.local
```

**For Production Platforms:**

### Vercel:
```bash
vercel env add VITE_WEBHOOK_URL production
```

### Netlify:
- Dashboard → Site settings → Environment variables
- Add: `VITE_WEBHOOK_URL`

### Note: 
The webhook URL is currently hardcoded in the application:
```
https://n8n.systemify.net/webhook/new-lead-for-AI-plaintiff-intake
```

No environment variables are required unless you want to override this URL.

---

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test consultation form submission
- [ ] Check n8n webhook receives data
- [ ] Verify conversion tracking works
- [ ] Test mobile responsiveness
- [ ] Validate all links (Privacy Policy, Documentation, Support)
- [ ] Check logo and favicon display
- [ ] Test navigation and routing
- [ ] Verify SEO meta tags in page source
- [ ] Test video modals and embedded content
- [ ] Confirm contact information is correct
- [ ] Test form validation

---

## Custom Domain Setup

### Vercel:
```bash
vercel domains add aiplaintiffintake.com
vercel domains add www.aiplaintiffintake.com
```

### Netlify:
- Dashboard → Domain settings → Add custom domain
- Configure DNS records:
  ```
  CNAME www your-site.netlify.app
  A @ 75.2.60.5
  ```

---

## Performance Optimization

The app is pre-configured with:

✅ Code splitting (vendor, animations, icons chunks)  
✅ Asset minification (esbuild)  
✅ Tree shaking  
✅ Lazy loading for routes  
✅ Image optimization  
✅ CSS purging via Tailwind  
✅ Security headers (in vercel.json / netlify.toml)  

**Expected Metrics:**
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Total Bundle Size: ~450 KB (gzipped)

---

## Monitoring & Analytics

### Add Google Analytics (Optional):

1. **Install plugin**:
   ```bash
   npm install --save react-ga4
   ```

2. **Initialize in main.jsx**:
   ```javascript
   import ReactGA from 'react-ga4';
   ReactGA.initialize('G-XXXXXXXXXX');
   ```

### Monitor n8n Webhook:
- Check n8n workflow execution logs
- Set up error notifications
- Track conversion rates by source

---

## Troubleshooting

### Issue: Blank page after deployment
**Solution:** Check if routes are configured for SPA (see platform-specific redirect rules)

### Issue: 404 on refresh
**Solution:** Ensure catch-all redirect to `/index.html` is configured

### Issue: Assets not loading
**Solution:** Verify `base` in `vite.config.js` matches deployment path

### Issue: Form not submitting
**Solution:** 
1. Check browser console for CORS errors
2. Verify n8n webhook URL is accessible
3. Test webhook with curl/Postman

---

## Rollback Instructions

### Vercel:
```bash
vercel rollback
```

### Netlify:
- Dashboard → Deploys → Click previous deploy → "Publish deploy"

### GitHub Pages:
```bash
git revert HEAD
npm run deploy
```

---

## Support

For deployment issues:
- Check build logs on your platform
- Verify all dependencies are installed
- Test production build locally: `npm run build && npm run preview`
- Contact: support@aiplaintiffintake.com

---

## Quick Reference

| Platform | Build Time | Price | Best For |
|----------|-----------|-------|----------|
| Vercel | ~30s | Free tier available | Fastest deployment |
| Netlify | ~45s | Free tier available | Easy custom domains |
| AWS Amplify | ~2min | Pay-as-you-go | Enterprise scale |
| GitHub Pages | ~1min | Free | Simple static hosting |

**Recommended:** Vercel for production deployment ⚡
- [ ] Update meta tags with actual domain
- [ ] Add Google Analytics
- [ ] Configure form submission endpoints
- [ ] Set up error tracking (Sentry)
- [ ] Add real contact information
- [ ] Update pricing and CTAs
- [ ] Add privacy policy and terms

### SEO Optimization
The app includes:
- React Helmet for meta tags
- Semantic HTML structure
- Mobile-responsive design
- Fast load times with Vite
- Optimized images and assets

## 🔒 Security Notes

- All dependencies are up-to-date
- No vulnerabilities found
- HTTPS required for production
- Implement rate limiting on forms

## 📊 Performance

Expected metrics:
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Total Bundle Size: < 500KB

## 🎯 Post-Deployment

1. Test all pages and links
2. Verify mobile responsiveness
3. Check SEO meta tags
4. Test form submissions
5. Monitor analytics
6. Set up uptime monitoring

---

Need help? Contact the development team.
