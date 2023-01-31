import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import MissionList from "../components/MissionList"
import { getMissionAction } from '../redux/Missions/mission';



const Mission = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionAction());
  }, [dispatch]);

    const missionstore = useSelector((state) => state.mission);

  return (
    <div>
        <MissionList missions = {missionstore} />
    </div>
  )
}

export default Mission
