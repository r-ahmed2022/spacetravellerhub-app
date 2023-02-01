/* eslint-disable react/self-closing-comp */
import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const { list } = useSelector((state) => state?.rocket);
  const rocketBookings = list?.map((rocket) => {
    if (!rocket.reserved) {
      return (<li className="item" key={rocket.id}>{rocket.name}</li>);
    }
    return null;
  });

  const { missionList } = useSelector((state) => state?.mission);
  const missionBookings = missionList?.map((mission) => {
    if (!mission.reserved) {
      return (<li className="item" key={mission.mission_id}>{mission.mission_name}</li>);
    }
    return null;
  });

  return (
    <div className="bookings">
      <div className="rocket-bookings">
        <h1>Rocket bookings</h1>
        <ul className="bookings-list">
          {rocketBookings}
        </ul>
      </div>
      <div className="mission-bookings">
        <h1>Mission bookings</h1>
        <ul className="bookings-list">
          {missionBookings}
        </ul>
      </div>
    </div>
  );
}
