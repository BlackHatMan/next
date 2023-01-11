import Head from 'next/head';
import style from '../styles/login.module.scss';

export default function Login() {
  return (
    <>
      <div className={style.container}>
        <div className={style.wrapper}>
          <form className={style.form}>
            <h1>Login</h1>
            <div className={style.wrap_input}>
              <span>Username</span>
              <input type="text" title="user" />
            </div>
            <div className={style.wrap_input}>
              <span>Password</span>
              <input type="text" title="user" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
