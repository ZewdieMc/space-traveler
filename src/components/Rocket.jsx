import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => (
  <div className="rocket">
    <h2>{rocket.rocket_name}</h2>
  </div>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
  }).isRequired,
};
export default Rocket;
