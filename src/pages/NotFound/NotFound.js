import { Link } from "react-router-dom"
import './NotFound.css'

/**
 * Represents a page for displaying a "not found" error message.
 * @returns {JSX.Element} JSX element containing the error message and a link to the home page.
 */
function NotFound() {
  return (
    <div className='error'>
      <div className='error-content'>
        <p className='error-number'>404</p>
        <p className='error-message'>
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link
        to='/'
        className='back-link'
      >
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default NotFound
