import Head from 'next/head';
import style from '../styles/welcome.module.scss';
import Slide from '../components/Slide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default function Home() {
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
              createElements
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <Slide />
              </SwiperSlide>
              <SwiperSlide>
                <Slide />
              </SwiperSlide>
              <SwiperSlide>
                <Slide />
              </SwiperSlide>
              <SwiperSlide>
                <Slide />
              </SwiperSlide>
              <SwiperSlide>
                <Slide />
              </SwiperSlide>
              <SwiperSlide>
                <Slide />
              </SwiperSlide>
            </Swiper>
          }
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
