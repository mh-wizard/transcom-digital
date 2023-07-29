
export function numberSeparator(number: number): string {
  const formattedNumber = number.toLocaleString('en-IN');
  return formattedNumber;
}
