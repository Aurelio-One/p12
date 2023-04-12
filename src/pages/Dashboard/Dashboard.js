import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUserData } from '../../utils/Api/Api'
import NotFound from '../../pages/NotFound/NotFound'
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import Activity from '../../components/Activity/Activity'
import Info from '../../components/Info/Info'
import SessionsDuration from '../../components/SessionsDuration/SessionsDuration'
import Performance from '../../components/Performance/Performance'
import Score from '../../components/Score/Score'
import Loading from '../Loading/Loading'
import './Dashboard.css'

/**
 * Renders the dashboard page.
 *
 * @returns {JSX.Element} Dashboard page.
 */
function Dashboard() {
  const [userData, setUserData] = useState(null)
  const [pageState, setPageState] = useState('Loading')

  /**
   * Handles errors when getting user data.
   *
   * @param {Error} err Error object.
   */
  const errorHandle = (err) => {
    console.log('Error : ', err)
    setPageState('NotFound')
  }

  /**
   * Handles successful response when getting user data.
   *
   * @param {Object} res User data.
   */
  const resHandle = (res) => {
    if (res.user === undefined) {
      return errorHandle('User not found')
    } else {
      setUserData(res)
      setPageState('Success')
    }
  }

  const { userId } = useParams()

  useEffect(() => {
    fetchUserData(userId)
      .then((res) => resHandle(res))
      .catch((err) => errorHandle(err))
  }, [])

  switch (pageState) {
    case 'Loading':
      return <Loading />
    case 'NotFound':
      return <NotFound />
    case 'Success':
      return (
        <>
          <Header />
          <section className='main-container'>
            <SideBar />
            <div className='container'>
              <div className='profile'>
                <h1>
                  Bonjour <span>{userData.user.userInfos.firstName}</span>
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
              </div>
              <div className='container-stats'>
                <article className='container-chart'>
                  <Activity data={userData.activity} />
                  <div className='cards-info'>
                    <SessionsDuration data={userData.averageSessions} />
                    <Performance data={userData.performance} />
                    <Score
                      data={
                        userData.user.score
                          ? userData.user.score
                          : userData.user.todayScore
                      }
                    />
                  </div>
                </article>

                <article className='container-information'>
                  <Info
                    type='Calories'
                    data={userData.user.keyData}
                  />
                  <Info
                    type='Protéines'
                    data={userData.user.keyData}
                  />
                  <Info
                    type='Lipides'
                    data={userData.user.keyData}
                  />
                  <Info
                    type='Glucides'
                    data={userData.user.keyData}
                  />
                </article>
              </div>
            </div>
          </section>
        </>
      )
  }
}

export default Dashboard
