import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import styles from './Header.module.scss';
import { shopPath, signInPath } from '../../constansts/routesName';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../interfaces/states';
import { FirebaseUser } from '../../interfaces/customTypes';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const currentUser = useSelector<IGlobalState, FirebaseUser>(
    (state: IGlobalState) => state.user.currentUser
  );

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
        {currentUser ? (
          <div className={styles.option} onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className={styles.option} to={signInPath}>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
