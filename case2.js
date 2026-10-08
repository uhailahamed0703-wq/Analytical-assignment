const customerName = "Budi";
const productPrice = 150000;
const quantity = 3;
const discountPercent = 10;

function calculateTotal(price, qty, discount) {
  const subtotal = price * qty;
  const discountAmount = subtotal * (discount / 100);
  return subtotal - discountAmount;
}

const calculateShipping = (total) => total >= 500000 ? 0 : 20000;

const subtotal = productPrice * quantity;
const discountAmount = subtotal * (discountPercent / 100);
const afterDiscount = calculateTotal(productPrice, quantity, discountPercent);
const shippingCost = calculateShipping(afterDiscount);
const totalPayment = afterDiscount + shippingCost;

console.log(`Customer: ${customerName}`);
console.log(`Product Price: Rp${productPrice}`);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: Rp${subtotal}`);
console.log(`Discount: Rp${discountAmount}`);
console.log(`After Discount: Rp${afterDiscount}`);
console.log(`Shipping: Rp${shippingCost}`);
console.log(`Total Payment: Rp${totalPayment}`);