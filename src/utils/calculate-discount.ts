/**
 * @param {number} price The price of the product
 * @param {number} discount The discount percentage
 * @returns {number} The amount of discount.
 */
const calculateDiscount = (price: number, discount: number): number => {
  const value = (discount / 100) * price;
  return Math.floor(value);
}

export default calculateDiscount