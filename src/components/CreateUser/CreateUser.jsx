import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import './createUser.css'
import Button from '../Buttons/Button'

const CreateUser = () => {
    const [name,setName] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [job,setJob] = useState('')
    const [message,setMessage] = useState('')

    const createUser = async () => {
        try {
          const body = {
            Name: name,
            Lastname: lastname,
            Email: email,
            Position: job,
          };
    
          const createResponse = await axios.post(
            "https://reqres.in/api/users/",
            body,
            {
              headers: {
                "x-api-key": "reqres-free-v1",
              },
            }
          );
          
          setMessage('Usuario creado correctamente!');
          setName('')
          setLastname('')
          setEmail('')
          setJob('')
        } catch (error) {
          console.error(error.message);
          setMessage('Error al crear el usuario');
        }
      };
       

    const handleSubmit = (event) =>{
        event.preventDefault()
       }
    
    return(
        <main className="createuser-main">
            <form onSubmit={handleSubmit} className="createuser-form"> 
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
                    <Button onClick={createUser} label="Crear usuario" type='submit'/>
                  
                
            </form>

            {message && <p>{message}</p>}
        </main>
        )
    }


export default CreateUser