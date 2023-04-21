import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const error = useSelector((state) => state.rockets.error);
  const isLoading = useSelector((state) => state.rockets.isLoading);

  useEffect(() => {
    if (rockets.length === 0) dispatch(fetchRockets());
  }, [dispatch, rockets.length]);

  return (
    <div className="rocket-list">
      {error && <p>Error Loading rockets</p>}
      {rockets
        && rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Rockets;
