import Models from '../../utils/Models/Models'
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'
import './Score.css'

function Score({ data }) {
  const model = new Models()
  const dataChart = model.FormatScore(data)
  return (
    <div className='score'>
      <header className='score-header'>
        <span>Score</span>
      </header>
      <div className='score-chart'>
        <ResponsiveContainer
          width={258}
          height={263}
        >
          <RadialBarChart
            cx='50%'
            cy='50%'
            innerRadius='50'
            outerRadius='144'
            barSize={15}
            data={dataChart}
            startAngle={90}
          >
            <RadialBar
              minAngle={0}
              label={{ position: 'center', fill: '#74798C', fontSize: 26 }}
              clockWise
              fill='#FF0000'
              dataKey='score'
              cornerRadius='50%'
            />

            <Legend
              content={
                <div className='score-info'>
                  <div className='score-value'>{data * 100}%</div>
                  <div className='score-text'>de votre objectif</div>
                </div>
              }
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

Score.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Score
