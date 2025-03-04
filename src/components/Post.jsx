import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
function Post(props) {
    return (
      <div className="post">
        <div className="post-left">
          <img src={props.imageUrl} alt="Post" className="post-image" />
        </div>
        <div className="post-right">
          <PostHeader username="adrian" />
          <PostFooter poster="adrian" caption="Focaccia" />
        </div>
      </div>
    );
  }

  export default Post;