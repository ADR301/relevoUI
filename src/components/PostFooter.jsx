/* eslint-disable react/prop-types */
import { useState } from 'react';
import Comments from './Comments';

function PostFooter(props) {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    return (
        <div className="post-footer">
            <p><strong>{props.poster}:</strong> {props.caption}</p>
            
            <img onClick={toggleComments} className="toggle-image" src={showComments ? "pictures/minus.png" : "pictures/plus.png"} alt="Toggle Comments" />
            
            {showComments && (
                <div className="comments">
                    <Comments profileimg="pictures/pic1.jpg" username="Dale" text="Masarap" />
                    <Comments profileimg="pictures/pic2.jpg" username="Relevo" text="Kahit" />
                    <Comments profileimg="pictures/pic3.jpg" username="Godoy" text="Walang Sauce" />
                </div>
            )}
        </div>
    );
}

export default PostFooter;