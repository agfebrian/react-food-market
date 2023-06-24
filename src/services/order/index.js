import http from "~/app/http";

export const fetchOrders = async (profileId, type) => {
  const data = await http.get(`/order?userId=${profileId}&status=${type}`);
  return data;
};

export const postOrders = async (payload) => {
  const data = await http.post("/order", payload);
  return data;
};

export const fetchDetailOrders = async (id) => {
  const data = await http.get(`/order/${id}`);
  return data;
};
