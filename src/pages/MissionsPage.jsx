import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const MissionsPage = ({ mission, index }) => {
  const dispatch = useDispatch();

  const handleLeavingMissions = () => {
    // code goes here
    dispatch();
  };

  const handleJoiningMissions = () => {
    // code goes here
    dispatch();
  };

  return (
    <tr>
      <td className="title">{index}</td>
      <td className="title">{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>
        {' '}
        {mission.reserved ? (
          <h4><Badge bg="primary">Active Member</Badge></h4>
        ) : (
          <h4><Badge bg="secondary">Not A Member</Badge></h4>
        )}
      </td>
      <td>
        {' '}
        {mission.reserved ? (
          <Button
            className="leavjoinBtn"
            type="button"
            variant="outline-secondary"
            size="lg"
            onClick={() => handleLeavingMissions()}
          >
            Leave Mission
          </Button>
        ) : (
          <Button
            className="leavjoinBtn"
            type="button"
            variant="outline-danger"
            size="lg"
            onClick={() => handleJoiningMissions()}
          >
            Join mission
          </Button>
        )}
      </td>
    </tr>
  );
};

MissionsPage.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
  index: PropTypes.string.isRequired,
};

export default MissionsPage;
