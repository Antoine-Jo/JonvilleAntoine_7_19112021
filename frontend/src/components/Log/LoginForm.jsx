import React, { useState } from 'react';
import Button from '../Button';
import Field from '../Field';
import { validEmail, validPassword } from './Regex';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailErr, setEmailErr] = useState(false)
    const [pwdErr, setPwdErr] = useState(false)

    const checkEmail = (e) => {
        setEmail(e.target.value)
        if (!validEmail.test(email)) {
            setEmailErr(true)
        } else {
            setEmailErr(false)
        }
    }

    const checkPwd = (e) => {
        setPassword(e.target.value)
        if (!validPassword.test(password)) {
            setPwdErr(true)
        } else {
            setPwdErr(false)
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (validEmail.test(email) && validPassword.test(password)){
            window.location = '/home'
        } else {
            e.preventDefault()
        }
    }

    return (
        <form onSubmit={handleLogin} className='form_group' id='login_form'>
            <Field type='text' name='email' value={email} onChange={checkEmail}>Email</Field>
            {emailErr && <p className="email error">Votre email n'est pas correct</p>}
            <Field type='password' name='password' value={password} onChange={checkPwd}>Mot de passe</Field>
            {pwdErr && <p className="password error">Le mot de passe doit contenir 8 caractères, une lettre, un chiffre.</p>}
            <Button type='submit'>Se Connecter</Button>
        </form>
    );
};

export default LoginForm;