/* eslint-disable react/prop-types */
function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Instagram</h2>
      <ul>
        <li>Home</li>
        <li>Search</li>
        <li>Explore</li>
        <li>Reels</li>
        <li>Messages</li>
        <li>Notifications</li>
        <li>Create</li>
        <li>Profile</li>
      </ul>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <Post 
        username="GG"
        imageUrl="pictures/focaccia.jpg"
        caption="🌸✨"
      />
    </div>
  );
}

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

function PostHeader(props) {
  return (
    <div className="post-header">
      <strong>{props.username}</strong>
    </div>
  );
}

function PostFooter(props) {
  return (
    <div className="post-footer">
      <p><strong>{props.poster}</strong>: {props.caption}</p>
      <Comments username="Dale" text="Masarap" />
      <Comments username="Relevo" text="Kahit" />
      <Comments username="Godoy" text="Walang Sauce" />
    </div>
  );
}

function Comments(props) {
  return (
    <div className="comments">
      <p><strong>{props.username}</strong>: {props.text}</p>
    </div>
  );
}

export default App;
