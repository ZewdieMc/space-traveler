import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { reserveDragon } from '../redux/dragons/dragonsSlice';

const DragonPage = ({ dragon }) => {
  const dispatch = useDispatch();

  const handleReservation = () => {
    dispatch(reserveDragon(dragon.id));
  };

  return (
    <div className="dragon">
      <img src={dragon.flickr_images[0]} alt={dragon.name} />
      <div className="dragon-detail">
        <h2>{dragon.name}</h2>
        <p>
          {dragon.reserved && (
            <Badge bg="info">
              Reserved
            </Badge>
          )}
          {dragon.description}
        </p>
        {
          dragon.reserved
            ? <Button variant="outline-secondary" onClick={handleReservation}>Cancel reservation</Button>
            : <Button variant="primary" onClick={handleReservation}>Reserve Dragon</Button>
        }
        {' '}

      </div>
    </div>
  );
};
DragonPage.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};
export default DragonPage;
