import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchMissions } from '../redux/missions/missionsSlice';
import MissionsPage from '../pages/MissionsPage';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) dispatch(fetchMissions());
  }, [dispatch, missions.length]);

  return (
    <div className="table-wrapper">
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions && missions.map((mission, index) => (
            <MissionsPage
              key={mission.id}
              mission={mission}
              index={index}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
