import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Head from 'next/head';
import Link from 'next/link';
import Slide from '../components/Slide';

import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import style from '../styles/welcome.module.scss';
import { useRouter } from 'next/router';

const routes = [
  {
    title: 'About',
    url: '/',
  },
  {
    title: 'Zoos',
    url: 'zoos',
  },
  {
    title: 'Map',
    url: 'map',
  },
  {
    title: 'Contact Us',
    url: 'contact',
  },
  {
    title: 'Design',
    url: 'design',
  },
];

export default function Home() {
  const item = new Array(10).fill('1');
  const router = useRouter();
  console.log('🚀 ~ file: index.jsx:41 ~ Home ~ router', router);
  return (
    <main className={style.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={style.header}>
        <div className={style.logo}>
          <p>ZOO</p>
          <p className={style.status}>online</p>
        </div>
        <nav>
          {routes.map((el, i) => {
            return (
              <Link key={i} href={el.url} className={router.asPath === el.url ? 'active' : ''}>
                {el.title}
              </Link>
            );
          })}
        </nav>
        <div className="theme">toggle</div>
      </header>
      <h1>
        Watch your favorite <br /> animal online
      </h1>
      {
        <Swiper
          modules={[Pagination]}
          slidesPerView={4}
          initialSlide={1}
          centeredSlides
          watchSlidesProgress
          slideToClickedSlide
          grabCursor
          pagination={{ clickable: true, draggable: true, type: 'bullets' }}
        >
          {item.map((_, i) => {
            return (
              <SwiperSlide key={i}>
                <Slide />
              </SwiperSlide>
            );
          })}
        </Swiper>
      }
    </main>
  );
}
