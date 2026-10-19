import React from 'react';
import DestinationCard from './DestinationCard';

function DestinationList({ destinations, text = "", rating = "all" }) {
  return (
    <div className="parent">
      {destinations
        .filter((el) =>
          el.title.toLowerCase().includes(text.toLowerCase())
        )
        .filter((el) =>
          rating === "all" || el.rating === Number(rating)
        )
        .map((el) => (
          <DestinationCard key={el.id} el={el} />
        ))}
    </div>
  );
}

export default DestinationList;
