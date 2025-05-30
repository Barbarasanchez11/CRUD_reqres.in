import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"


const UserDetail = () => {
    const [user,setUser] = useState('')
    const {id} = useParams();

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
      
    

    return(
        <>
            <div key={user.id}>
              <p>{user.first_name} {user.last_name}</p>
              <p>{user.email}</p>
              <img src={user.avatar} alt="avatar"/>    
            </div>
        </>
    )
}

export default UserDetail