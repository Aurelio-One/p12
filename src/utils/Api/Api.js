import axios from 'axios'
import mockedData from '../../data/mockedData'

/**
 * Fetches user data from the API.
 *
 * @param {string} userId - The ID of the user to fetch data for.
 * @returns {Promise<object>} A Promise that resolves to an object containing the user's data, activity, average sessions, and performance.
 */
async function getUserData(userId) {
  const url = 'http://localhost:3000/user/'

  try {
    const user = await axios.get(url + userId).then((res) => res.data.data)
    const activity = await axios
      .get(url + userId + '/activity')
      .then((res) => res.data.data)
    const averageSessions = await axios
      .get(url + userId + '/average-sessions')
      .then((res) => res.data.data)
    const performance = await axios
      .get(url + userId + '/performance')
      .then((res) => res.data.data)

    return { user, activity, averageSessions, performance }
  } catch (error) {
    console.log('Fetching data failed: ', error)
  }
}

/**
 * Returns user data based on the provided user ID.
 *
 * @async
 * @function
 * @param {number} id - The ID of the user.
 * @returns {Promise<object>} An object containing user data such as main data, activity, average sessions, and performance.
 * @throws {Error} Will throw an error if there is an issue retrieving the user data.
 */
async function getMockedData(id) {
  const userId = parseInt(id)

  const user = mockedData.USER_MAIN_DATA.filter(
    (user) => user.id === userId
  ).shift()
  const activity = mockedData.USER_ACTIVITY.filter(
    (userActivity) => userActivity.userId === userId
  ).shift()
  const averageSessions = mockedData.USER_AVERAGE_SESSIONS.filter(
    (userActivity) => userActivity.userId === userId
  ).shift()
  const performance = mockedData.USER_PERFORMANCE.filter(
    (userPerformance) => userPerformance.userId === userId
  ).shift()
  console.log(
    'Trying to use mocked data: ',
    mockedData.USER_MAIN_DATA.filter((e) => e.id === userId)
  )

  return { user, activity, averageSessions, performance }
}

/**
 * Fetches user data either from the API or from mocked data based on the value of `useMockedData`.
 *
 * @param {number} userId - The ID of the user to fetch data for.
 * @param {boolean} useMockedData - If true, mocked data is used, otherwise data is fetched from the API.
 * @returns {Promise<object>} A Promise that resolves to an object containing the user's data, activity, average sessions, and performance.
 */
export async function fetchUserData(userId, useMockedData) {
  if (useMockedData) {
    return getMockedData(userId)
  } else {
    return getUserData(userId)
  }
}
