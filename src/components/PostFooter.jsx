import Comments from './Comments';

function PostFooter(props) {
    return (
        <div className="post-footer">
            <p><strong>{props.poster}:</strong> {props.caption}</p>
            <div className="comments">
                <Comments username="Dale" text="Masarap" />
                <Comments username="Relevo" text="Kahit" />
                <Comments username="Godoy" text="Walang Sauce" />
            </div>
        </div>
    );
}

export default PostFooter;