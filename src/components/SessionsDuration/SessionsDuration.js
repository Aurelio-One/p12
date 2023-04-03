import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'
import Models from '../../utils/Models/Models'
import './SessionsDuration.css'

/**
 * SessionsDuration component displaying the user's average session duration over time
 * @param {object} data - sessions data object
 * @returns {JSX.Element} - session duration line chart JSX element
 */
function SessionsDuration({ data }) {
  const model = new Models()
  const sessions = model.FormatSessions(data)

  /**
   * CustomTooltip component displaying the session duration when hovering over the chart
   * @param {boolean} active - whether the tooltip is active or not
   * @param {object[]} payload - array of data payload from the chart
   * @returns {JSX.Element|null} - tooltip JSX element or null
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='tooltip'>
          <p className='label'>{payload[0].value} min</p>
        </div>
      )
    }

    return null
  }

  /**
   * CustomizedCursor component displaying a cursor on the chart
   * @param {object[]} points - array of points on the chart
   * @returns {JSX.Element} - cursor JSX element
   */
  function CustomizedCursor({ points }) {
    return (
      <Rectangle
        fill='black'
        opacity={0.1}
        x={points[1].x}
        width={500}
        height={300}
      />
    )
  }

  return (
    <div className='duration-session'>
      <header className='durationSessions-header'>
        <h1>Durée moyenne des sessions</h1>
      </header>
      <ResponsiveContainer
        width={258}
        height={263}
        className='chartAvg'
      >
        <LineChart
          data={sessions}
          margin={{ top: 40, right: 15, left: 15, bottom: 5 }}
          className='duration-chart'
        >
          <defs>
            <linearGradient
              id='gradient'
              x='0'
              x2='.8'
              y2='0'
            >
              <stop
                offset='0%'
                stopColor='white'
                stopOpacity={0.2}
              />
              <stop
                offset='100%'
                stopColor='white'
              />
            </linearGradient>
          </defs>
          <Line
            type='natural'
            dataKey='sessionLength'
            stroke='url(#gradient)'
            strokeOpacity={1}
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: 'rgba(255, 255, 255, 0.5)',
              strokeWidth: 10,
              r: 5,
            }}
          />
          <YAxis
            hide={true}
            domain={['dataMin -15', 'dataMax + 45']}
          />
          <XAxis
            dataKey='letter'
            stroke='rgba(255, 255, 255, 0.6)'
            tick={{ fontSize: 12, fill: 'white' }}
            tickLine={false}
            axisLine={false}
            opacity={0.6}
            interval='preserveStartEnd'
          />
          <Tooltip
            cursor={<CustomizedCursor />}
            content={<CustomTooltip />}
          />
          onMouseMove={(e) => {}}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

SessionsDuration.propTypes = {
  session: PropTypes.object.isRequired,
}

export default SessionsDuration
