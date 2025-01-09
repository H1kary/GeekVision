import './Advantages.css';
import advatagesSvg from '../../assets/images/advatagessvg.svg';
import { useRef, useEffect } from 'react';

function Advantages() {
  const sliderRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    const slider = sliderRef.current;
    const preventScroll = (e) => {
      e.preventDefault();
    };

    slider.addEventListener('wheel', preventScroll, { passive: false });
    
    return () => {
      slider.removeEventListener('wheel', preventScroll);
    };
  }, []);

  const handleMouseDown = (e) => {
    isDown = true;
    const slider = sliderRef.current;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    sliderRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    isDown = false;
    sliderRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const slider = sliderRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const slider = sliderRef.current;
    slider.scrollLeft += e.deltaY;
  };

  return (
    <section className="advantages" id="advantages">
      <div className="advantages-container">
        <h2>Наши преимущества</h2>
        <div
          className="advantages-slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onWheel={handleWheel}
        >
          <div className="advantages-slider-item">
            <p>01</p>
            <h3>Индивидуальный подход</h3>
            <p>Каждое наше решение разрабатывается с учетом уникальных особенностей вашего бизнеса.</p>
            <img src={advatagesSvg} alt="" />
          </div>
          <div className="advantages-slider-item">
            <p>02</p>
            <h3>Реальные результаты</h3>
            <p>Мы ориентируемся на практические результаты, которые можно измерить.</p>
            <img src={advatagesSvg} alt="" />
          </div>
          <div className="advantages-slider-item">
            <p>03</p>
            <h3>Комплексная экспертиза</h3>
            <p>Создание прототипа искусственного <br/>интеллекта и проверка технологических гипотез</p>
            <img src={advatagesSvg} alt="" />
          </div>
          <div className="advantages-slider-item">
            <p>04</p>
            <h3>Продуктовое исследование</h3>
            <p>Формирование видения продукта и разработка технического задания</p>
            <img src={advatagesSvg} alt="" />
          </div>
          <div className="advantages-slider-item">
            <p>05</p>
            <h3>Продуктовое исследование</h3>
            <p>Формирование видения продукта и разработка технического задания</p>
            <img src={advatagesSvg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages; 