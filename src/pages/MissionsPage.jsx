import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const MissionsPage = ({ mission }) => {
  const dispatch = useDispatch();

  const handleJoining = () => {
    // code goes here
    dispatch();
  };

  const handleLeaving = () => {
    // code goes here
    dispatch();
  };

  return (
    <tr className="data">
      <td className="title">{mission.mission_name}</td>
      <td className="desc">{mission.description}</td>
      <td className="status">
        {' '}
        {mission.reserve ? (
          <p className="active">Active Member</p>
        ) : (
          <p className="inactive">Not A Member</p>
        )}
      </td>
      <td>
        {' '}
        {mission.reserve ? (
          <button type="button" className="leave" onClick={() => handleLeaving()}>
            Leave Mission
          </button>
        ) : (
          <button type="button" className="join" onClick={() => handleJoining()}>
            Join mission
          </button>
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
    reserve: PropTypes.bool,
  }).isRequired,
};

export default MissionsPage;
