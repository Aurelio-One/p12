import { useParams, Navigate } from 'react-router-dom'
import data from '../../data/mockedData'
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import './Dashboard.css'

const Dashboard = () => {
  const { userId } = useParams()
  const user = data.user.id === parseInt(userId) ? data.user : null
  const { firstName } = data.user.userInfos

  if (!user) {
    return <Navigate to='/not-found' />
  }
  return (
    <>
      <Header />
      <section className='main-container'>
        <div className='container'>
          <SideBar />
          <div className='profile'>
            <h1>
              Bonjour <span>{firstName}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
