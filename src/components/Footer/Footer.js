import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.myFooter}>
      NSU 2020 <a href="mailto:andrey.bocharnikov@gmail.com">E-mail</a>
    </div>
  );
}

export default Footer;