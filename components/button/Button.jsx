import SvgPlay from '../../public/play-btn.svg';
import style from './button.module.scss';

export const Button = ({ children, icon }) => {
  return (
    <button className={style.button}>
      <div className={style.wrapper}>
        {icon && <SvgPlay />}
        {children}
      </div>
    </button>
  );
};
