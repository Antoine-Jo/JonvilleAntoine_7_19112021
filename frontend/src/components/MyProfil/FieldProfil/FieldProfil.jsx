import React, { useContext, useState } from 'react';
import avatar from '../../../images/AvatarP7.png';
import { useDispatch, useSelector } from 'react-redux';
import { UidContext } from '../../AppContext';
import BtnUpdateProfil from '../BtnProfil/BtnUpdateProfil';
import BtnDeleteProfil from '../BtnProfil/BtnDeleteProfil';
import './FieldProfil.css';
import axios from 'axios';
import { getUser } from '../../../actions/user_actions';

const FieldProfil = () => {
    const userData = useSelector((state) => state.userReducer);
    const uid = useContext(UidContext);
    const dispatch = useDispatch()
    const [file, setFile] = useState()

    const handleAvatar = async () => {
        console.log(file);
        const data = new FormData();

        data.append('name', file)
        data.append('userId', uid)

        await axios ({
            method: 'POST',
            mode: 'cors',
            withCredentials: true,
            data: data,
            url: `http://localhost:5000/api/user/upload`
        })
        .then((res) => {
            dispatch(getUser(uid))
        })
    }

    return (
        <div className='field_profil'>
            {uid ? (
                <>
            <img src={userData.picture ? userData.picture : avatar} className="field_avatar" alt="Avatar de l'utilisateur" />
            <input type='file' name='name' onChange={e => setFile(e.target.files[0])}/>
            <button onClick={handleAvatar}>Modifier l'avatar</button>
            <h3 className='field_title'>{userData.name}</h3>
            <h3 className='field_title'>{userData.firstname}</h3>
            <p className='field_mail'>{userData.email}</p>
                <BtnUpdateProfil/>
                <BtnDeleteProfil/>
                </>
            ): (
                <span></span>
            )}
        </div>
    );
};

export default FieldProfil;