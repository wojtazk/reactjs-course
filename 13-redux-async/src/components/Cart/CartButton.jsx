import classes from './CartButton.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';

const CartButton = (props) => {
  const dispatchAction = useDispatch();
  const toggleCartHandler = () => dispatchAction(cartActions.toggle());

  const cartItems = useSelector((state) =>
    state.cart.cartItems.reduce((total, current) => total + current.quantity, 0)
  );

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default CartButton;
