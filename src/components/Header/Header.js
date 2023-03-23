import logo from '../../assets/img/logo.svg';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="header-horizontal">
        <img src={logo} className="header-logo" alt="logo" />
        <ul className="header-list">
          <li className="header-list-name">Accueil</li>
          <li className="header-list-name">Profil</li>
          <li className="header-list-name">Réglages</li>
          <li className="header-list-name">Communauté</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header