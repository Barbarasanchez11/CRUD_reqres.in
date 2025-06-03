import { useState } from "react"
import axios from "axios"
import { useParams,Link  } from "react-router-dom"
import './editUser.css'
import Button from "../Button/Button"
import Input from "../Inputs/Input"


const EditUser = () => {
    const [isEditing,setIsEditing] = useState('')
    const {id} = useParams()


    // SE BORRAN AL TERMINAR 
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
    <main className="edituser-main">
     <form onSubmit={handleSubmit} className="edituser-form">
        <Input 
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)} 
        />
        <Input 
            placeholder="Enter your lastname" 
            value={lastname} 
            onChange={e => setLastname(e.target.value)} 
        />
        <Input 
            placeholder="Enter your email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
        />
        <Input 
            placeholder="Enter your position" 
            value={job} 
            onChange={e => setJob(e.target.value)} 
        />
        
        <button><Link to={'/'}>Volver</Link></button>
        <Button onClick={handleUpdateUser} label="Editar" type='button'/>
        
     </form>
    {message && <p>{message}</p>}
        
    </main>
    )
}
export default EditUser