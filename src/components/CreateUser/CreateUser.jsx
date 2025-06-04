import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './createUser.css'
import Button from '../Button/Button'
import Input from '../Inputs/Input'

const CreateUser = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [job, setJob] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const validate = () => {

        // Los comentarios no son necesarios PORQUE el codigo tiene que ser AUTOEXPLICATIVO
        // Evitamos en la medida de lo posible if-else-if
        const newErrors = {};
        // Validación nombre
        if (!name.trim()) {
            const messageNameEmpty = 'El nombre es obligatorio.'
            newErrors.name = messageNameEmpty;
        } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,30}$/.test(name)) {
            newErrors.name = 'El nombre solo puede contener letras y espacios (2-30 caracteres).';
        }
        // Validación apellido
        if (!lastname.trim()) {
            newErrors.lastname = 'El apellido es obligatorio.';
        } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,30}$/.test(lastname)) {
            newErrors.lastname = 'El apellido solo puede contener letras y espacios (2-30 caracteres).';
        }
        // Validación empleo
        // const minJobLength = 2
        // const maxJoblength = 30
        if (!job.trim()) {
            newErrors.job = 'El empleo es obligatorio.';
        } else if (job.length < 2 || job.length > 30) {
            newErrors.job = 'El empleo debe tener entre 2 y 30 caracteres.';
        }
        // Validación email
        if (!email.trim()) {
            newErrors.email = 'El email es obligatorio.';
        } else if (email.length > 50) {
            newErrors.email = 'El email no puede tener más de 50 caracteres.';
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = 'El email debe ser válido (ejemplo@dominio.com).';
        }
        return newErrors;
    }

   const clearForm = () => {
    setName('');
    setLastname('');
    setEmail('');
    setJob('');
    setErrors({});
    }

    const createUser = async () => {
        try {
            const body = {
                Name: name,
                Lastname: lastname,
                Email: email,
                Position: job,
            };
            await axios.post(
                "https://reqres.in/api/users/",
                body,
                {
                    headers: {
                        "x-api-key": "reqres-free-v1",
                    },
                }
            );
            clearForm()
            setMessage('Usuario creado correctamente!');
            
        } catch (error) {
            console.error(error.message);
            setMessage('Error al crear el usuario');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        setMessage('');
        if (Object.keys(validationErrors).length === 0) {
            createUser();
        }
    }

    return (
        <main className="createuser-main">
            <form onSubmit={handleSubmit} className="createuser-form">
                {/* Parte del input, el container y la gestion de errores */}
                <div className="input-container">
                    <Input
                        placeholder="Enter your name"
                        value={name}
                        // e --> ?
                        onChange={e => setName(e.target.value)}
                    />
                    {errors.name && <p className="input-error">{errors.name}</p>}
                </div>
                <div className="input-container">
                    <Input
                        placeholder="Enter your lastname"
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                    />
                    {errors.lastname && <p className="input-error">{errors.lastname}</p>}
                </div>
                <div className="input-container">
                    <Input
                        placeholder="Enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="input-error">{errors.email}</p>}
                </div>
                <div className="input-container">
                    <Input
                        placeholder="Enter your position"
                        value={job}
                        onChange={e => setJob(e.target.value)}
                    />
                    {errors.job && <p className="input-error">{errors.job}</p>}
                </div>
                <Button label="Crear usuario" type='submit' />
                <Button onClick={() => navigate('/')} label="Volver" type="button" />
            </form>
            {message && <p>{message}</p>}
        </main>
    )
}

export default CreateUser