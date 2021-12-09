import React, { useContext } from 'react';
import { UidContext } from '../components/AppContext';
import Banner from '../components/Header/Banner';
import EditProfil from '../components/Profil/EditProfil';
import Subscription from './Subscription';


const Profil = () => {
    const uid = useContext(UidContext);

    return (
        <div>
            {uid ? (
                <>
                <Banner/>
                <EditProfil/>
                </>
            ): (
                <>
                <Subscription/>
                </>
            )}
        </div>
    );
};

export default Profil;