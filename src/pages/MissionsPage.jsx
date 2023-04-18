import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const MissionsPage = ({ mission }) => {
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
    <tr className="data">
      <td className="title">{mission.mission_name}</td>
      <td className="desc">{mission.description}</td>
      <td className="status">
        {' '}
        {mission.reserved && (
          <p className="active">Active Member</p>
        )}
        <p className="inactive">Not A Member</p>
      </td>
      <td>
        {' '}
        {mission.reserved && (
          <button type="button" className="leave" onClick={() => handleLeavingMissions()}>
            Leave Mission
          </button>
        )}
        <button type="button" className="join" onClick={() => handleJoiningMissions()}>
          Join mission
        </button>
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
};

export default MissionsPage;
