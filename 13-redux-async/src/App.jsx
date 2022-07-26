import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCartData,
  sendCartData,
} from './components/store/cartAsyncActions';
import { useEffect } from 'react';
import { notificationActions } from './components/store/notificationSlice';

let isInitial = true;

function App() {
  const dispatchAction = useDispatch();

  const toggleCart = useSelector((state) => state.cart.toggleCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.notification.notification);

  // fetch cart from DB
  useEffect(() => {
    dispatchAction(fetchCartData());
  }, [dispatchAction]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (!cart.changed) return;

    dispatchAction(sendCartData(cart.cartItems));

    const timeout = setTimeout(
      () => dispatchAction(notificationActions.hideNotification()),
      3000
    );

    return () => clearTimeout(timeout);
  }, [cart, dispatchAction]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggleCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
