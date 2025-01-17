"use client";

import { useRouter } from 'next/navigation';
import styles from '../page.module.css';

const PrivateAccommodation = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Private Accommodation Rooms</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.searchButton} onClick={() => handleNavigation('/ensuite-rooms')}>
          Ensuite Rooms
        </button>
        <button className={styles.searchButton} onClick={() => handleNavigation('/flats')}>
          Flats
        </button>
        <button className={styles.searchButton} onClick={() => handleNavigation('/group-rooms')}>
          Group Rooms
        </button>
      </div>
    </div>
  );
};

export default PrivateAccommodation;
