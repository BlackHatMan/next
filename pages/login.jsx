import Head from 'next/head';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import style from '../styles/login.module.scss';

export default function Login() {
  return (
    <>
      <div className={style.container}>
        <div className={style.wrapper}>
          <form className={style.form}>
            <h1>Login</h1>

            <div className={style.wrap_input}>
              <span className={style.title}>Username</span>
              <input type="text" placeholder="type your username" />
              <span className={style.focus_input}>
                <Person2OutlinedIcon />
              </span>
            </div>

            <div className={style.wrap_input}>
              <span className={style.title}>Password</span>
              <input type="password" placeholder="type your password" />
              <span className={style.focus_input}>
                <LockOutlinedIcon />
              </span>
            </div>
            <div className={style.text_right}>
              <a className={style.title}>Forgot password?</a>
            </div>
            <div className={style.button_gradient}>
              <button type="submit">Login</button>
            </div>
            <div className={style.society}>
              <a href="/login">
                <FacebookOutlinedIcon style={{ color: 'darkblue' }} />
              </a>
              <a href="/login">
                <TwitterIcon color="primary" />
              </a>
              <a href="/login">
                <GoogleIcon color="error" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
