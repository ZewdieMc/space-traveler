import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/missions/missionsSlice';
import MissionsPage from '../pages/MissionsPage';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  console.log(missions); // eslint-disable-line no-console
  return (
    <div className="wrapper">
      <table>
        <thead>
          <th>Mission</th>
          <th>Description</th>
          <th className="status">Status</th>
          <th> </th>
        </thead>
        <tbody>
          {missions && missions.map((mission) => (
            <MissionsPage key={mission.id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
