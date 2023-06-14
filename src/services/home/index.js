import http from "~/app/http";

export const fetchAllFoods = async ({ category, perPage }) => {
  const data = await http.get(`/foods?category=${category}&perPage=${perPage}`);
  return data;
};

export const fetchFood = async (id) => {
  const data = await http.get(`/foods/${id}`);
  return data;
};
