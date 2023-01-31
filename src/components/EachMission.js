import React from 'react'

const EachMission = (props) => {
    const {mission} = props;
  return (
    <tr>
    <td>{mission.mission_name}</td>
    <td>{mission.description}</td>
    <td>Germany</td>
    <td>G</td>
    </tr>
    
  )
}

export default EachMission