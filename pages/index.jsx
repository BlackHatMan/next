import Head from 'next/head';
import style from '../styles/welcome.module.scss';
import Slide from '../components/Slide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/scss/pagination';

export default function Home() {
  const item = new Array(10).fill('1');
  return (
    <div className="home-container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={style.container}>
          <h1>
            Watch your favorite <br /> animal online
          </h1>
          {
            <Swiper
              className={style.slider}
              modules={[Pagination]}
              spaceBetween={5}
              slidesPerView={4}
              initialSlide={1}
              centeredSlides
              watchSlidesProgress
              slideToClickedSlide
              pagination={{ clickable: true, draggable: true, type: 'fraction' }}
            >
              {item.map((_, i) => {
                return (
                  <SwiperSlide key={i}>
                    {({ isActive }) => {
                      return (
                        <div style={{ transform: isActive ? 'scale(1)' : 'scale(0.6)' }}>
                          <Slide />
                        </div>
                      );
                    }}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          }
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
