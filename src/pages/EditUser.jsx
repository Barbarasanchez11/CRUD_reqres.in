import { useState } from "react"
import axios from "axios"
import { useParams,Link  } from "react-router-dom"


const EditUser = () => {
    const [isEditing,setIsEditing] = useState('')
    const {id} = useParams()

    console.log(isEditing)
   
    const [name,setName] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [job,setJob] = useState('')
    const [message,setMessage] = useState('')

    const handleUpdateUser = async () => {
        try {
            const body = {
                Name: name,
                Lastname: lastname,
                Email: email,
                Position: job,
              };

            const response = await axios.put(`https://reqres.in/api/users/${id}`,body , {
                headers: {
                    'x-api-key': 'reqres-free-v1'
                  }
            })
            console.log(response)
            setIsEditing(response)
            setMessage('Usuario actualizado correctamente');
            setName('')
            setLastname('')
            setEmail('')
            setJob('')


        } catch (error) {
            console.error(error.message)
        }
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        handleUpdateUser()
       }


    return (
    <>
     <form onSubmit={handleSubmit}>
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
        <button><Link to={'/'}>Volver</Link></button>
        <button type='submit' onClick={handleUpdateUser}>Editar</button>
     </form>
    {message && <p>{message}</p>}
        
    </>
    )
}
export default EditUser