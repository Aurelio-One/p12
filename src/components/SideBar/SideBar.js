import yoga from '../../assets/img/yoga-icon.svg'
import swim from '../../assets/img/swim-icon.svg'
import bike from '../../assets/img/bike-icon.svg'
import fitness from '../../assets/img/fitness-icon.svg'
import './SideBar.css'

/**
 * The SideBar component displays a vertical navigation menu and copyright information.
 */
const SideBar = () => {
  return (
    <>
      <section className='header side'>
        <nav className='header-vertical'>
          <ul className='header-icons'>
            <li className='header-icon'>
              <img
                src={yoga}
                alt='yoga'
              />
            </li>
            <li className='header-icon'>
              <img
                src={swim}
                alt='swim'
              />
            </li>
            <li className='header-icon'>
              <img
                src={bike}
                alt='bike'
              />
            </li>
            <li className='header-icon'>
              <img
                src={fitness}
                alt='fitness'
              />
            </li>
          </ul>
          <p className='header-copyright'>
            Copyright, SportSee {new Date().getFullYear()}
          </p>
        </nav>
      </section>
    </>
  )
}

export default SideBar
