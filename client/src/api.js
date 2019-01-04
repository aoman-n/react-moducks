import axios from 'axios';

const URL = '/users';

export const fetchUsers = () => {
  return axios.get(URL);
}

export const postUser = user => {
  return axios.post(URL, {name: user});
}

export const deleteUser = id => {
  return axios.delete(`${URL}/${id}`);
}