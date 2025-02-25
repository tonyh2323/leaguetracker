import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navNew">
      <div className="navbar-left">
          <a href="/" className="logo">LeagueTracker</a>
        </div>
        
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Players">Players</Link>
          </li>
          <li>
            <Link to="/Coaches">Coaches</Link>
          </li>
          <li>
            <Link to="/Parents">Parents</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
        </ul>
      </nav>

      
    </>
  )
};

export default Layout;