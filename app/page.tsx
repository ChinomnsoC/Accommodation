"use client";

import styles from './page.module.css';
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleSearchClick = () => {
    router.push('/private-accommodation');
  };

  return (
    <div className={styles['page-container']}>
      {/* Header/Navigation */}
      <header className={styles.header}>
        <h1 className={styles['header-title']}>ShortNest</h1>
        <nav className={styles['header-nav']}>
          <button className={styles['nav-link']}>About</button>
          <button className={styles['nav-link']} onClick={handleSearchClick}>Search</button>
          <button className={styles['nav-link']}>Contact</button>
        </nav>
      </header>

      <main className={styles['main-content']} style={{padding: 0}}>
        {/* Banner Section */}
        <div className={styles.bannerSection}>
          <Image
            src="/banners.jpg"
            alt="Private Room Banner"
            fill
            className={styles.bannerImage}
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
          </div>
        </div>

        {/* Search Button */}
        <button className={styles.searchSection} onClick={handleSearchClick}>
          <div className={styles.searchImageContainer}>
            <Image
              src="/private-accom.jpg"
              alt="Start Your Search"
              fill
              className={styles.searchImage}
            />
            <div className={styles.searchOverlay}>
              <span className={styles.searchText}>
                Start Your Search Here
              </span>
            </div>
          </div>
        </button>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerNav}>
            <button className={styles.navLink}>Locations</button>
            <button className={styles.navLink}>Contact Us</button>
          </div>
          
          <div className={styles.socialContainer}>
            <span className={styles.footerText}>Follow us on social media</span>
            <div className={styles.socialIcons}>
              {/* Social Media Icons */}
              <a href="#" className={styles.navLink}>
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className={styles.socialIcon}
                />
              </a>
              <a href="#" className={styles.navLink}>
                <Image
                  src="/twitter.webp"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className={styles.socialIcon}
                />
              </a>
              <a href="#" className={styles.navLink}>
                <Image
                  src="/youtube.webp"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className={styles.socialIcon}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}