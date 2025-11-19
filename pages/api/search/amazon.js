// Skeleton adapter for Amazon Product Advertising API (PA-API)
export default async function handler(req, res) {
  const q = req.query.q || ''
  res.status(501).json({ error: 'Amazon adapter not implemented. Add PA-API client.' })
}
