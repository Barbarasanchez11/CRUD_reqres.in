import { useState } from "react"
import { useParams, useNavigate  } from "react-router-dom"
import updateUser from '../../services/reqRes'
import Button from "../Button/Button"
import Input from "../Input/Input"
import './editUser.css'


const EditUser = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [name,setName] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [job,setJob] = useState('')
    const [message,setMessage] = useState('')
  
    const clearForm = () => {
        setName('')
        setLastname('')
        setEmail('')
        setJob('')
      }
    
      const handleSubmit = async (event) => {
        event.preventDefault()
    
        const body = {
          name,
          lastname,
          email,
          position: job,
        }
    
        try {
          await updateUser.updateUser(id, body)
          setMessage('User updated successfully!')
          clearForm()
        } catch (error) {
          console.error(error.message)
          setMessage('Error updating user')
        }
      }   

    return (
    <main className="edituser-main">
     <form onSubmit={handleSubmit} className="edituser-form">
        <Input 
            placeholder="Enter your name"
            value={name}
            onChange={event => setName(event.target.value)} 
        />
        <Input 
            placeholder="Enter your lastname" 
            value={lastname} 
            onChange={event => setLastname(event.target.value)} 
        />
        <Input 
            placeholder="Enter your email" 
            value={email} 
            onChange={event => setEmail(event.target.value)} 
        />
        <Input 
            placeholder="Enter your position" 
            value={job} 
            onChange={event => setJob(event.target.value)} 
        />
        <Button label="edit" type='submit'/>
        <Button label='back' type='button' onClick={() => navigate('/')} />
        
     </form>
     {message && <p className="message-updateuser">{message}</p>}
        
    </main>
    )
}
export default EditUser