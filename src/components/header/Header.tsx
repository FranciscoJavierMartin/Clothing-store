import React from 'react';
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
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './Header.styles';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const currentUser = useSelector<IGlobalState, FirebaseUser>(
    selectCurrentUser
  );
  const hidden = useSelector<IGlobalState, boolean>(seletcCartHidden);

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to={shopPath}>SHOP</OptionLink>
        <OptionLink to={shopPath}>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink to={signInPath} onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to={signInPath}>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
