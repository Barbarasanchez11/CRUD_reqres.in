import axios from "axios";


const API_BASE_URL = "https://reqres.in/api";
const HEADERS = {
  "x-api-key": "reqres-free-v1",
};

const getUsers = async (pageNumber) => {
  const response = await axios.get(`${API_BASE_URL}/users?page=${pageNumber}`, {
    headers: HEADERS,
  });
  return response.data;
};


const createUser = async ({ name, lastname, email, job }) => {
  const body = {
    Name: name,
    Lastname: lastname,
    Email: email,
    Position: job,
  };

  const response = await axios.post(`${API_BASE_URL}/users`, body, {
    headers: HEADERS,
  });

  return response.data;
};

const updateUser = async (id, { name, lastname, email, job }) => {
    const body = {
      Name: name,
      Lastname: lastname,
      Email: email,
      Position: job,
    };
  
    const response = await axios.put(`${API_BASE_URL}/users/${id}`, body, {
      headers: HEADERS,
    });
  
    return response.data;
  };


 const deleteUser = async (userId) => {
  await axios.delete(`${API_BASE_URL}/users/${userId}`, {
    headers: HEADERS,
  });
};

export default {getUsers,createUser,deleteUser,updateUser}