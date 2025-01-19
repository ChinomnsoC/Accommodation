"use client";

import styles from './layout.module.css'; // Create this CSS module for layout styles
import { ReactNode } from 'react';
import Image from "next/image";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles['page-container']}>
      <header className={styles.header}>
        <h1 className={styles['header-title']}>ShortNest</h1>
        <nav className={styles['header-nav']}>
          <button className={styles['nav-link']}>About</button>
          <button className={styles['nav-link']}>Search</button>
          <button className={styles['nav-link']}>Contact</button>
        </nav>
      </header>

      <main className={styles['main-content']} style={{padding: 0}}>
        {children}
      </main>

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
};

export default Layout;
