import { useEffect, useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom"
import './userDetail.css'
import Button from "../Buttons/Button";



const UserDetail = () => {
    const [user,setUser] = useState('')
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUser = async () => {
          const response = await axios.get(`https://reqres.in/api/users/${id}`, {
            headers: {
              'x-api-key': 'reqres-free-v1'
            }
          })
          setUser(response.data.data)  
        }
        fetchUser()
      }, [id])
      
    const handleClick = () => {
        navigate('/users/:id/edit')
    }

    const handleDeleteUser = async () => {
      try {
          const response = await axios.delete(`https://reqres.in/api/users/${id}`, {
              headers: {
                  'x-api-key': 'reqres-free-v1'
                }
          })
          navigate('/')
          
          
      } catch (error) {
          console.error(error.message)
      }
 }
   
  return(
        <main className="userdetail-main">
            <div key={user.id} className="userdetail-user">
              <p className="userdetail-name">{user.first_name} {user.last_name}</p>
              <p className="userdetail-email">{user.email}</p>
              <img src={user.avatar} alt="avatar" className="userdetail-avatar"/>    
            </div>
           
            <Button onClick={handleClick} label="Editar" type='button'/>
            <Button onClick={handleDeleteUser} label="Eliminar" type='button' />
            
        </main>
    )
}

export default UserDetail