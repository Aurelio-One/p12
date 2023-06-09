import Models from '../../utils/Models/Models'
import {
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  RadarChart,
} from 'recharts'
import PropTypes from 'prop-types'
import './Performance.css'

/**
 * Performance component displaying a radar chart of user's performance data
 * @param {object} data - performance data object
 * @returns {JSX.Element} - performance radar chart JSX element
 */
function Performance({ data }) {
  const model = new Models()
  const performances = model.FormatPerformance(data)

  return (
    <div className='radarChart'>
      <ResponsiveContainer
        width={258}
        height={263}
      >
        <RadarChart
          data={performances.reverse()} // Reverse data array for correct display order
          outerRadius={90}
          className='radar-chart'
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey='subject'
            stroke='white'
            dy={4}
            tickLine={false}
            tick={{
              fontSize: 10,
              fontWeight: 500,
            }}
          />
          <Radar
            dataKey='value'
            fill='#FF0101'
            fillOpacity={0.7}
            stroke='transparent'
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

Performance.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Performance
