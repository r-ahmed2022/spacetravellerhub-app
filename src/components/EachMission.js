import React from 'react';
import { useDispatch } from 'react-redux';
import { JOIN_MISSION } from '../redux/Missions/mission';

const EachMission = (props) => {
  const dispatch = useDispatch();
  const { mission } = props;
  const setReserve = (mission) => {
    dispatch(JOIN_MISSION(mission.mission_id));
  };
  return (
    <tr>
      <td className="mission-name">{mission.mission_name}</td>
      <td className="mission-dscrp">{mission.description}</td>
      <td className="member-table"><p className={!mission.reserved ? 'member' : 'non-member'}>{mission.reserved ? 'NOT A MEMBER ' : 'ACTIVE MEMBER'}</p></td>
      <td className="member-table"><button type="button" className={mission.reserved ? 'jion-mission' : 'leave-mission'} onClick={() => setReserve(mission)}>{mission.reserved ? 'Join Mission' : 'Leave Mission'}</button></td>
    </tr>

  );
};

export default EachMission;
