import React, { useEffect, useState } from 'react';
import roomAvailabilityChecker from '../utils/room-availability-checker'

export default function EnsuiteRooms() {
  const [ensuiteRooms, setEnsuiteRooms] = useState([]);

  useEffect(() => {
    const fetchEnsuiteRooms = async () => {
      const availableRooms = await roomAvailabilityChecker('userId', 'ensuite');
      setEnsuiteRooms(availableRooms);
    };

    fetchEnsuiteRooms();
  }, []);

  return (
    <div>
      <h2>Ensuite Rooms</h2>
      {ensuiteRooms.map((room) => (
        <div key={room.id}>
          <h3>{room.name}</h3>
          <p>{room.description}</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
}