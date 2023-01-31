import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

export default function RocketList() {
  const { list } = useSelector((state) => state?.rocketslist);
  const rocketList = list?.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />);
  return (
    <div className="rocketlist">
      {rocketList}

    </div>
  );
}
