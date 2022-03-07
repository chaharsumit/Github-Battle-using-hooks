import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <div className="flex container">
        <nav className="nav">
          <ul className="flex nav-menu">
            <li className="nav-menu-item text-md text-bold">
              <NavLink
                to="/popular"
                style={({ isActive }) => ({
                  color: isActive ? "#a52a2a" : "#000",
                  textDecoration: "none"
                })}
              >
                Popular
              </NavLink>
            </li>
            <li className="nav-menu-item text-md text-bold">
              <NavLink
                to="/battle"
                style={({ isActive }) => ({
                  color: isActive ? "#a52a2a" : "#000",
                  textDecoration: "none"
                })}
              >
                Battle
              </NavLink>
            </li>
          </ul>
        </nav>
        <span className="dark-mode-btn text-ulg">🔦</span>
      </div>
    </header>
  );
}

/*💡 */
