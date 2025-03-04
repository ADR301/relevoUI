

function Comments(props) {
    return (
      <div className="comments">
        <p><strong>{props.username}</strong>: {props.text} <img src="pictures\heart.png" alt="like"/></p> 
      </div>
    );
  }
  export default Comments;