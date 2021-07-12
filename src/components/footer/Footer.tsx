import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-column">
        <p className="copyright-text">Copyright Backlog | Gabe March | {new Date().getFullYear()}</p>
      </div>
      <div className="right-column">
        <ul className="imprint-list">
          <Link to='/kapcsolat'>
            <li className="imprint-list-item">Kapcsolat</li>
          </Link>
          <li className="imprint-list-item">Rólunk</li>
          <li className="imprint-list-item">Hirdetés</li>
          <li className="imprint-list-item">GYIK</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;