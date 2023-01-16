import Head from 'next/head';
import Image from 'next/image';
import panda from '../public/panda.jpg';
import style from '../styles/welcome.module.scss';

export default function Home() {
  return (
    <div className="home-container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={style.wrapWelcome}>
          <h1>
            Watch your favorite <br /> animal online
          </h1>
          <div className={style.wrapSlider}>
            <button>Watch Online</button>
            <div className={style.slider}>
              <figure>
                <Image src={panda} fill={true} alt="panda" />
                <figcaption>
                  <p>Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.</p>
                  <button>Watch online</button>
                  <button>Donate</button>
                </figcaption>
              </figure>
              <figure>
                <Image src={panda} fill={true} alt="panda" />
                <figcaption>
                  <p>Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.</p>
                  <button>Watch online</button>
                  <button>Donate</button>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}