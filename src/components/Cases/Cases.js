import './Cases.css';
import case1 from '../../assets/images/case1.png';
import case2 from '../../assets/images/case2.png';
import case3 from '../../assets/images/case3.png';
import { useRef, useEffect } from 'react';

function Cases() {
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
    <section className="cases" id="cases">
      <div className="cases-container">
        <h2>Кейсы</h2>
        <div
          className="cases-slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onWheel={handleWheel}
        >
          <div className="cases-slider-item">
            <h3>Анализ загруженности и фиксация реальных <br />трудозатрат.</h3>
            <img src={case1} alt="" />
            <p>Искусственный интеллект используется для автоматического контроля эффективности рабочих на <br />промышленном производстве. Камеры отслеживают движения и позволяют оценить реальную <br />эффективность работников</p>
          </div>
          <div className="cases-slider-item">
            <h3>Дефектоскопия на объектах с высоким <br />темпом производства.</h3>
            <img src={case2} alt="" />
            <p>Искусственный интеллект может быть использован для контроля качества продукции на <br />производственных линиях. Он анализирует наличие дефектов, неправильной геометрии или <br />несоответствия стандартам и уведомляет руководителей. <br /><br />Искусственный интеллект может быть использован для мониторинга состояние <br />промышленных станков, фиксируя износ деталей или наличие поломок.</p>
          </div>
          <div className="cases-slider-item">
            <h3>Контроль внимания на рабочем месте и <br />обеспечение безопасности во время <br />движения или работы.</h3>
            <img src={case3} alt="" />
            <p>Искусственный интеллект может быть эффективно использован для контроля усталости <br />работника. Он анализирует выражение лица, положение глаз и движения тела. При <br />обнаружении признаков усталости система автоматически уведомляет руководителей. Это <br />повышает безопасность на рабочем месте и снижает риск несчастных случаев.</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Cases; 