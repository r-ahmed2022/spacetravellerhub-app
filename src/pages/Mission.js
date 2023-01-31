import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionList from '../components/MissionList';
import { LIST_MISSIONS } from '../redux/Missions/mission';

const Mission = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LIST_MISSIONS());
  }, [dispatch]);

  const {list} = useSelector((state) => state?.mission);
  
 

  return (
    <div>
      <MissionList  missions={list} />
    </div>
  );
};

export default Mission;
