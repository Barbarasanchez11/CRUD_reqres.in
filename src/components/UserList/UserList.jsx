import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import './userList.css'
import UserListButton from "../UserListButton/UserListButton";
import UserCard from "../UserCard/UserCard";

const FIRST_LOAD_PAGE = 1

const UserList = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(FIRST_LOAD_PAGE);
  
  const navigate = useNavigate()

  const fetchUsers = async (pageNumber) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${pageNumber}` , {
          
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
        });
       
      setUser(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const handleClick = () => {
    navigate('/users/new')
  }
 
  

  return (
    <main className="userlist-main">
     <section className="userlist-section">
      <h1 className="userlist-title">Users (Page {page})</h1>
      <div className="userlist-users-container">
       <UserCard user={user}/>
      </div>
      <UserListButton
        onCreateUser={handleClick}
        onPreviousPage={() => setPage(page => Math.max(page - 1, 1))}
        onNextPage={() => setPage(page => page + 1)}
        isFirstPage={page === 1}
      />
    </section>
   </main> 
  );
};

export default UserList;

