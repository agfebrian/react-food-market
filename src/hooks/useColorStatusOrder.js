export const useColorStatusOrder = (status) => {
  let color = "text-black";
  switch (status) {
    case "CANCELED":
      color = "text-red-500";
      break;
    case "DELIVERED":
      color = "text-green-500";
      break;
    default:
      color = "text-black";
      break;
  }
  return color;
};
