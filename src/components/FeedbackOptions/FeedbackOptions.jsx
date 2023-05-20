import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};

function FeedbackOptions({ options, onLeaveFeedbackClick }) {
  return (
    <ul className={css.feedback_buttons}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              type="button"
              className={css.btn}
              onClick={() => onLeaveFeedbackClick(option)}
            >
              {uppercaseFirstLetter(option)}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function uppercaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
