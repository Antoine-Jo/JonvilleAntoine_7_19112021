import React, { useContext } from 'react';
import Banner from '../components/Header/Banner';
import EditProfil from '../components/Profil/EditProfil';
import { UidContext } from '../components/AppContext';
import Home from './Home';


const Profil = () => {
    const uid = useContext(UidContext)

    return (
        <div>
            {uid ? (
                <>
                <Banner/>
                <EditProfil/>
                </>
            ) : (
                <Home/>
            )}
        </div>
    );
};

export default Profil;