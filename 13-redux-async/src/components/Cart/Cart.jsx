import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';

import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart{cartItems.length === 0 ? ' Is Empty' : ''}</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={`cartItem-${item.id}`} item={item} />
        ))}
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
      </ul>
    </Card>
  );
};

export default Cart;
