
import PropTypes from 'prop-types';
import style from './Statistics.module.css';


const Statistics = ({ good, neutral, bad, total, positivePercent }) => {
    return (
      <ul className={style.counterList}>
            <li className={style.counterItem}>Good: {good}</li>
            <li className={style.counterItem}>Neutral: {neutral}</li>
            <li className={style.counterItem}>Bad: {bad}</li>
            <li className={style.counterItem}>Total: {total}</li>
            <li className={style.counterItem}>Positive feedback: {positivePercent}%</li>
      </ul>
    );
  };
  
  Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercent: PropTypes.number.isRequired,
  };
  
  export default Statistics;
