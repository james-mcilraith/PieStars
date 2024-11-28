import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            src="/images/pie-stars.png"
            alt="Pie Stars Logo"
            className="logo-img"
          />
        </Link>
      </div>
      <h1 className="page-title">Pie Stars</h1>

      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pies">Pies</Link>
          </li>
          <li>
            <Link to="/stores">Stores</Link>
          </li>
        </ul>
      </nav>

      <div className="auth-buttons">
        <button className="login-button">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </header>
  )
}

export default Header
