"use client";

import { useRouter } from 'next/navigation';
import Layout from '../components/Layout';
import styles from '../components/layout.module.css'; // Ensure this path is correct
import Image from 'next/image';

const PrivateAccommodation = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Layout>
      <h2>Private Accommodation Rooms</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.searchButton} onClick={() => handleNavigation('/ensuite-rooms')}>
          <div className={styles.searchImageContainer}>
            <Image
              src="/private-room1.jpg"
              alt="Ensuite Rooms"
              className={styles.searchImage}
              width={300} // Set appropriate width
              height={200} // Set appropriate height
            />
            <span className={styles.searchText}>Ensuite Rooms</span>
          </div>
        </button>

        <button className={styles.searchButton} onClick={() => handleNavigation('/flats')}>
          <div className={styles.searchImageContainer}>
            <Image
              src="/private-room2.jpg"
              alt="Flats"
              className={styles.searchImage}
              width={300} // Set appropriate width
              height={200} // Set appropriate height
            />
            <span className={styles.searchText}>Flats</span>
          </div>
        </button>

        <button className={styles.searchButton} onClick={() => handleNavigation('/group-rooms')}>
          <div className={styles.searchImageContainer}>
            <Image
              src="/private-room3.jpg"
              alt="Group Rooms"
              className={styles.searchImage}
              width={300} // Set appropriate width
              height={200} // Set appropriate height
            />
            <span className={styles.searchText}>Group Rooms</span>
          </div>
        </button>
      </div>
    </Layout>
  );
};

export default PrivateAccommodation;
