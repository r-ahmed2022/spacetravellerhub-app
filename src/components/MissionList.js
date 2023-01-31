import React from 'react';
import EachMission from './EachMission';
/* eslint-disable react/prop-types */
const MissionList = (props) => {
  const { missions } = props;
  return (
    <table>
      <thead>
        <tr className="theader">
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>.</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <EachMission key={mission.mission_id} mission={mission} />
        ))}
      </tbody>

    </table>
  );
};

export default MissionList;
