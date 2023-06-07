import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
    return options.map(option => (
        <button
        className={css.button}
        type='button'
        key={option}
        onClick={() => onLeaveFeedback(option)}
        >
            {option}
        </button>
    ));
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}