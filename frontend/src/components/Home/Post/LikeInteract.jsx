import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UidContext } from '../../AppContext';

const LikeInteract = ({ post }) => {
    const uid = useContext(UidContext);
    const [colorLike, setColorLike] = useState(false);

    const handleLike = async () => {
        await axios ({
            method: 'PATCH',
            mode: 'cors',
            withCredentials: true,
            data: {
                uid
            },
            url: `http://localhost:5000/api/post/${post.idposts}/like`
        })
        .then(() => {
            setColorLike(!colorLike)
        })
    }

    useEffect(() => {
        const liker = async () => {
            const res = await axios ({
                method: 'GET',
                mode: 'cors',
                withCredentials: true,
                data: {
                    uid
                },
                url: `http://localhost:5000/api/post/${post.idposts}/likes`
            })
        if (res.data[0]) return setColorLike(true)
        return setColorLike(false)
        }
        liker()
    }, [post, uid])
    
    return (
        <>
        {colorLike ? <i className="far fa-thumbs-up icon_like active-like" onClick={handleLike}></i> : <i className="far fa-thumbs-up icon_like" onClick={handleLike}></i>}
        </>
    );
};

export default LikeInteract;