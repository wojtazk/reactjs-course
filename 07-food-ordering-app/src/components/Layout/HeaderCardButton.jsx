import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classNames from './HeaderCardButton.module.css';

const HeaderCardButton = (props) => {
  const [btnBump, setBtnBump] = useState(false);

  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce(
    (total, item) => total + item.amount,
    0
  );

  const btnClasses = `${classNames.button} ${btnBump ? classNames.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) return;
    setBtnBump(true);

    const timer = setTimeout(() => setBtnBump(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classNames.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classNames.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
