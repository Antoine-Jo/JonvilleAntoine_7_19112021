import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Field from '../Field';
import { useNavigate } from 'react-router-dom'
import { validEmail, validPassword } from './Regex';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailErr, setEmailErr] = useState(false)
    const [pwdErr, setPwdErr] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        
        if (!validEmail.test(email) && email.length > 5) {
            setEmailErr(true)
        } else {
            setEmailErr(false)
        }
        if (!validPassword.test(password) && password.length > 5) {
            setPwdErr(true)
        } else {
            setPwdErr(false)
        }
    }, [email, password])

    const handleLogin = (e) => {
        e.preventDefault();
        if (validEmail.test(email) && validPassword.test(password)){
            navigate('/home')
        } else {
            e.preventDefault()
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