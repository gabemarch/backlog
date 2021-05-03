import logoPlaceholder from '../../assets/images/logo-placeholder.png';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logoPlaceholder} alt="logo placeholder" />
      <ul className="navbar-list">
        <Link to='/'>
          <li className="navbar-list-item">Főoldal</li>
        </Link>
        <Link to="/jatekok">
          <li className="navbar-list-item">Játékok</li>
        </Link>
        <Link to='/profilom'>
          <li className="navbar-list-item">Profilom</li>
        </Link>
        <Link to='/kapcsolat'>
          <li className="navbar-list-item">Kapcsolat</li>
        </Link>
        <Link to='/bejelentkezes'>
          <li className="navbar-list-item">Bejelentkezés | Regisztráció</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar;