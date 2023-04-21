import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const MissionsPage = ({ mission, index }) => {
  const dispatch = useDispatch();

  const handleJoiningMissions = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeavingMissions = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <tr>
      <td className="title">{index + 1}</td>
      <td className="title">{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>
        {' '}
        {mission.reserved && mission.reserved ? (
          <h4><Badge bg="primary">Active Member</Badge></h4>
        ) : (
          <h4><Badge bg="secondary">Not A Member</Badge></h4>
        )}
      </td>
      <td>
        {' '}
        {mission.reserved && mission.reserved ? (
          <Button
            className="leavjoinBtn"
            type="button"
            variant="outline-secondary"
            size="lg"
            onClick={() => handleLeavingMissions(mission.id)}
          >
            Leave Mission
          </Button>
        ) : (
          <Button
            className="leavjoinBtn"
            type="button"
            variant="outline-danger"
            size="lg"
            onClick={() => handleJoiningMissions(mission.id)}
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
    id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default MissionsPage;
