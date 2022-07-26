import classes from './CartItem.module.css';

import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';

const CartItem = (props) => {
  const dispatchAction = useDispatch();

  const { id, title, quantity, price } = props.item;
  const totalAmount = quantity * price;

  const addToCartHandler = () =>
    dispatchAction(
      cartActions.addToCart({
        id,
        title,
        price,
        quantity: 1,
      })
    );

  const removeFromCartHandler = () =>
    dispatchAction(cartActions.removeFromCart(id));

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalAmount.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
