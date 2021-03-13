import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.logoName}>Motif finder</div>
    </header>
  );
}

export default Header;