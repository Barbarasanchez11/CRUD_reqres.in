import { useState } from "react"
import axios from "axios"
import { useParams,useNavigate  } from "react-router-dom"


const EditUser = () => {
    const [isEditing,setIsEditing] = useState('')
    const {id} = useParams()
   
    const [name,setName] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [job,setJob] = useState('')
    const [message,setMessage] = useState('')

    const handleUpdateUser = async () => {
        try {
            const response = await axios.put(`https://reqres.in/api/users/${id}`, user, {
                headers: {
                    'x-api-key': 'reqres-free-v1'
                  }
            })
            
            setIsEditing(response)


        } catch (error) {
            console.error(error.message)
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
       }


    return (
    <>
     <form>
        <input
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
         />
        <input
            placeholder="Enter your lastname"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
        />
        <input
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />
        <input
            placeholder="Enter your position"
            value={job}
            onChange={(event) => setJob(event.target.value)}
                        
        />
     </form>
     <button type='button' onClick={handleSubmit}>Editar</button>
        {message && <p>{message}</p>}
        
    </>
    )
}
export default EditUser