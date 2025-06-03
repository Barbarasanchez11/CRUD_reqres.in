import { Link } from "react-router-dom"

const UserCard = ({user}) => {
    return(
        <>
        {user.map(user => ( 
              <div className="userlist-user" key={user.id}> 
                <p className="userlist-name">{user.first_name} {user.last_name}</p>
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