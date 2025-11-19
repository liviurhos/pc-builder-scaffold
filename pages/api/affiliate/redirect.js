export default async function handler(req, res) {
  const to = req.query.to
  const afid = req.query.afid || 'unknown'
  if (!to) return res.status(400).send('Missing "to" parameter')
  // TODO: Log click to your analytics / DB
  res.writeHead(302, { Location: to })
  res.end()
}
