import React, { useEffect, useState } from 'react';
import Button from './Button';
import Field from './Field';
// import { useNavigate } from 'react-router';
import { validEmail, validPassword, validName } from '../../services/validateFields';
import '../../styles/signupform.css';
import axios from 'axios';

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
    // const navigate = useNavigate()
    
    useEffect(() => {

        setNameErr(validName(name)); 
        setPrenomErr(validName(prenom));
        setEmailErr(validEmail(email));
        setPwdErr(validPassword(password));
        setCtrlPwdErr(password !== ctrlPwd && ctrlPwd.length > 5)
    }, [name, prenom, email, password, ctrlPwd])

    const validate = async (e) => {
        e.preventDefault()
        if (name === '' || prenom === '' || email === '' || password === ''  || validName(name) || validName(prenom) || validEmail(email) || validPassword(password)){
            e.preventDefault()
        } else {
            await axios({
                method: "post",
                mode: 'cors',
                url: 'http://localhost:5000/api/user/signup',
                data: {
                    name,
                    firstname: prenom,
                    email,
                    password
                },
                withCredentials: 'true'
            })
            .then((res) => {
                console.log(res);
                if(res.data.errors) {
                    setNameErr(true)
                    setPrenomErr(true)
                    setEmailErr(true)
                    setPwdErr(true)
                }
            })
            .catch((err) => console.log(err))
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
            <Field type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}>Mot de passe</Field>
            {pwdErr && <p className="password error">Le mot de passe doit contenir 8 caractères, une lettre, un chiffre.</p>}
            <Field type='password' name='password' value={ctrlPwd} onChange={(e) => setCtrlPwd(e.target.value)}>Confirmer mot de passe</Field>
            {ctrlPwdErr && <p className='confirm-password error'>Le mot de passe ne correspond pas.</p>}
            <Button type='submit'>S'inscrire</Button>
        </form>
    );
};

export default SignUpForm;