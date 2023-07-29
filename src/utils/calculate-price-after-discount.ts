import calculateDiscount from "./calculate-discount";

/**
 * @param {number} price The price of the product
 * @param {nmber} discount The discount percetage
 * @returns {number} after discount what's the price of the product
 */
function calculatePriceAfterDiscount(price: number, discount: number): number {
  return price - calculateDiscount(price, discount)
}

export default calculatePriceAfterDiscount;