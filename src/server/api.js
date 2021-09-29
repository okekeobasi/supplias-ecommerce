import server from '.';

export const login = async (params) => {
  const response = server.post('/api/login', params);
  return response.data;
};

export const register = async (params) => {
  const response = server.post('/api/register', params);
  return response.data;
};
