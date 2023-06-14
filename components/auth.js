import classes from "./auth.module.css";
import { useRef } from "react";
import { useDispatch} from "react-redux";
import { authActions } from "../store";

const Auth = () => {

  const dispatch=useDispatch();

  const emailInputRef=useRef();
  const passwordInputRef=useRef();

  const loginHandler=(e)=>{
    e.preventDefault();

    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;

    if(enteredEmail.includes('@','.com') && enteredPassword.trim().length>6){
      dispatch(authActions.login());
    }
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailInputRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordInputRef}/>
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
