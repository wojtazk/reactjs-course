import classNames from './Card.module.css';

const Card = (props) => {
  return <div className={classNames.card}>{props.children}</div>;
};

export default Card;
