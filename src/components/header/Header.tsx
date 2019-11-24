import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import styles from './Header.module.scss';
import { shopPath, signInPath } from '../../constansts/routesName';

interface IHeaderProps {
  currentUser?: firebase.User;
}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  return (
    <div className={styles.header}>
      <Link to='/' className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.options}>
        <Link to={shopPath} className={styles.option}>
          SHOP
        </Link>
        <Link to={shopPath} className={styles.option}>
          CONTACT
        </Link>
        {
          props.currentUser ?
          <div className={styles.option} onClick={() => auth.signOut()}>
            SIGN OUT
          </div>:
          <Link className={styles.option} to={signInPath}>
            SIGN IN
          </Link>
        }
      </div>
    </div>
  );
};

export default Header;
