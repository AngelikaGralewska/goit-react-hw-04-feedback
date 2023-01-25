
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, leaveFeedback }) => {
    return (
      <>
        <div>
          {options.map(option => {
            return (
              <button
                type="button"
                onClick={() => leaveFeedback(option)}
                key={option}
                className={style.optionButton}
              >
                {option}
              </button>
            );
          })}
        </div>
      </>
    );
  };
  
  FeedbackOptions.propTypes = {
        options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        leaveFeedback: PropTypes.func.isRequired,
  };
  
  export default FeedbackOptions;