import { useState, useEffect } from 'react';
import styles from './Login.module.css';
import Card from '../components/Card';
import Layout from '../components/Layout';

function Login() {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const [formIsValid, setFormIsValid] = useState(false);

   useEffect(()=>{
      setFormIsValid(
        email.includes('@') && password.trim().length >= 6
      );
   },[email,password]);

   const emailChangedHandler = (event) => {
      setEmail(event.target.value);
   }

   const passwordChangedHandler = (event) => {
      setPassword(event.target.value);
   }

   const submitHandler = (event) => {
      event.preventDefault();
      console.log(email);
      console.log(password);
   }

   return (
      <Layout>
         <Card>
            <form className={styles.login} onSubmit={submitHandler}>
               <h2>Log in!</h2>
               <label htmlFor="login_email">E-mail</label>
               <input
                        type="text"
                        id="login_email"
                        value={email}
                        onChange={emailChangedHandler}
               />
               <label htmlFor="login_password">Password</label>
               <input
                        type="password"
                        id="login_password"
                        value={password}
                        onChange={passwordChangedHandler}
               />
               <button type="submit" disabled={!formIsValid}>Login</button>
            </form>
         </Card>
      </Layout>
   );
}

export default Login;