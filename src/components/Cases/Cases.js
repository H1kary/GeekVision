import './Cases.css';
import case1 from '../../assets/images/case1.png';
import case2 from '../../assets/images/case2.png';
import case3 from '../../assets/images/case3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

function Cases() {
  return (
    <section className="cases" id="cases">
      <div className="cases-container">
        <h2>Кейсы</h2>
        <div className="cases-slider-container">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView="auto"
            grabCursor={true}
            freeMode={true}
            className="cases-slider"
          >
            <SwiperSlide className="cases-slider-item">
              <h3>Анализ загруженности и фиксация реальных <br />трудозатрат.</h3>
              <img src={case1} alt="" />
              <p>Искусственный интеллект используется для автоматического контроля эффективности рабочих на <br />промышленном производстве. Камеры отслеживают движения и позволяют оценить реальную <br />эффективность работников</p>
            </SwiperSlide>
            <SwiperSlide className="cases-slider-item">
              <h3>Дефектоскопия на объектах с высоким <br />темпом производства.</h3>
              <img src={case2} alt="" />
              <p>Искусственный интеллект может быть использован для контроля качества продукции на <br />производственных линиях. Он анализирует наличие дефектов, неправильной геометрии или <br />несоответствия стандартам и уведомляет руководителей. <br /><br />Искусственный интеллект может быть использован для мониторинга состояние <br />промышленных станков, фиксируя износ деталей или наличие поломок.</p>
            </SwiperSlide>
            <SwiperSlide className="cases-slider-item">
              <h3>Контроль внимания на рабочем месте и <br />обеспечение безопасности во время <br />движения или работы.</h3>
              <img src={case3} alt="" />
              <p>Искусственный интеллект может быть эффективно использован для контроля усталости <br />работника. Он анализирует выражение лица, положение глаз и движения тела. При <br />обнаружении признаков усталости система автоматически уведомляет руководителей. Это <br />повышает безопасность на рабочем месте и снижает риск несчастных случаев.</p>
            </SwiperSlide>
            <SwiperSlide className="cases-slider-item hidden-case">
              <h3>Контроль внимания на рабочем месте и <br />обеспечение безопасности во время <br />движения или работы.</h3>
              <img src={case3} alt="" />
              <p>Искусственный интеллект может быть эффективно использован для контроля усталости <br />работника. Он анализирует выражение лица, положение глаз и движения тела. При <br />обнаружении признаков усталости система автоматически уведомляет руководителей. Это <br />повышает безопасность на рабочем месте и снижает риск несчастных случаев.</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Cases; 