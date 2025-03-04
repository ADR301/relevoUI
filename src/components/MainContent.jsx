function MainContent(props) {
    return (
        <div className="main-content">
            <img src={props.imageUrl} alt="Post" className="post-image" />
        </div>
    );
}

export default MainContent;