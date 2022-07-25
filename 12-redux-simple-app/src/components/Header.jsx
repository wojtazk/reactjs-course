import classes from './Header.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatchAction = useDispatch();

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuthenticated && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={dispatchAction.bind(null, authActions.logout())}>
                Logout
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
