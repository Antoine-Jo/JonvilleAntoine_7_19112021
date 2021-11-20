import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import '../../styles/log.css';

const Log = () => {

    const [signUp, setSignUp] = useState(true);
    const [login, setLogin] = useState(false);

    const handleForm = (e) => {
        if(e.target.id === "register") {
            setLogin(false)
            setSignUp(true)
        } else if(e.target.id === 'login') {
            setSignUp(false)
            setLogin(true)
        }
    }

    return (
        <div>
            <div className="form_container">
                <ul>
                    <li onClick={handleForm} id='register' className={signUp ? 'active-btn' : null}>S'inscrire</li>
                    <li onClick={handleForm} id='login' className={login ? 'active-btn' : null}>Se connecter</li>
                </ul>
                {signUp && <SignUpForm />}
                {login && <LoginForm />}
            </div>
        </div>
    );
};

export default Log;