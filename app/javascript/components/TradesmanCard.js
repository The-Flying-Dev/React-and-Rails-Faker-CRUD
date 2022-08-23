import React from "react";
import { Link } from 'react-router-dom';

//destructuring the props, to show each tradesman
function TradesmanCard({tradesman: {id, name, avatar}, onDelete}) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={avatar} alt={name} />
      <Link to={`/tradesmen/${id}`}>View Jobs</Link>
      <span><button onClick={() => onDelete(id)}>Delete</button></span>
    </div>
  );
}

export default TradesmanCard;