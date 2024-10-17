import React, { useEffect, useState } from 'react';
import {getBuildingsByCategory} from '../utils/room-availability-checker';

export default function Flats() {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    const fetchFlats = async () => {
      const availableRooms = await getBuildingsByCategory('userId', 'flat');
      setFlats(availableRooms);
    };

    fetchFlats();
  }, []);

  return (
    <div>
      <h2>Flats</h2>
      {flats}
      {/* {flats.map((room) => (
        <div key={room.id}>
          <h3>{room.name}</h3>
          <p>{room.description}</p>
          <button>Book Now</button>
        </div>
      ))} */}
    </div>
  );
}