export default function ProductCard({product}) {
  return (
    <div style={{border:'1px solid #ddd', padding:12, borderRadius:6, maxWidth:540}}>
      <img src={product.image} alt={product.title} style={{width:120, height:120, objectFit:'cover'}} />
      <div style={{display:'inline-block', verticalAlign:'top', marginLeft:12}}>
        <h3>{product.title}</h3>
        <p>{product.price.value} {product.price.currency}</p>
        <p>Marketplace: {product.marketplace}</p>
        <a href={product.affiliateUrl} rel="noopener noreferrer">Buy (affiliate)</a>
      </div>
    </div>
  )
}
