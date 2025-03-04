import Post from "./Post";

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

  export default MainContent;