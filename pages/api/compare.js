export default async function handler(req, res) {
  const q = req.query.q || ''
  res.json({ message: 'Compare endpoint - not wired. Example: /api/search/ebay?q=rx+6600' })
}
