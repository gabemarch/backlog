import logoPlaceholder from '../../assets/images/logo-placeholder.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logoPlaceholder} alt="logo placeholder" />
      <ul className="navbar-list">
        <li className="navbar-list-item">Főoldal</li>
        <li className="navbar-list-item">Játékok</li>
        <li className="navbar-list-item">Profilom</li>
        <li className="navbar-list-item">Bejelentkezés | Regisztráció</li>
      </ul>
    </div>
  )
}

export default Navbar;