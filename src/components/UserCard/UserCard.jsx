import { Link } from "react-router-dom"
import userData from "../../services/userData"
import './UserCard.css'

const UserCard = ({ user }) => {
  return (
    <>
      {user.map(user => {
        const formattedUser = userData(user);
        return (
          <div className="userlist-user" key={formattedUser.id}>
            <p className="userlist-name">{formattedUser.firstName} {formattedUser.lastName}</p>
            <p className="userlist-email">{formattedUser.email}</p>
            <Link to={`/users/${formattedUser.id}`}>
              <img src={formattedUser.avatar} alt="avatar" className="userlist-avatar" />
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default UserCard;