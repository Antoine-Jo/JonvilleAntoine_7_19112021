import React, { useState } from 'react';
import Button from '../Button';
import Field from '../Field';
import { validEmail, validPassword, validName } from './Regex';
import '../../styles/signupform.css'

const SignUpForm = () => {
    const [name, setName] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nameErr, setNameErr] = useState(false)
    const [prenomErr, setPrenomErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [pwdErr, setPwdErr] = useState(false)


    const checkName = (e) => {
        setName(e.target.value)
        if (!validName.test(name)) {
            setNameErr(true)
            
        } else {
            setNameErr(false)
        }
    }

    const checkPrenom = (e) => {
        setPrenom(e.target.value)
        if (!validName.test(prenom)) {
            setPrenomErr(true)
        } else {
            setPrenomErr(false)
        }
    }

    const checkEmail = (e) => {
        setEmail(e.target.value)
        if(!validEmail.test(email)) {
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

    const validate = (e) => {
        e.preventDefault()
        
        if (validEmail.test(email) && validPassword.test(password) && validName.test(name) && validName.test(prenom)) {
            window.location = '/home'
        } else {
            e.preventDefault()
        }
    }

    return (
        <form onSubmit={validate} className='form_group'>
            <Field type='text' name='nom' value={name} onChange={checkName}>Nom</Field>
            {nameErr && <p className="name error">Votre nom doit contenir des lettres uniquement</p>}
            <Field type='text' name='prenom' value={prenom} onChange={checkPrenom}>Prénom</Field>
            {prenomErr && <p className="prenom error">Votre prénom doit contenir des lettres uniquement</p>}
            <Field type='email' name='email' value={email} onChange={checkEmail}>E-mail</Field>
            {emailErr && <p className="email error">Votre email n'est pas correct</p>}
            <Field type='password' name='password' value={password} onChange={checkPwd}>Mot de passe</Field>
            {pwdErr && <p className="password error">Le mot de passe doit contenir 8 caractères, une lettre, un chiffre.</p>}
            <Button type='submit'>S'inscrire</Button>
            {/* {JSON.stringify(state)} */}
        </form>
    );
};

export default SignUpForm;