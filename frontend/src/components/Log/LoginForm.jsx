import React from 'react';
import Button from '../Button';
import Field from '../Field';

const LoginForm = () => {
    return (
        <div className='form_group'>
            <Field>Email</Field>
            <Field>Mot de passe</Field>
            <Button>Se Connecter</Button>
        </div>
    );
};

export default LoginForm;