import React, { useEffect, useState } from 'react';
import Button from './Button';
import Field from './Field';
import { useNavigate } from 'react-router-dom'
import { validEmail, validPassword } from '../../services/validateFields';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailErr, setEmailErr] = useState(false)
    const [pwdErr, setPwdErr] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        setEmailErr(validEmail(email))
        setPwdErr(validPassword(password))
    }, [email, password])

    const handleLogin = async (e) => {
        e.preventDefault();
        if (email === '' || password === '' || validEmail(email) || validPassword(password)) {
            e.preventDefault();
        } else {
            await axios({
                method: 'POST',
                mode: 'cors',
                url: 'http://localhost:5000/api/user/login',
                data: {
                    email,
                    password
                },
                withCredentials: 'true'
            })
            .then((res) => {
                console.log(res);
                navigate('/home')
            })
            .catch((err) => {
                console.error(err)
                console.log(err.response.data.err)
            })
        }
    }

    return (
        <form onSubmit={handleLogin} className='form_group' id='login_form'>
            <Field type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)}>Email</Field>
            {emailErr && <p className="email error">Votre email n'est pas correct</p>}
            <Field type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}>Mot de passe</Field>
            {pwdErr && <p className="password error">Le mot de passe doit contenir 8 caractères, une lettre, un chiffre.</p>}
            <Button type='submit'>Se Connecter</Button>
        </form>
    );
};

export default LoginForm;