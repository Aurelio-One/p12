import mockedData from './data/mockedData'

export async function getUserData(id) {

  const userId = parseInt(id);

  const user = mockedData.USER_MAIN_DATA.filter(
    (user) => user.id === userId
  ).shift();
  const activity = mockedData.USER_ACTIVITY.filter(
    (userActivity) => userActivity.userId === userId
  ).shift();
  const averageSessions = mockedData.USER_AVERAGE_SESSIONS.filter(
    (userActivity) => userActivity.userId === userId
  ).shift();
  const performance = mockedData.USER_PERFORMANCE.filter(
    (userPerformance) => userPerformance.userId === userId
  ).shift();
  console.log(
    'Trying to use mocked data: ',
    mockedData.USER_MAIN_DATA.filter((e) => e.id === userId)
  );

  return { user, activity, averageSessions, performance };
}