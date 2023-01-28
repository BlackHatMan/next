import Head from 'next/head';
import style from '../styles/welcome.module.scss';
import Slide from '../components/Slide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

export default function Home() {
  const item = new Array(10).fill('1');
  return (
    <div className="home-container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.container}>
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
    </div>
  );
}
