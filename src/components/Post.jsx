import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import MainContent from "./MainContent";

function Post(props) {
    return (
      <div className="post">
        <div className="post-left">
          <MainContent imageUrl="pictures/focaccia.jpg" />
        </div>
        <div className="post-right">
          <PostHeader username="Adrian" />
          <PostFooter poster="Adrian" caption="Focaccia"/>
        </div>
      </div>
    );
}

export default Post;