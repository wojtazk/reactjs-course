import CartIcon from '../Cart/CartIcon';
import classNames from './HeaderCardButton.module.css';

const HeaderCardButton = (props) => {
  return (
    <button className={classNames.button}>
      <span className={classNames.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classNames.badge}>3</span>
    </button>
  );
};

export default HeaderCardButton;
