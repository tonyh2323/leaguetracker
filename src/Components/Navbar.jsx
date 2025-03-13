import { Link } from 'react-router-dom';
import '/src/css/Navbar.css';
import Header from './ChildComponents/Header';
const Navbar = () => {
    return (
        <nav className="navNew">
            
            <div className="navbar-left">
                <a href="/" className="logo">LeagueTracker</a>
                
            </div>
            <ul>
                <li><Link to="/">Home</Link>{""}</li>
                <li><Link to="/Players">Players</Link></li>
                <li><Link to="/Coaches">Coaches</Link></li>
                <li><Link to="/Parents">Parents</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Register</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;