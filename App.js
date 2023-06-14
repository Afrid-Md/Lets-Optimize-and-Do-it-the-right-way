import { Fragment } from 'react';
import Counter from'./components/counter';
import Header from './components/header';
import Auth from './components/auth';
import { useSelector } from 'react-redux';


function App() {

  const userCurrentState=useSelector(state=> state.auth.isAuthenticated)

  return (
    <Fragment>
      <Header/>
      {!userCurrentState && <Auth/>}
      {userCurrentState && <Counter />}
    </Fragment>
  );
}

export default App;