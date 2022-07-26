import { createSlice } from '@reduxjs/toolkit';

const productsList = [
  {
    id: 'product_1',
    title: 'Test',
    price: 6,
    description: 'This is a first product - amazing!',
  },
  {
    id: 'product_2',
    title: 'Bananas',
    price: 19,
    description: 'Extreamly not freash!',
  },
  {
    id: 'product_3',
    title: 'Almost new sandals',
    price: 87,
    description: 'Nothing betas socks & sandals',
  },
  {
    id: 'product_4',
    title: 'Open Source project',
    price: 99,
    description: "It's free and open source but you'll pay anyway",
  },
];

const productsSlice = createSlice({
  name: 'products',
  initialState: { products: productsList },

  reducers: {},
});

export default productsSlice.reducer;
