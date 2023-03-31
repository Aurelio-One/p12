export default class Models {
  FormatSessions(data) {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return data.sessions.map((s, i) => ({
      ...s,
      letter: days[i],
    }))
  }
  FormatActivity(data) {
    return data.sessions.map((e, i) => ({
      day: i + 1,
      date: e.day,
      weight: e.kilogram,
      cal: e.calories,
    }))
  }
  FormatScore(data) {
    return [
      {
        name: '',
        score: 100,
        fill: '#8884d8',
        opacity: '0%',
      },
      {
        name: 'de votre objectif',
        score: data * 100,
      },
    ]
  }
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
