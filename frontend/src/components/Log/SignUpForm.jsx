import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Field from '../Field';
import { validEmail, validPassword, validName } from './Regex';
import '../../styles/signupform.css'

const SignUpForm = () => {
    const [name, setName] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ctrlPwd, setCtrlPwd] = useState('')
    const [nameErr, setNameErr] = useState(false)
    const [prenomErr, setPrenomErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [pwdErr, setPwdErr] = useState(false)
    const [ctrlPwdErr, setCtrlPwdErr] = useState(false)
    
    
    useEffect(() => {
        if(!validName.test(name)) {
            setNameErr(true)
        } else {
            setNameErr(false)
        }
        if(!validName.test(prenom)) {
            setPrenomErr(true)
        } else {
            setPrenomErr(false)
        }
        if(!validEmail.test(email)) {
            setEmailErr(true)
        } else {
            setEmailErr(false)
        }
        if(!validPassword.test(password)) {
            setPwdErr(true)
        } else {
            setPwdErr(false)
        }
        if (ctrlPwd !== password) {
            setCtrlPwdErr(true)
        } else {
            setCtrlPwdErr(false)
        }
    }, [name, prenom, email, password, ctrlPwd])

    // useEffect(() => {
    //     if(!validName.test(prenom)) {
    //         setPrenomErr(true)
    //     } else {
    //         setPrenomErr(false)
    //     }
    // }, [prenom])

    // useEffect(() => {
    //     if(!validEmail.test(email)) {
    //         setEmailErr(true)
    //     } else {
    //         setEmailErr(false)
    //     }
    // }, [email])

    // useEffect(() => {
    //     if(!validPassword.test(password)) {
    //         setPwdErr(true)
    //     } else {
    //         setPwdErr(false)
    //     }
    // }, [password])

    // useEffect(() => {
    //     if (ctrlPwd !== password) {
    //         setCtrlPwdErr(true)
    //     } else {
    //         setCtrlPwdErr(false)
    //     }
    // }, [ctrlPwd, password])

    const validate = (e) => {
        e.preventDefault()
        
        if (validEmail.test(email) && validPassword.test(password) && validName.test(name) && validName.test(prenom) && ctrlPwd === password) {
            window.location = '/home'
        } else {
            e.preventDefault()
        }
    }

    return (
        <form onSubmit={validate} className='form_group'>
            <Field type='text' name='nom' value={name} onChange={(e) => setName(e.target.value)}>Nom</Field>
            {nameErr && <p className="name error">Votre nom doit contenir des lettres uniquement</p>}
            <Field type='text' name='prenom' value={prenom} onChange={(e) => setPrenom(e.target.value)}>Prénom</Field>
            {prenomErr && <p className="prenom error">Votre prénom doit contenir des lettres uniquement</p>}
            <Field type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}>E-mail</Field>
            {emailErr && <p className="email error">Votre email n'est pas correct</p>}
            <Field type='text' name='password' value={password} onChange={(e) => setPassword(e.target.value)}>Mot de passe</Field>
            {pwdErr && <p className="password error">Le mot de passe doit contenir 8 caractères, une lettre, un chiffre.</p>}
            <Field type='text' name='password' value={ctrlPwd} onChange={(e) => setCtrlPwd(e.target.value)}>Confirmer mot de passe</Field>
            {ctrlPwdErr && <p className='confirm-password error'>Le mot de passe ne correspond pas.</p>}
            <Button type='submit'>S'inscrire</Button>
        </form>
    );
};

export default SignUpForm;