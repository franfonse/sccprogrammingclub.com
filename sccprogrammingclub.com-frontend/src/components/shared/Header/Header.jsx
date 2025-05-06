import { NavLink } from 'react-router-dom'
import './Header.css';

function Header() {
    return (
        <header>
            <nav>
                <NavLink
                    to="/"
                    end
                    className='logo'
                >
                    <img src="/src/assets/react.svg" alt="SCC Programming Club" />
                </NavLink>
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => `nav-link home ${isActive ? 'active' : ''}`}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/members-active"
                    className={({ isActive }) => `nav-link members ${isActive ? 'active' : ''}`}
                >
                    Members
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) => `nav-link projects ${isActive ? 'active' : ''}`}
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => `nav-link contact ${isActive ? 'active' : ''}`}
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;
