import Models from '../../utils/Models/Models'

import {
  ResponsiveContainer,
  BarChart,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Bar,
} from 'recharts'
import PropTypes from 'prop-types'

import { ReactComponent as Oval } from '../../assets/img/Oval.svg'
import './Activity.css'

function Activity({ data }) {
  const model = new Models()
  const dataChart = model.FormatActivity(data)
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='tooltip'>
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}kcal`}</p>
        </div>
      )
    }
  }
  return (
    <div className='activity'>
      <header className='card-header'>
        <h3>Activité quotidienne</h3>
        <div className='card-indicator'>
          <div className='card-infos'>
            <Oval fill='#282D30' />
            <span> Poids (kg)</span>
          </div>
          <div className='card-infos'>
            <Oval fill='#E60000' />
            <span> Calories brûlées (kCal)</span>
          </div>
        </div>
      </header>

      <ResponsiveContainer height={320}>
        <BarChart
          data={dataChart}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          barSize={7}
          barGap={8}
        >
          <YAxis
            tickCount={3}
            orientation='right'
            tickLine={false}
            axisLine={false}
          />
          <XAxis
            dataKey='day'
            dy={16}
            fontSize={14}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid
            vertical={false}
            strokeDasharray='4 1'
          />

          <Bar
            name='Poids (kg)'
            dataKey='weight'
            fill='#282D30'
            radius={[10, 10, 0, 0]}
            width={10}
          />
          <Bar
            name='Calories brûlées (kCal)'
            dataKey='cal'
            fill='#E60000'
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

Activity.propTypes = {
  dataChart: PropTypes.object.isRequired,
}

export default Activity
