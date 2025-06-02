import axios from "axios";
import { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import './userList.css'

const UserList = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  
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
        {user.map(user => (
          
            <div className="userlist-user" key={user.id}>
              
              <p className="userlist-name">{user.first_name} {user.last_name}</p>
              <p className="userlist-email">{user.email}</p>
              <Link to={`/users/${user.id}`}>
              <img src={user.avatar} alt="avatar" className="userlist-avatar"/>    
              </Link>
            </div>
        ))}
      </div>
      <div className="userlist-buttons">
        <button onClick={handleClick}>Crear usuario</button>
        <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(p => p + 1)}>
          Next
        </button>
      </div>
    </section>
   </main> 
  );
};

export default UserList;

