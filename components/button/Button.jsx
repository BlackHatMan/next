import style from './button.module.scss';

export const Button = ({ children, startIcon }) => {
  const icon = startIcon();
  return (
    <button className={style.button}>
      <div className={style.wrapper}>
        {icon}
        {children}
      </div>
    </button>
  );
};
