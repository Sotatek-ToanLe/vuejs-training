import axios from 'axios';
const URL = 'http://localhost:3000/todos';
// const LOGIN_URL = 'http://localhost:3000/login';

export const getTodo = async () => {
  const response = await axios.get(URL).then((res) => res);
  if (response) return response.data;
};

export const addTodo = async (todo) => {
  const { data } = await axios.post(URL, { ...todo });
  return data;
};
export const getDetail = async (id) => {
  const { data } = await axios.get(`${URL}/${id}`);
  return data;
};
export const updateTodo = async (id, body) => {
  const { data } = await axios.put(`${URL}/${id}`, body);
  return data;
};
export const deleteTodo = async (id) => {
  const { data } = await axios.delete(`${URL}/${id}`);
  return data;
};

export const login = async () => {
  const { data } = await axios.get(' http://localhost:3000/login');
  return data.data;
};
