import ProductCard from '../components/ProductCard'
export default function Page() {
  return (
    <main style={{padding: 24, fontFamily: 'Arial, sans-serif'}}>
      <h1>PC Builder - Scaffold</h1>
      <p>Search results will appear here (example product shown).</p>
      <ProductCard product={{
        id: 'example_1',
        title: 'Example GPU 8GB',
        price: {value: 329.99, currency: 'GBP'},
        image: '/placeholder.png',
        marketplace: 'example',
        affiliateUrl: '/api/affiliate/redirect?to=https://example.com&afid=demo'
      }} />
    </main>
  )
}
