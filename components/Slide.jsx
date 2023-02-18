import { useSwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

import panda from '../public/panda.webp';
import Triangle from '../public/triangle.svg';
import Dollar from '../public/dollar.svg';

import style from './slide.module.scss';

export default function Slide() {
  const isActive = useSwiperSlide().isActive;
  return (
    //<div className={isActive ? `${style.container} ${style.active}` : `${style.container}`}>
    <div className={style.container}>
      <Image src={panda} fill={true} alt="panda" />
      {isActive && (
        <div className={style.content}>
          <p>Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.</p>
          <div className={style.wrapper}>
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
      )}
    </div>
  );
}
