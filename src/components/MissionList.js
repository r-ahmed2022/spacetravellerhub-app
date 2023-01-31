import React from 'react'
import EachMission from './EachMission';

const MissionList =(props) => {
    const {missions} = props;

  return (
    <div>{missions.map((mission) => (
      <EachMission key={mission} mission = {mission} />
      
    ))}
    </div>
  )
}

export default MissionList