import React, { useState } from 'react';

function Comments(props) {
    const [like, setLike] = useState(false);

    const toggleLike = () => {
        setLike(!like);
    };

    return (
        <div className="comments">
            <p>
                <strong>{props.username}</strong>: {props.text} 
                <img onClick={toggleLike} src={like ? "pictures/liked.png" : "pictures/heart.png"} alt="like" />
            </p> 
        </div>
    );
}

export default Comments;