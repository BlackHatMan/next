import Image from 'next/image';
import Link from 'next/link';
import panda from '../public/panda.jpg';
import Triangle from '../public/triangle.svg';
import Dollar from '../public/dollar.svg';
import style from './slide.module.scss';

export default function Slide(props) {
  return (
    <div className={props.isActive ? [style.active, style.slide].join(' ') : style.slide}>
      <Image src={panda} fill={true} alt="panda" />
      <div className={style.slideContent}>
        <p>Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.</p>
        <div className={style.wrapLinks}>
          <Link href="/">
            <label className={style.ring}>
              <Triangle />
            </label>
            <label className={style.watch}>Watch online</label>
          </Link>
          <Link href="/">
            <label className={style.ring}>
              <Dollar />
            </label>
            <label className={style.watch}>Donate</label>
          </Link>
        </div>
      </div>
    </div>
  );
}
