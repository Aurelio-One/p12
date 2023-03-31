import CaloriesIcon from '../../assets/img/calories-icon.svg'
import ProteinIcon from '../../assets/img/protein-icon.svg'
import CarbsIcon from '../../assets/img/carbs-icon.svg'
import FatIcon from '../../assets/img/fat-icon.svg'
import './Info.css'

function Info({ type, data }) {
  const values = {
    Calories: data.calorieCount,
    Glucides: data.carbohydrateCount,
    Protéines: data.proteinCount,
    Lipides: data.lipidCount,
  }

  return (
    <div className='information'>
      {type === 'Calories' && (
        <img
          src={CaloriesIcon}
          alt=''
        />
      )}
      {type === 'Protéines' && (
        <img
          src={ProteinIcon}
          alt=''
        />
      )}
      {type === 'Glucides' && (
        <img
          src={CarbsIcon}
          alt=''
        />
      )}
      {type === 'Lipides' && (
        <img
          src={FatIcon}
          alt=''
        />
      )}
      <div className='nutritionIcon__text'>
        <span className='info-value'>
          {values[type]}
          {type === 'Calories' ? 'kCal' : 'g'}
        </span>
        <span className='info-title'>{type}</span>
      </div>
    </div>
  )
}

export default Info
