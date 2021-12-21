import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UidContext } from '../../AppContext';

const LikeInteract = ({ post }) => {
    const uid = useContext(UidContext);
    const [colorLike, setColorLike] = useState(false);
    const [nbrLikes, setNbrLikes] = useState(null);

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

    useEffect(() => {
        const countLikes = async () => {
            await axios ({
                method: 'GET',
                mode: 'cors',
                withCredentials: true,
                url: `http://localhost:5000/api/post/${post.idposts}/allLikes`,
            })
            .then((res) => {
                const nbrLikes = res.data.total
                // console.log(nbrLikes);
                setNbrLikes(nbrLikes);
            }, [nbrLikes])
        }
        countLikes();
    })
    
    return (
        <>
        {colorLike ? (
        <>
            <i className="far fa-thumbs-up icon_like active-like" onClick={handleLike}>
            <span className="nbr_likes" onChange={e => setNbrLikes(nbrLikes)}>{nbrLikes}</span>
            </i>
        </>
        ) : (
        <>
            <i className="far fa-thumbs-up icon_like" onClick={handleLike}>
            <span className="nbr_likes" onChange={e => setNbrLikes(nbrLikes)}>{nbrLikes}</span>
            </i>
        </>
        )}
        {/* <span className="nbr_likes" onChange={e => setNbrLikes(nbrLikes)}>{nbrLikes}</span> */}
        </>
    );
};

export default LikeInteract;