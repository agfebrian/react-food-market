export const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID").format(value);
};
