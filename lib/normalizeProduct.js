export function normalizeEbay(item) {
  return {
    id: item.id,
    title: item.title,
    price: item.price,
    image: item.image,
    marketplace: item.marketplace,
    affiliateUrl: item.affiliateUrl
  }
}
