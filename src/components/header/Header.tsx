import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link to='/' className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.options}>
        <Link to='/shop' className={styles.option}>
          SHOP
        </Link>
        <Link to='/shop' className={styles.option}>
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
