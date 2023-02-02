import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const { list } = useSelector((state) => state?.rocket);
  const filterRoc = list.filter((obj) => obj.reserved === false);
  const rocketBookings = filterRoc?.map((rocket) => (<li className="item" key={rocket.id}>{rocket.name}</li>));

  const { missionList } = useSelector((state) => state?.mission);
  const filter = missionList.filter((obj) => obj.reserved === false);
  const missionBookings = filter?.map((mission) => (<li className="item" key={mission.mission_id}>{mission.mission_name}</li>));

  return (
    <div className="bookings">
      <div className="rocket-bookings">
        <h1>My Missions</h1>
        <ul className="bookings-list">
          {missionBookings}
        </ul>
      </div>
      <div className="mission-bookings">
        <h1>My Rockets</h1>
        <ul className="bookings-list">
          {rocketBookings}
        </ul>
      </div>
    </div>
  );
}
