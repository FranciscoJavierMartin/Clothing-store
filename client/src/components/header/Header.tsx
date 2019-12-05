import React from 'react';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { seletcCartHidden } from '../../store/cart/cartSelectors';
import { selectCurrentUser } from '../../store/user/userSelectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { shopPath, signInPath } from '../../constansts/routesName';
import { useSelector, useDispatch } from 'react-redux';
import { IGlobalState } from '../../interfaces/states';
import { FirebaseUser } from '../../interfaces/customTypes';
import * as userActions from '../../store/user/userActions';
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
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to={shopPath}>SHOP</OptionLink>
        <OptionLink to={shopPath}>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink
            as='div'
            onClick={() => dispatch(userActions.signOutStart())}
          >
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
