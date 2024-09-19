import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import roomAvailabilityChecker from '../utils/room-availability-checker';

export default function Flats() {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    const fetchFlats = async () => {
      const availableRooms = await roomAvailabilityChecker('userId', 'flat');
      setFlats(availableRooms);
    };

    fetchFlats();
  }, []);

  return (
    <div>
      <h2>Flats</h2>
      {flats.map((room) => (
        <div key={room.id}>
          <h3>{room.name}</h3>
          <p>{room.description}</p>
          <Button variant="contained" color="primary">Book Now</Button>
        </div>
      ))}
    </div>
  );
}