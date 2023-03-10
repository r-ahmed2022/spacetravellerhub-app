import React from 'react';
import { useSelector } from 'react-redux';
import MissionList from '../components/MissionList';

const Mission = () => {
  const { missionList } = useSelector((state) => state?.mission);

  return (
    <div className="mission">
      <MissionList missions={missionList} />
    </div>
  );
};

export default Mission;
