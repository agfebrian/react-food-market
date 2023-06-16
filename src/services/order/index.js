import http from "~/app/http";

export const fetchOrders = async (profileId, type) => {
  const data = await http.get(`/order?userId=${profileId}&status=${type}`);
  return data;
};
