import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '../components/button/Button';
import { useRouter } from 'next/router';
import { Pagination, Scrollbar } from 'swiper';
import Head from 'next/head';
import Link from 'next/link';
import Slide from '../components/Slide';

import 'swiper/css'; /*
import 'swiper/scss/pagination';
import 'swiper/css/scrollbar'; */

import style from '../styles/welcome.module.scss';

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

  /*  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  }; */
  return (
    <main className={style.main}>
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
      <div className={style.wrapper}>
        <div className={style.title}>
          <h1>
            Watch your favorite <br /> animal online
          </h1>
          <Button icon>Watch online</Button>
        </div>

        {
          <Swiper
            modules={[Scrollbar]}
            slidesPerView={4}
            centeredSlides
            spaceBetween={30}
            slideToClickedSlide
            //pagination={pagination}
            scrollbar={{ hide: false, draggable: true, dragSize: 30 }}
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
      </div>
    </main>
  );
}
