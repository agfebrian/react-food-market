export const useCalculate = (price, operation = "+") => {
  const driver = 50000;
  const percen = 10 / 100;
  const tax = percen * price;
  let grossTotal = 0;

  switch (operation) {
    case "-":
      grossTotal = price - tax - driver;
      break;
    default:
      grossTotal = price + tax + driver;
      break;
  }

  return {
    driver,
    tax,
    grossTotal,
  };
};
