import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <ul className={css.lists}>
        {options.map((el, index) => {
          return (
            <li key={index} className={css.list}>
              <button className={css.btn} name={el} onClick={onLeaveFeedback}>
                {el}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
