/* eslint-disable react/self-closing-comp */
import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const { list } = useSelector((state) => state?.rocket);
  // const { list: mission } = useSelector((state) => state?.mission);
  const rocketBookings = list?.map((rocket) => {
    if (!rocket.reserved) {
      return (<li className="item" key={rocket.id}>{rocket.name}</li>);
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

        </ul>
      </div>
    </div>
  );
}
