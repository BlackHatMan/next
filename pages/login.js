import Head from 'next/head';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import style from '../styles/login.module.scss';

export default function Login() {
  return (
    <>
      <div className={style.container}>
        <div className={style.wrapper}>
          <form className={style.form}>
            <h1>Login</h1>
            <div className={style.wrapperInput}>
              <span>Username</span>
              <input type="text" placeholder="type your username" />
              <Person2OutlinedIcon />
            </div>
            <div className={style.wrapperInput}>
              <span>Password</span>
              <input type="password" placeholder="type your password" />
              <LockOutlinedIcon />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
