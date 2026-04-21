import api from "./api";

export const getAdminOrders = async () => {
  const res = await api.get("/admin/orders");
  return res.data;
};

export const updateOrderStatus = async (id, status) => {
  const res = await api.put(`/admin/orders/${id}/status?status=${status}`);
  return res.data;
};

export const createCategory = async (payload) => {
  const res = await api.post("/admin/categories", payload);
  return res.data;
};

export const updateCategory = async (id, payload) => {
  const res = await api.put(`/admin/categories/${id}`, payload);
  return res.data;
};

export const deleteCategory = async (id) => {
  const res = await api.delete(`/admin/categories/${id}`);
  return res.data;
};

export const createProduct = async (formData) => {
  const res = await api.post("/admin/products", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const updateProduct = async (id, formData) => {
  const res = await api.put(`/admin/products/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await api.delete(`/admin/products/${id}`);
  return res.data;
};
export const getAllCategories = async () => {
  const res = await api.get("/categories");
  return res.data;
};
export const getAllProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};