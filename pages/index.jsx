import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '../components/button/Button';
import { useRouter } from 'next/router';
import { Pagination, Scrollbar } from 'swiper';
import Head from 'next/head';
import Link from 'next/link';
import Slide from '../components/Slide';
import iconPlay from '../public/play-btn.svg';
import plug from '../public/Plug.png';
import { srcImageSlides, routes } from '../data/sourse';

import 'swiper/css';
import 'swiper/scss/pagination';

import style from '../styles/welcome.module.scss';
import Image from 'next/image';

export default function Home() {
  const item = Array(2).fill(srcImageSlides).flat();
  const router = useRouter();

  return (
    <main className={style.main}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={style.header}>
        <div className={style.logo}>
          <h1>ZOO</h1>
          <span>online</span>
        </div>
        <nav className={style.navigation}>
          {routes.map((el, i) => {
            return (
              <Link key={i} href={el.url} className={router.asPath === el.url ? style.active : ''}>
                {el.title}
              </Link>
            );
          })}
        </nav>
        <div className={style.theme}>
          <Image src={plug} alt="plug" />
        </div>
      </header>
      <div className={style.wrapper}>
        <div className={style.title}>
          <p>
            Watch your favorite <br /> animal online
          </p>
          <Button startIcon={iconPlay}>Watch online</Button>
        </div>
        <div className={style.swContainer}>
          {
            <Swiper
              modules={[Scrollbar, Pagination]}
              initialSlide={1}
              slidesPerView={4.5}
              centeredSlides
              spaceBetween={0}
              slideToClickedSlide
              autoHeight={true}
              height={480}
              pagination={{
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                  return (
                    '<span class="' + currentClass + '"></span>' + '/' + '<span class="' + totalClass + '"></span>'
                  );
                },
              }}
              scrollbar={{ hide: false, draggable: true, dragSize: 30 }}
            >
              {item.map((path, i) => {
                return (
                  <SwiperSlide key={i + path.name}>
                    <Slide path={path} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          }
        </div>
      </div>
    </main>
  );
}
