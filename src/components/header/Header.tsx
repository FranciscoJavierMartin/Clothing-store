import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { auth } from '../../firebase/firebase.utils';
import { seletcCartHidden } from '../../store/selectors/cartSelectors';
import { selectCurrentUser } from '../../store/selectors/userSelectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { shopPath, signInPath } from '../../constansts/routesName';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../interfaces/states';
import { FirebaseUser } from '../../interfaces/customTypes';
import styles from './Header.module.scss';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const currentUser = useSelector<IGlobalState, FirebaseUser>(
    selectCurrentUser
  );
  const hidden = useSelector<IGlobalState, boolean>(seletcCartHidden);

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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
