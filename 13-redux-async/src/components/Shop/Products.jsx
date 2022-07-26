import ProductItem from './ProductItem';
import classes from './Products.module.css';

import { useSelector } from 'react-redux';

const Products = (props) => {
  const productsList = useSelector((state) => state.products.products);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsList.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
        {/* <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        /> */}
      </ul>
    </section>
  );
};

export default Products;
