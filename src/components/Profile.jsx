import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { reserveRocket } from '../redux/rockets/rocketsSlice';
import { reserveDragon } from '../redux/dragons/dragonsSlice';
import { joinMission } from '../redux/missions/missionsSlice';

function Profile() {
  const dispatch = useDispatch();
  const joinedMissions = useSelector((state) => {
    const { missions } = state.missions;
    return missions.filter((mission) => mission.reserved);
  });

  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const dragons = useSelector((state) => state.dragons.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);

  const handleRocketReservation = (id) => dispatch(reserveRocket(id));
  const handleDragonReservation = (id) => dispatch(reserveDragon(id));
  const handleJoiningMissions = (id) => dispatch(joinMission(id));

  return (
    <div className="profile-wrapper">
      <div style={{ width: '100%' }}>
        <h4>My Missions</h4>
        <Card style={{ width: '100%' }}>
          {joinedMissions.length ? joinedMissions.map((mission) => (
            <ListGroup key={mission.id} horizontal style={{ alignItems: 'center' }}>
              <ListGroup.Item style={{ width: '42%', border: 'none' }}>{mission.mission_name}</ListGroup.Item>
              <ListGroup.Item style={{ margin: '5px', border: 'none', width: '28%' }}>
                <Button
                  size="sm"
                  onClick={() => handleJoiningMissions(mission.id)}
                >
                  Leave Mission
                </Button>
              </ListGroup.Item>
              <ListGroup.Item style={{ width: '30%', border: 'none' }}>
                <a href={mission.wikipedia} rel="noreferrer" target="_blank">Read More</a>
              </ListGroup.Item>
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
            <ListGroup key={rocket.id} horizontal style={{ alignItems: 'center' }}>
              <ListGroup.Item style={{ width: '42%', border: 'none' }}>
                {rocket.name}
              </ListGroup.Item>
              <ListGroup.Item style={{ margin: '5px', border: 'none', width: '28%' }}>
                <Button
                  size="sm"
                  onClick={() => handleRocketReservation(rocket.id)}
                >
                  Cancel Reservation
                </Button>
              </ListGroup.Item>
              <ListGroup.Item style={{ width: '30%', border: 'none' }}>
                <a href={rocket.wikipedia} rel="noreferrer" target="_blank">Read More</a>
              </ListGroup.Item>
            </ListGroup>
          ))
            : (
              <ListGroup>
                <ListGroup.Item>You have no reserved rockets</ListGroup.Item>
              </ListGroup>
            )}
        </Card>
      </div>
      <div style={{ width: '100%' }}>
        <h4>My Dragons</h4>
        <Card style={{ width: '100%' }}>
          {reservedDragons.length ? reservedDragons.map((dragon) => (
            <ListGroup key={dragon.id} horizontal style={{ alignItems: 'center' }}>
              <ListGroup.Item style={{ width: '42%', border: 'none' }}>
                {dragon.name}
              </ListGroup.Item>
              <ListGroup.Item style={{ margin: '5px', border: 'none', width: '28%' }}>
                <Button
                  size="sm"
                  onClick={() => handleDragonReservation(dragon.id)}
                >
                  Cancel Reservation
                </Button>
              </ListGroup.Item>
              <ListGroup.Item style={{ width: '30%', border: 'none' }}>
                <a href={dragon.wikipedia} rel="noreferrer" target="_blank">Read More</a>
              </ListGroup.Item>
            </ListGroup>
          ))
            : (
              <ListGroup>
                <ListGroup.Item>You have no reserved dragons</ListGroup.Item>
              </ListGroup>
            )}
        </Card>
      </div>
    </div>
  );
}

export default Profile;
