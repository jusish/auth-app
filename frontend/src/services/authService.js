import api from "./api";

export const registerUser = async (userData) => {
  const response = await api.post("/auth/signup", userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};


export const getUsers = async () => {
    const response = await api.get("/users");
    return response.data;
}