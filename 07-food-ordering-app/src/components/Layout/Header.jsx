import classNames from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCardButton from './HeaderCardButton';

const Header = (props) => {
  return (
    <>
      <header className={classNames.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div className={classNames['main-image']}>
        <img src={mealsImage} alt="buffet" />
      </div>
    </>
  );
};

export default Header;
