import React, { useContext } from 'react';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { shopPath, signInPath } from '../../constansts/routesName';
import CurrentUserContext from '../../contexts/current-user/currentUserContext';
import { CartContext } from '../../provider/cart/cartProvider';
import { auth } from '../../firebase/firebase.utils';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './Header.styles';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to={shopPath}>SHOP</OptionLink>
        <OptionLink to={shopPath}>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
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
