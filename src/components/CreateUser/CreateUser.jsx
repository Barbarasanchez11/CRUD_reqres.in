import { useState } from "react"
import { useNavigate } from "react-router-dom"
import createUser  from '../../services/reqRes'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './createUser.css'

const CreateUser = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [job, setJob] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate();

    const clearForm = () => {
     setName('');
     setLastname('');
     setEmail('');
     setJob('');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const body = {
          name,
          lastname,
          email,
          position: job,
        };
    
        try {
          await createUser.createUser(body);
          clearForm();
          setMessage('User created successfully!');
        } catch (error) {
          console.error(error.message);
          setMessage('Error creating user');
        }
      };

    return (
        <main className="createuser-main">
            <form onSubmit={handleSubmit} className="createuser-form">
                <div className="input-container">
                    <Input
                        placeholder="Enter your name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        error={errors.name}
                    />
                    <Input
                        placeholder="Enter your lastname"
                        value={lastname}
                        onChange={event => setLastname(event.target.value)}
                        error={errors.lastname}
                    />
                    <Input
                        placeholder="Enter your email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        error={errors.email}
                    />
                    <Input
                        placeholder="Enter your position"
                        value={job}
                        onChange={event => setJob(event.target.value)}
                        error={errors.job}
                    />
                    
                </div>
                <Button label="Crear usuario" type='submit' />
                <Button onClick={() => navigate('/')} label="Volver" type="button" />
            </form>
            {message && <p className="message-createuser">{message}</p>}
        </main>
    )
}

export default CreateUser