import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';

const ProductItem = (props) => {
  const dispatchAction = useDispatch();
  const { title, price, description } = props;

  const addToCartHandler = () =>
    dispatchAction(
      cartActions.addToCart({
        id: props.id,
        title,
        price,
        quantity: 1,
      })
    );

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
