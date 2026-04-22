import api from "./api";

export const getMyProfile = async () => {
  const res = await api.get("/user/me");
  return res.data;
};

export const updateMyProfile = async (payload) => {
  const res = await api.put("/user/me", payload);
  return res.data;
};