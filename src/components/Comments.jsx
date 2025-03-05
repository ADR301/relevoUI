/* eslint-disable react/prop-types */
import { useState } from 'react';

function Comments(props) {
    const [like, setLike] = useState(false);

    const toggleLike = () => {
        setLike(!like);
    };

    return (
        <div className="comments">
            <p>
                <img className="profile-img" src={props.profileimg} alt="profile" /> <strong>{props.username}</strong>: {props.text} 
                <img onClick={toggleLike} className="heart-img" src={like ? "pictures/liked.png" : "pictures/heart.png"} alt="like" />
            </p> 
        </div>
    );
}

export default Comments;