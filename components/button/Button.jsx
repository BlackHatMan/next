import style from './button.module.scss';

export const Button = ({ children, startIcon }) => {
  return (
    <button className={style.button}>
      <div className={style.wrapper}>
        {startIcon}
        {children}
      </div>
    </button>
  );
};
