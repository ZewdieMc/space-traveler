import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Profile() {
  const JoinedMissions = useSelector((state) => {
    const { missions } = state.missions;
    return missions.filter((mission) => mission.reserved);
  });

  return (
    <div className="profile-wrapper">
      <div>
        <h4>My Missions</h4>
        <Card style={{ width: '18rem' }}>
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
      <div>
        <h3>My Rockets</h3>
      </div>
    </div>
  );
}

export default Profile;
