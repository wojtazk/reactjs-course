import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import { useContext, useEffect, useState } from 'react';

import classNames from './Cart.module.css';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';

const Cart = (props) => {
  const [checkout, setCheckout] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [submittingError, setSubmittingError] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  useEffect(() => {
    if (!hasItems) setCheckout(false);
  }, [hasItems]);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setCheckout(true);
  };

  const submitOrderHandler = async (orderDetails) => {
    try {
      setSubmitting(true);
      const response = await fetch(
        'https://test-app-806e6-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
        {
          method: 'POST',
          body: JSON.stringify({
            ...orderDetails,
            orderedMeals: cartCtx.items,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to place your order!');
      }

      setSubmitting(false);
      setDidSubmit(true);

      cartCtx.resetItems();
    } catch (err) {
      setSubmittingError(err.message);
    }
  };

  const cartModalContent = (
    <>
      {hasItems && (
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
      )}

      <div className={classNames.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {checkout && (
        <CheckoutForm
          onCancel={props.onClose}
          onOrderSubmit={submitOrderHandler}
        />
      )}

      {!checkout && (
        <div className={classNames.actions}>
          <button className={classNames['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classNames.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </>
  );

  const isSubmittingModalContent = (
    <>
      <p>Sending order details...</p>
      <div className={classNames.actions}>
        <button className={classNames.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );
  const didSubmitModalContent = (
    <>
      <p>Successfully placed the order!</p>
      <div className={classNames.actions}>
        <button className={classNames.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );
  const errorModalContent = (
    <>
      <p>Something Went wrong ({submittingError})</p>
      <div className={classNames.actions}>
        <button className={classNames.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!submitting && !didSubmit && cartModalContent}
      {submitting && !submittingError && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
      {submittingError && errorModalContent}
    </Modal>
  );
};

export default Cart;
