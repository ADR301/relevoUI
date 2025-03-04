

function Comments(props) {
    return (
      <div className="comments">
        <p><strong>{props.username}</strong>: {props.text}</p>
      </div>
    );
  }
  export default Comments;