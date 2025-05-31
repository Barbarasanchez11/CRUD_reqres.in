import axios from "axios"
import { useNavigate } from "react-router-dom"

const DeleteUser = () => {
    const navigate = useNavigate()
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
        
        </>
    )
}
export default DeleteUser