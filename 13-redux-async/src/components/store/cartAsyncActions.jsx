import { cartActions } from './cartSlice';
import { notificationActions } from './notificationSlice';

export const fetchCartData = () => async (dispatch) => {
  const fetchData = async () => {
    const response = await fetch(
      'https://test-app-806e6-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
    );

    if (!response.ok) throw new Error('Couldnt fetch cart data!');

    const data = await response.json();

    dispatch(cartActions.loadCart(data || []));
  };

  fetchData().catch((err) =>
    dispatch(
      notificationActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: err.message,
      })
    )
  );
};

//////////////////////////////////
export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      dispatch(
        notificationActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'sending cart data!',
        })
      );

      const response = await fetch(
        'https://test-app-806e6-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      // request failed
      if (!response.ok) {
        throw new Error('Sendind cart data failed!');
      }

      // request was successful
      dispatch(
        notificationActions.showNotification({
          status: 'success',
          title: 'Success!.',
          message: 'Successfully sent cart data!',
        })
      );
    };

    sendRequest().catch((err) =>
      dispatch(
        notificationActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: err.message,
        })
      )
    );
  };
};
