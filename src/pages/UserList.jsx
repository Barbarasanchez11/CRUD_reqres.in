import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);

  const fetchUsers = async (pageNumber) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${pageNumber}` , {
          
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
        });
      console.log(response)
      
      setUser(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  return (
    <section>
      <h1>Users (Page {page})</h1>
      <div>
        {user.map(user => (
          <Link to={`/users/${user.id}`}>
            <div key={user.id}>
              <p>{user.first_name} {user.last_name}</p>
              <p>{user.email}</p>
              <img src={user.avatar} alt="avatar"/>    
            </div>
          </Link>
        ))}
      </div>
      <div>
        <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(p => p + 1)}>
          Next
        </button>
      </div>
    </section>
  );
};

export default UserList;

