import { createContext } from 'react';
import { ICartState } from '../../interfaces/states';

interface ICartContext {
  hidden: boolean;
  toggleHidden: () => void;
};

const CartContext = createContext<ICartContext>({
  hidden: true,
  toggleHidden: () => {}
});

export default CartContext;