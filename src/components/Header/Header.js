import logo from '../../assets/img/logo.svg'
import './Header.css'

/**
 * Header component displaying the app's navigation bar
 * @returns {JSX.Element} - header JSX element
 */
function Header() {
  return (
    <header className='header'>
      <nav className='header-horizontal'>
        <img
          src={logo}
          className='header-logo'
          alt='logo'
        />
        <ul className='header-list'>
          <li className='header-list-name'>Home</li>
          <li className='header-list-name'>Profile</li>
          <li className='header-list-name'>Settings</li>
          <li className='header-list-name'>Community</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
