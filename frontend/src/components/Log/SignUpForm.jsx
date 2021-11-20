import React, { useState } from 'react';
import Button from '../Button';
import Field from '../Field';
import '../../styles/signupform.css'

const SignUpForm = () => {

    const [state, setState] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
    });

    const handleSubmit = e => {
        e.preventDefault();
        const formulaire = [];
        const data = JSON.stringify(state)
        setState({
            nom: '',
            prenom: '',
            email: '',
            password: '',
        })
        // console.log(data);
        formulaire.push(data)
        localStorage.setItem('register', JSON.stringify(formulaire))
    }

    return (
        <form onSubmit={handleSubmit} className='form_group'>
            <Field type='text' name='nom' value={state.nom} onChange={(e) => setState({ ...state, nom: e.target.value})}>Nom</Field>
            <Field type='text' name='prenom' value={state.prenom} onChange={(e) => setState({ ...state, prenom: e.target.value})}>Prénom</Field>
            <Field type='email' name='email' value={state.email} onChange={(e) => setState({ ...state, email: e.target.value})}>E-mail</Field>
            <Field type='password' name='password' value={state.password} onChange={(e) => setState({ ...state, password: e.target.value})}>Mot de passe</Field>
            <Button type='submit'>Envoyer</Button>
            {/* {JSON.stringify(state)} */}
        </form>
    );
};

export default SignUpForm;