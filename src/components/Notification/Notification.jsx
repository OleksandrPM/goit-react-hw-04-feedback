import PropTypes from 'prop-types';

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

function Notification({ message }) {
  return <p className="message">{message}</p>;
}
