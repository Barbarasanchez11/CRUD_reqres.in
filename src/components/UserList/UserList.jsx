import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import UserCard from "../UserCard/UserCard";
import getUsers from "../../services/reqRes";
import "./userList.css";

const FIRST_LOAD_PAGE = 1;

const UserList = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(FIRST_LOAD_PAGE);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers.getUsers(page);
        setUser(data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [page]);

  const handleClick = () => {
    navigate("/users/new");
  };

  return (
    <main className="userlist-main">
      <section className="userlist-section">
        <h1 className="userlist-title">Users (Page {page})</h1>
        <div className="userlist-users-container">
          <UserCard user={user} />
        </div>
        <div className="userlist-actions">
          <Button
            onClick={handleClick}
            label="Create user"
            className="create-user-btn"
          />
          <div className="userlist-pagination">
            <Button
              onClick={() => setPage((page) => Math.max(page - 1, 1))}
              label="Previous"
              disabled={page === 1}
              className="pagination-btn"
            />
            <Button
              onClick={() => setPage((page) => page + 1)}
              label="Next"
              className="pagination-btn"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserList;
