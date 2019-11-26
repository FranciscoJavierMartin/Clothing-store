import React from 'react';
import styles from './CartIcon.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../store/actions/cartActions';
import { ReactComponent as ShopppingIcon } from '../../assets/shopping-bag.svg';
import { IGlobalState } from '../../interfaces/states';
import { selectCartItemsCount } from '../../store/selectors/cartSelectors';

const CartIcon: React.FC = () => {
  const dispatch = useDispatch();
  const numberOfItemsInCart = useSelector<IGlobalState, number>(
    selectCartItemsCount
  );

  return (
    <div
      className={styles.cartIcon}
      onClick={() => dispatch(cartActions.toggleCartHidden())}
    >
      <ShopppingIcon className={styles.shoppingIcon} />
      <span className={styles.itemCount}>
        {numberOfItemsInCart > 9 ? '+9' : numberOfItemsInCart}
      </span>
    </div>
  );
};

export default CartIcon;
