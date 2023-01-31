import React from 'react'
import { useSelector, } from 'react-redux';
import MissionList from "../components/MissionList"



const Mission = () => {

    const missionstore = useSelector((state) => state.mission);

  return (
    <div>
        <MissionList missions = {missionstore} />
    </div>
  )
}

export default Mission
