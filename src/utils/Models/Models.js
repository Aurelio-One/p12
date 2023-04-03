/**
 * Models class for formatting data
 */
export default class Models {
  /**
   * Format sessions data
   * @param {Object} data - Sessions data
   * @return {Array} - Formatted sessions data
   */
  FormatSessions(data) {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return data.sessions.map((s, i) => ({
      ...s,
      letter: days[i],
    }))
  }

  /**
   * Format activity data
   * @param {Object} data - Activity data
   * @return {Array} - Formatted activity data
   */
  FormatActivity(data) {
    return data.sessions.map((e, i) => ({
      day: i + 1,
      date: e.day,
      weight: e.kilogram,
      cal: e.calories,
    }))
  }

  /**
   * Format score data
   * @param {number} data - User's score data
   * @return {Array} - Formatted score data
   */
  FormatScore(data) {
    return [
      {
        name: '',
        score: 100,
        fill: '#8884d8',
        opacity: '0%',
      },
      {
        name: 'of your objective',
        score: data * 100,
      },
    ]
  }

  /**
   * Format performance data
   * @param {Object} data - Performance data
   * @return {Array} - Formatted performance data
   */
  FormatPerformance(data) {
    const frenchLabel = {
      intensity: 'Intensité',
      cardio: 'Cadio',
      endurance: 'Endurance',
      strength: 'Force',
      energy: 'Energie',
      speed: 'Vitesse',
    }
    return data.data.map((e) => ({
      subject: frenchLabel[data.kind[e.kind]],
      value: e.value,
    }))
  }
}
