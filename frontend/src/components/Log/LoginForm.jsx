import React, { useState } from 'react';
import Button from '../Button';
import Field from '../Field';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {

    }

    return (
        <form onSubmit={handleLogin} className='form_group' id='login_form'>
            <Field type='text' name='email' value={email} onChange={(e) => setEmail({...email, email: e.target.value})}>Email</Field>
            <Field type='password' name='password' value={password} onChange={(e) => setPassword({...password, password: e.target.value})}>Mot de passe</Field>
            <Button>Se Connecter</Button>
        </form>
    );
};

export default LoginForm;