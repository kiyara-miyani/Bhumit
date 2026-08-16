# izigo-intercity (Next.js + Tailwind)

This scaffold reproduces the izigo.lovable.app look with Google Analytics, Stripe Checkout, and Google Maps embed.

Quick start:
1. Install
   npm install

2. Copy .env.example to .env.local and fill keys:
   - NEXT_PUBLIC_GA_ID
   - NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
   - STRIPE_SECRET_KEY and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
   - NEXT_PUBLIC_FORMSPREE_ENDPOINT (or configure your own contact API)

3. Run locally:
   npm run dev
   Open http://localhost:3000

Stripe:
- Replace price placeholders (`price_basic_placeholder`) with actual Stripe Price IDs.
- For production, ensure STRIPE_SECRET_KEY is set in your hosting environment.

Google Maps:
- Get an API key from Google Cloud Console and enable Maps Embed / Maps JavaScript API.

Assets:
- Replace /public/logo.svg and other images with assets from your original site (you gave permission). Put them in /public and update paths in components/pages.

Deploy:
- Recommended: Vercel. Connect the repo to Vercel and add the environment variables in the Vercel dashboard. Deploy.

If you want I can:
- Replace placeholders with exact copy/images pulled from your URL.
- Push to GitHub and deploy to Vercel (provide repo or give me access).
- Wire contact form to your email or to an SMTP provider.
- Create Stripe price objects if you give me product/price details.
