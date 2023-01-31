import React from 'react';
import { useDispatch } from 'react-redux';
import { JOIN_MISSION } from '../redux/Missions/mission';

/* eslint-disable react/prop-types */
const EachMission = (props) => {
  const dispatch = useDispatch();
  const { mission } = props;
  const setReserve = (mission) => {
    dispatch(JOIN_MISSION(mission.mission_id));
  };
  return (
    <tr>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td><span className={!mission.reserved ? 'member-badge' : 'non-member-badge'}>{mission.reserved ? 'NOT A MEMBER ' : 'ACTIVE MEMBER'}</span></td>
      <td><button type="button" className="active" onClick={() => setReserve(mission)}>{mission.reserved ? 'Join Mission' : 'Leave Mission'}</button></td>
    </tr>

  );
};

export default EachMission;
