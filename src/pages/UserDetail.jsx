import { useEffect, useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom"



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
        <>
            <div key={user.id}>
              <p>{user.first_name} {user.last_name}</p>
              <p>{user.email}</p>
              <img src={user.avatar} alt="avatar"/>    
            </div>
            <button onClick={handleClick}>editar</button>
            <button type='button' onClick={handleDeleteUser}>Eliminar</button>
        </>
    )
}

export default UserDetail