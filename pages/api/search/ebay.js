import fetch from 'node-fetch'
export default async function handler(req, res) {
  const q = req.query.q || ''
  const token = process.env.NEXT_PUBLIC_EBAY_TOKEN
  if (!token) return res.status(500).json({error: 'Missing eBay token'})
  const url = `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${encodeURIComponent(q)}&limit=10`
  const r = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
  const data = await r.json()
  const items = (data.itemSummaries || []).map(it => ({
    id: it.itemId,
    title: it.title,
    price: { value: it.price?.value || null, currency: it.price?.currency || 'GBP' },
    image: it.image?.imageUrl || null,
    marketplace: 'ebay',
    affiliateUrl: it.itemWebUrl
  }))
  res.json({ items })
}
