import './Cases.css';
// import case1 from '../../assets/images/case1.png';
// import case2 from '../../assets/images/case2.png';
// import case3 from '../../assets/images/case3.png';
import cases1 from '../../assets/images/cases1.png';
import cases2 from '../../assets/images/cases2.png';
import cases3 from '../../assets/images/cases3.png';
import 'swiper/css';
import { Swiper } from 'swiper';
import 'swiper/css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Cases() {

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

    sr.reveal('.cases h2', {
      origin: 'left',
      distance: '100px',
      duration: 1000,
    });

    sr.reveal('.cases-swiper-wrapper', {
      scale: 0.9,
    });
  }, []);

  useEffect(() => {

    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      slidesPerView: 3,
      draggable: true,
      spaceBetween: 25,
      loop: true,
    });
    // return () => {
    //   if (swiper) swiper.destroy();
    // };
  }, []);


  return (
    <section className="cases" id="cases">
      <div className="cases-container">
        <h2>Кейсы</h2>
        <div className="swiper cases-swiper">
          <div className="swiper-wrapper cases-swiper-wrapper">
            <div className="swiper-slide cases-slider-item">
              <p>ПРОМЫШЛЕННОСТЬ</p>
              <h3>Анализ загруженности и фиксация <br/>реальных трудозатрат.</h3>
              <img src={cases1} alt="" />
              <button>Подробнее</button>
            </div>
            <div className="swiper-slide cases-slider-item">
              <p>ПРОМЫШЛЕННОСТЬ</p>
              <h3>Дефектоскопия на объектах с высоким <br/>темпом производства.</h3>
              <img src={cases2} alt="" />
              <button>Подробнее</button>
            </div>
            <div className="swiper-slide cases-slider-item">
              <p>ПРОМЫШЛЕННОСТЬ</p>
              <h3>Контроль внимания на рабочем месте и <br/>обеспечение безопасности во время <br/>движения или работы.</h3>
              <img src={cases3} alt="" />
              <button>Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cases; 