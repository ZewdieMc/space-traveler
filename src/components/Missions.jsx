import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/missions/missionsSlice';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((msn) => (
            <tr key={msn.id}>
              <td>{msn.name}</td>
              <td>{msn.description}</td>
              <td>Not Member</td>
              <td>Join Missions</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
