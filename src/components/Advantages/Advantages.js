import './Advantages.css';
import advatagesSvg from '../../assets/images/advatagessvg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

function Advantages() {
  return (
    <section className="advantages" id="advantages">
      <div className="advantages-container">
        <h2>Наши преимущества</h2>
        <div className="advantages-slider-container">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView="auto"
            grabCursor={true}
            freeMode={true}
            className="advantages-slider"
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
            <SwiperSlide className="advantages-slider-item">
              <p>06</p>
              <h3>Техническая поддержка</h3>
              <p>Оперативная помощь и консультации по всем вопросам использования системы</p>
              <img src={advatagesSvg} alt="" />
            </SwiperSlide>
            <SwiperSlide className="advantages-slider-item">
              <p>07</p>
              <h3>Гибкая интеграция</h3>
              <p>Легкое внедрение наших решений в существующую инфраструктуру вашего бизнеса</p>
              <img src={advatagesSvg} alt="" />
            </SwiperSlide>
            <SwiperSlide className="advantages-slider-item">
              <p>08</p>
              <h3>Масштабируемость</h3>
              <p>Возможность расширения функционала системы по мере роста вашего бизнеса</p>
              <img src={advatagesSvg} alt="" />
            </SwiperSlide>
            <SwiperSlide className="advantages-slider-item hidden-slide">
              <p>09</p>
              <h3>Безопасность данных</h3>
              <p>Надежная защита и конфиденциальность всей обрабатываемой информации</p>
              <img src={advatagesSvg} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Advantages; 