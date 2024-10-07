export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const isLoggedIn = () => {
  return !!getToken();
};

export const decodeToken = (token) => {
  // This would require a library like jwt-decode to properly decode the JWT
  // Alternatively, you can implement basic parsing if needed.
  return JSON.parse(atob(token.split('.')[1]));
};
