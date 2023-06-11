export const dateToEpoch = (date) => {
  return Math.floor(new Date(date).getTime() / 1000.0);
};

export const epochToDate = (epoch) => {
  return new Date(epoch * 1000);
};
