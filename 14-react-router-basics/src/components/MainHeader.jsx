import styles from './MainHeader.module.css';

import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/welcome">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
