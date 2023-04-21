import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Profile() {
  const JoinedMissions = useSelector((state) => {
    const { missions } = state.missions;
    return missions.filter((mission) => mission.reserved);
  });

  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-wrapper">
      <div style={{ width: '100%' }}>
        <h4>My Missions</h4>
        <Card style={{ width: '100%' }}>
          {JoinedMissions.length ? JoinedMissions.map((mission) => (
            <ListGroup key={mission.id} variant="flush">
              <ListGroup.Item>{mission.mission_name}</ListGroup.Item>
            </ListGroup>
          ))
            : (
              <ListGroup>
                <ListGroup.Item>No Missions Joined</ListGroup.Item>
              </ListGroup>
            )}
        </Card>
      </div>
      <div style={{ width: '100%' }}>
        <h4>My Rockets</h4>
        <Card style={{ width: '100%' }}>
          {reservedRockets.length ? reservedRockets.map((rocket) => (
            <ListGroup key={rocket.id} variant="flush">
              <ListGroup.Item>{rocket.name}</ListGroup.Item>
            </ListGroup>
          ))
            : (
              <ListGroup>
                <ListGroup.Item>You have no reserved rockets</ListGroup.Item>
              </ListGroup>
            )}
        </Card>
      </div>
    </div>
  );
}

export default Profile;
