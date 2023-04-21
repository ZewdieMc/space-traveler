import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../redux/dragons/dragonsSlice';
import DragonPage from './DragonsPage';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);
  const error = useSelector((state) => state.dragons.error);
  const isLoading = useSelector((state) => state.dragons.isLoading);

  useEffect(() => {
    if (dragons.length === 0) dispatch(fetchDragons());
  }, [dispatch, dragons.length]);

  return (
    <div className="dragon-list">
      {error && <p>Error Loading dragons</p>}
      {dragons
        && dragons.map((dragon) => <DragonPage key={dragon.id} dragon={dragon} />)}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Dragons;
