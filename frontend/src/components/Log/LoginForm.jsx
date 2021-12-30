import React, { useState } from 'react';
import Button from './Button';
import Field from './Field';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleLogin = async (e) => {
        e.preventDefault();
        const errors = document.querySelector('.error');

        if (email === '' || password === '') {
            errors.innerHTML = 'Veuillez remplir les champs pour vous connecter !'
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
                window.location = '/home';
            })
            .catch((err) => {
                errors.innerHTML = err.response.data.err;
                console.log(err.response.data.err)
            })
        }
    }

    return (
        <form onSubmit={handleLogin} className='form_group' id='login_form'>
            <Field type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}>Email</Field>
            <Field type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}>Mot de passe</Field>
            <p className="error"></p>
            <Button type='submit'>Se Connecter</Button>
        </form>
    );
};

export default LoginForm;