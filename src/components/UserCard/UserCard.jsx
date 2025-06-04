import { Link } from "react-router-dom"
import userData from "../../services/userData";
import './UserCard.css'

const UserCard = ({user}) => {
    return(
        <>
        {user.map(user => ( 
              <div className="userlist-user" key={user.id}> 
                <p className="userlist-name">{user.firstName} {user.lastName}</p>
                <p className="userlist-email">{user.email}</p>
                <Link to={`/users/${user.id}`}>
                 <img src={user.avatar} alt="avatar" className="userlist-avatar"/>    
                </Link>
              </div>
          ))}
        </>
    )
}
export default UserCard