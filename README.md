# PC Builder Scaffold

Minimal Next.js scaffold for a PC Builder + Price Comparison + Affiliate links project.

## What is included
- Next.js app structure (app dir)
- Example components (ProductCard)
- API route skeletons for search adapters (eBay, Amazon, eMAG/Profitshare)
- Affiliate redirect handler
- .env.example with expected variables

## Quick start
1. `npm install`
2. Create `.env.local` based on `.env.example` and fill API keys
3. `npm run dev`

## Notes
- The adapters are skeletons: you must add your own API keys and implement auth where needed.
- Use caching (Redis/Upstash) in production to avoid rate limits.
