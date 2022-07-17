import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import React, { useState } from 'react';
import CartContextProvider from './store/CartContextProvider';

function App() {
  const [cartIsVisible, setCasrIsVisible] = useState(false);

  const showCartHandler = () => {
    setCasrIsVisible(true);
  };

  const hideCartHandler = () => {
    setCasrIsVisible(false);
  };

  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
