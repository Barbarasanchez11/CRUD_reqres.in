import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom"
import reqRes from '../../services/reqRes'
import userData from "../../services/userData";
import Button from "../Button/Button";
import './userDetail.css'



const UserDetail = () => {
    const [user,setUser] = useState('')
    const {id} = useParams();
    console.log(id)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const data = await reqRes.getUser(id);
            const mappedUser = userData(data.data);
            setUser(mappedUser);
            } catch (error) {
              console.error("Failed to fetch user:", error.message);
              }
        };
        fetchUser()
      }, [])
      
    const handleClick = () => {
      navigate(`/users/${id}/edit`)
    }

    const handleDeleteUser = async () => {
      try {
        await reqRes.deleteUser(id);
        navigate('/');
      } catch (error) {
        console.error("Failed to delete user:", error.message);
      }
    };
   
  return(
        <main className="userdetail-main">
            <div key={user.id} className="userdetail-user">
              <p className="userdetail-name">{user.firstName} {user.lastName}</p>
              <p className="userdetail-email">{user.email}</p>
              <img src={user.avatar} alt="avatar" className="userdetail-avatar"/>    
            </div>
            <Button onClick={handleClick} label="edit" type='button'/>
            <Button onClick={handleDeleteUser} label="delete" type='button' />
            
        </main>
    )
}

export default UserDetail