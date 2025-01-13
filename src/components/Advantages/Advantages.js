import './Advantages.css';
import advatagesSvg from '../../assets/images/advatagessvg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Advantages() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '200px',
      duration: 1500,
      delay: 0,
      opacity: 0,
      mobile: true,
      reset: true
    });

    sr.reveal('.advantages h2', {
      origin: 'left',
      distance: '100px',
      duration: 1000,
    });

    sr.reveal('.advantages-slider-item', {
      interval: 200,
      scale: 0.9,
    });
  }, []);

  return (
    <section className="advantages" id="advantages">
      <div className="advantages-container">
        <h2>Наши преимущества</h2>
        <Swiper
          modules={[Navigation, Mousewheel]}
          spaceBetween={30}
          slidesPerView={4}
          mousewheel={true}
          
          loop={true}
          className="advantages-swiper"
        >
          <SwiperSlide className="advantages-slider-item">
            <p>01</p>
            <h3>Индивидуальный подход</h3>
            <p>Каждое наше решение разрабатывается с учетом уникальных особенностей вашего бизнеса.</p>
            <img src={advatagesSvg} alt="" />
          </SwiperSlide>
          <SwiperSlide className="advantages-slider-item">
            <p>02</p>
            <h3>Реальные результаты</h3>
            <p>Мы ориентируемся на практические результаты, которые можно измерить.</p>
            <img src={advatagesSvg} alt="" />
          </SwiperSlide>
          <SwiperSlide className="advantages-slider-item">
            <p>03</p>
            <h3>Комплексная экспертиза</h3>
            <p>Создание прототипа искусственного <br />интеллекта и проверка технологических гипотез</p>
            <img src={advatagesSvg} alt="" />
          </SwiperSlide>
          <SwiperSlide className="advantages-slider-item">
            <p>04</p>
            <h3>Продуктовое исследование</h3>
            <p>Формирование видения продукта и разработка технического задания</p>
            <img src={advatagesSvg} alt="" />
          </SwiperSlide>
          <SwiperSlide className="advantages-slider-item">
            <p>05</p>
            <h3>Продуктовое исследование</h3>
            <p>Формирование видения продукта и разработка технического задания</p>
            <img src={advatagesSvg} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Advantages;