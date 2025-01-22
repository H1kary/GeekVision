import './Advantages.css';
import advatagesSvg from '../../assets/images/advatagessvg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

function Advantages() {
  const [isVertical, setIsVertical] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '200px',
      duration: 1500,
      delay: 0,
      opacity: 0,
      mobile: false,
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
      mobile: false,
    });
  }, []);

  return (
    <section className="advantages" id="advantages">
      <div className="advantages-container">
        <h2>Наши преимущества</h2>
        <Swiper
          modules={[Navigation, Mousewheel]}
          spaceBetween={30}
          slidesPerView={isVertical ? 5 : 4}
          direction={isVertical ? 'vertical' : 'horizontal'}
          mousewheel={true}
          loop={isVertical ? false : true}
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
            <h3>Интеграция в бизнес процессы</h3>
            <p className="advantages-slider-item-text">Мы помогаем интегрировать разработанное решение в ваш бизнес, производим настройку оборудования, проводим обучение сотрудников.</p>
            <img src={advatagesSvg} alt="" />
          </SwiperSlide>
          <SwiperSlide className="advantages-slider-item">
            <p>04</p>
            <h3>Продуктовое исследование</h3>
            <p>Формируем видение продукта и разрабатываем техническое задание</p>
            <img src={advatagesSvg} alt="" />
          </SwiperSlide>
          <SwiperSlide className="advantages-slider-item">
            <p>05</p>
            <h3>Сильная команда</h3>
            <p>Наша команда состоит из сильных технических специалистов, за плечами которых опыт работы над самыми сложными проектами</p>
            <img src={advatagesSvg} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Advantages;