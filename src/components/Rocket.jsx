import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleReservation = () => {
    dispatch(reserveRocket(rocket.id));
  };

  return (
    <div className="rocket">
      <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <div className="rocket-detail">
        <h2>{rocket.rocket_name}</h2>
        <p>
          {rocket.description}
        </p>
        <Button variant="primary" onClick={handleReservation}>Reserve Rocket</Button>
      </div>
    </div>
  );
};
Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default Rocket;
