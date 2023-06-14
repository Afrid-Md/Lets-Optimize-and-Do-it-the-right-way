import classes from './header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';

const Header = () => {

  const dispatch=useDispatch();
  const userCurrentState=useSelector((state)=>state.auth.isAuthenticated);

  const logoutHandler=(e)=>{
    e.preventDefault();
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {userCurrentState && <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;