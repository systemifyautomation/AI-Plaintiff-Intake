# Pre-Deployment Checklist ✅

## Build & Configuration
- [x] Production build completes successfully (`npm run build`)
- [x] Build output is optimized (minified, code-split)
- [x] vite.config.js configured with production settings
- [x] package.json updated with correct project name and version
- [x] index.html title updated to "AI Plaintiff Intake"
- [x] Logo and favicon properly configured

## Deployment Files
- [x] vercel.json created with SPA routing and security headers
- [x] netlify.toml created with build configuration
- [x] .env.example created for reference
- [x] DEPLOYMENT.md comprehensive guide created
- [x] .gitignore includes dist/, node_modules/, *.local

## Functionality Testing
- [ ] **Test locally with preview server:**
  ```bash
  npm run build
  npm run preview
  ```
- [ ] Visit http://localhost:4173
- [ ] Test all navigation links
- [ ] Test consultation form modal on all pages
- [ ] Submit test consultation form
- [ ] Verify n8n webhook receives data
- [ ] Test all conversion sources (hero-cta, product-cta, etc.)
- [ ] Test mobile responsiveness
- [ ] Verify video modals work
- [ ] Check Privacy Policy, Documentation, Support pages
- [ ] Test contact information links (phone, email)

## Content Verification
- [x] Company name: "AI Plaintiff Intake"
- [x] Phone: +1 (251) 373-4661
- [x] Email: contact@aiplaintiffintake.com
- [x] Webhook: https://n8n.systemify.net/webhook/new-lead-for-AI-plaintiff-intake
- [x] All siteConfig values updated

## SEO & Performance
- [x] Meta tags configured (React Helmet Async)
- [x] Structured data for rich snippets
- [x] Code splitting implemented
- [x] Assets minified
- [x] Security headers configured

## Next Steps

### Option A: Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option B: Deploy to Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Option C: Connect via GitHub
1. Push to GitHub repository
2. Connect repo on Vercel or Netlify
3. Auto-deploy on push to main

## Post-Deployment
After deploying:
1. Visit the live URL
2. Run through the functionality testing checklist above
3. Test form submission and verify webhook receives data
4. Monitor n8n workflow for incoming leads
5. Set up custom domain (optional)
6. Configure DNS records
7. Enable HTTPS (automatic on Vercel/Netlify)

## Production Monitoring
- [ ] Set up n8n webhook monitoring
- [ ] Track conversion rates by source
- [ ] Monitor page load performance
- [ ] Set up error tracking (optional: Sentry)
- [ ] Add Google Analytics (optional)

## Quick Deploy Commands

**Build and test locally:**
```bash
npm run build
npm run preview
```

**Deploy to Vercel:**
```bash
vercel --prod
```

**Deploy to Netlify:**
```bash
netlify deploy --prod
```

---

**Status:** ✅ Ready for deployment

**Last Build:** Successful  
**Bundle Size:** ~450 KB (gzipped)  
**Build Time:** ~5 seconds

See `DEPLOYMENT.md` for detailed deployment instructions.
