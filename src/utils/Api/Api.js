import axios from "axios"

/**
 * Fetches user data from the API.
 *
 * @param {string} userId - The ID of the user to fetch data for.
 * @returns {Promise<object>} A Promise that resolves to an object containing the user's data, activity, average sessions, and performance.
 */
export async function getUserData(userId) {
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
