import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import { useContext } from 'react';

import classNames from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <Modal onClose={props.onClose}>
      <ul className={classNames['cart-items']}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          ></CartItem>
        ))}
      </ul>

      <div className={classNames.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classNames.actions}>
        <button className={classNames['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classNames.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
