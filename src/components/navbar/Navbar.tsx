import logoPlaceholder from '../../assets/images/logo-placeholder.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SearchBar from '../searchbar/SearchBar';
import './Navbar.scss';

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="navbar">
      <img src={logoPlaceholder} alt="logo placeholder" />
      <SearchBar />
      <ul className="navbar-list">
        <Link to='/'>
          <li className="navbar-list-item">{t('pages.homepage')}</li>
        </Link>
        <Link to="/jatekok">
          <li className="navbar-list-item">{t('pages.games')}</li>
        </Link>
        <Link to='/profilom'>
          <li className="navbar-list-item">{t('pages.myProfile')}</li>
        </Link>
        <Link to='/kapcsolat'>
          <li className="navbar-list-item">{t('pages.contact')}</li>
        </Link>
        <Link to='/bejelentkezes'>
          <li className="navbar-list-item">{t('pages.registration')}</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar;