import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import MainContent from "./MainContent";

function Post() {
    return (
      <div className="post">
        <div className="post-left">
          <MainContent imageUrl="pictures/chooks.jpg" />
        </div>
        <div className="post-right">
          <PostHeader profileimg="pictures/pic0.jpg" username="Chooks_ph" />
          <PostFooter poster="Chooks_ph" caption="Mainit na summer lovin' ‘pag kasama sa outing ang Chooks-to-Go Roasted Chicken, Juicy Liempo, and Liempo Sisig!"/>
        </div>
      </div>
    );
}

export default Post;