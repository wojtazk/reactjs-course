import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const newItems = [...state.items];
      newItems[existingCartItemIndex].amount += action.item.amount;

      updatedItems = [...newItems];
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  ////////////////////////////////
  if (action.type === 'REMOVE_ITEM') {
    let updatedItems = [...state.items];
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const updatedTotalAmount =
      state.totalAmount - updatedItems[existingItemIndex].price;

    updatedItems[existingItemIndex].amount -= 1;

    if (updatedItems[existingItemIndex].amount <= 0)
      updatedItems.splice(existingItemIndex, 1);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

//////////////////////////////
const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
