import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            src="./images/pie-stars.png"
            alt="Pie Stars Logo"
            className="logo-img"
          />
        </Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
      </nav>
      {/* Login and Sign Up buttons */}
      <div className="auth-buttons">
        <button className="login-button">
          <Link to="/login">Login</Link>
        </button>
        <button className="signup-button">
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    </header>
  )
}

export default Header
