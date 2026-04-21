import api from "./api";

export const getCart = async () => {
  const res = await api.get("/user/cart");
  return res.data;
};

export const addToCart = async (productId, quantity) => {
  const res = await api.post("/user/cart/add", {
    productId,
    quantity,
  });
  return res.data;
};

export const updateCart = async (itemId, quantity) => {
  const res = await api.put("/user/cart/update", {
    itemId,
    quantity,
  });
  return res.data;
};

export const removeCartItem = async (itemId) => {
  const res = await api.delete(`/user/cart/remove/${itemId}`);
  return res.data;
};

export const clearCart = async () => {
  const res = await api.delete("/user/cart/clear");
  return res.data;
};

export const checkoutCart = async (payload) => {
  const res = await api.post("/user/checkout", payload);
  return res.data;
};