import React from 'react';
import { useDispatch } from 'react-redux';
import { JOIN_ROCKET } from '../redux/Rockets/rocket';

export default function Rocket(props) {
  const dispatch = useDispatch();
  const { rocket } = props;
  const setReserve = (rocket) => {
    dispatch(JOIN_ROCKET(rocket.id));
  };
  return (
    <div className="rocket">
      <div className="rocket-img-div">
        <img className="rocket-img" src={rocket.flickr_images[0]} alt="pic" />
      </div>
      <div className="rocket-info">
        <h3>{rocket.name}</h3>
        <p>{rocket.description}</p>
        <span className={!rocket.reserved ? 'member-badge' : 'non-member-badge'}>{rocket.reserved ? ' ' : 'Reserved'}</span>
        <button type="button" className="active" onClick={() => setReserve(rocket)}>{rocket.reserved ? 'Reserve' : 'Cancel'}</button>
      </div>

    </div>
  );
}
