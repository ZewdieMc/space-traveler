import PropTypes from 'prop-types';

const MissionsPage = ({ mission }) => {
  const md = mission;
  return (
    <tr>
      <td className="title">
        {' '}
        {md.name}
        {' '}
      </td>
      <td className="desc">
        {' '}
        {md.description}
        {' '}
      </td>
      <td className="status">
        {(md.reserve ? <p className="active">Active Member</p> : <p className="inactive">Not A Member</p>)}
      </td>
      <td>
        {(md.reserve ? (
          <button type="button" className="leave" onClick>
            Leave Mission
          </button>
        ) : (
          <button type="button" className="join" onClick>
            Join mission
          </button>
        ))}
      </td>
    </tr>
  );
};

MissionsPage.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    reserve: PropTypes.bool,
  }).isRequired,
};

export default MissionsPage;
