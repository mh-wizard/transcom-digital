const countEMI = (price: number, duration: number) => {
  const emi = Math.floor(price / duration);

  return emi;
}

export default countEMI