
import { sidebarData } from '../sidebarData.js';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Instagram</h2>
      <ul>
        {sidebarData.map((sidebar) => (
          <li key={sidebar.text}>
            <img src={sidebar.src} alt={sidebar.text} /> {sidebar.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;