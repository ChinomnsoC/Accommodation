import React from 'react';
import { useRouter } from 'next/router';

export default function PrivateRooms() {
  const router = useRouter();

  const handleEnsuiteRoomsClick = () => {
    router.push('/ensuite-rooms');
  };

  const handleFlatsClick = () => {
    router.push('/flats');
  };

  return (
    <div>
      <button onClick={handleEnsuiteRoomsClick}>Ensuite Rooms</button>
      <button onClick={handleFlatsClick}>Flats</button>
    </div>
  );
}