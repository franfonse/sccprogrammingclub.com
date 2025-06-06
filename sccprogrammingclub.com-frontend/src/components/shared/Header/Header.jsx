import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../../contexts/auth/auth";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleMouseEnter = () => setMenuOpen(true);
  const handleMouseLeave = () => setMenuOpen(false);
  const handleClick = () => setMenuOpen(false);

  const { pathname } = useLocation();

  const isMemberSection = pathname.startsWith("/member");

  function handleLogin() {
    console.log("Login button clicked");
  }

  function handleLogout() {
    console.log("Logout button clicked");
  }

  return (
    <header>
      <nav>
        <NavLink to="/" end className="logo">
          SCC <br /> Programming Club
        </NavLink>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav-link home ${isActive ? "active" : ""}`
          }
        >
          Home
        </NavLink>

        <div
          className="nav-link dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink
            to="/members-active"
            className={`nav-link members ${isMemberSection ? "active" : ""}`}
            onClick={handleClick}
          >
            Members
          </NavLink>
          {menuOpen && (
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  to="/members-active"
                  className="submenu-link members-active"
                  onClick={handleClick}
                >
                  Current members
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/members-inactive"
                  className="submenu-link members-inactive"
                  onClick={handleClick}
                >
                  Past members
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `nav-link projects ${isActive ? "active" : ""}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-link contact ${isActive ? "active" : ""}`
          }
        >
          Contact
        </NavLink>

        <div className="sign-container">
          {!isLoggedIn ? (
            <button
              className="login-button"
              onClick={handleLogin}
            >
              Login
            </button>
          ) : (
            <button
              className="logout-button"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>

      </nav>
    </header>
  );
}

export default Header;
