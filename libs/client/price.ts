export default function PriceChange(price: number) {
  const priceNumber = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return priceNumber;
}
