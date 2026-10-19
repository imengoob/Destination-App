import React from 'react';
import DestinationList from './DestinationList';

function Destinations({ destinations, text, rating }) {
  return (
    <div>
      <DestinationList
        destinations={destinations}
        text={text}
        rating={rating}
      />
    </div>
  );
}

export default Destinations;
