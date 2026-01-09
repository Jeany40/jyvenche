# Launch Checklist

Before deploying Jyvenche to production (Vercel/Railway), ensure the following items are verified:

## 1. Environment Variables
Ensure all variables in `.env.local.example` are set in your production dashboard.
- [ ] `STRIPE_PAY_LINK_URL`: Verified and active.
- [ ] `SITE_OWNER_EMAIL`: Correct recipient for notifications.
- [ ] `RESEND_API_KEY`: Required if moving from Mock to Production API.

## 2. Brand Assets
- [ ] `public/favicon.svg`: Monogram exists and renders.
- [ ] `public/og.jpg`: Social share image exists and is optimized (1200x630).

## 3. Form Testing
- [ ] Test the "Start Project" form on a real mobile device.
- [ ] Verify that field errors display correctly.
- [ ] Verify that success state appears clearly.

## 4. Performance & SEO
- [ ] Run `npm run build` locally to catch any build-time errors.
- [ ] Verify `sitemap.xml` generates at `/sitemap.xml`.
- [ ] Verify `robots.txt` generates at `/robots.txt`.

## 5. Deployment
- [ ] Connected to main branch.
- [ ] Automated deployments enabled.
- [ ] Analytics provider (Optional) integrated.
