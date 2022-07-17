import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classNames from './HeaderCardButton.module.css';

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce(
    (total, item) => total + item.amount,
    0
  );
  return (
    <button className={classNames.button} onClick={props.onClick}>
      <span className={classNames.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classNames.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
