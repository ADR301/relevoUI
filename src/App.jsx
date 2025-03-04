/* eslint-disable react/prop-types */
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import MainContent from "./components/MainContent";
function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Post />
    </div>
  );
}

export default App;
