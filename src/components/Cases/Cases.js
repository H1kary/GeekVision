import './Cases.css';
import cases1 from '../../assets/images/cases1.png';
import cases2 from '../../assets/images/cases2.png';
import cases3 from '../../assets/images/cases3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

function Cases() {
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const handleClick = (index) => {
  //   setActiveCard(activeCard === index ? null : index);
  // };

  const cardContent = [
    {
      title: "ПРОМЫШЛЕННОСТЬ",
      description: "Дефектоскопия на объектах с высоким темпом производства.",
      image: cases2,
      backContent: "Здесь подробное описание второго кейса. Можно добавить любой текст или контент."
    },
    {
      title: "ПРОМЫШЛЕННОСТЬ",
      description: "Анализ загруженности и фиксация реальных трудозатрат.",
      image: cases1,
      backContent: "Здесь подробное описание первого кейса. Можно добавить любой текст или контент."
    },
    {
      title: "ПРОМЫШЛЕННОСТЬ",
      description: "Контроль внимания на рабочем месте и обеспечение безопасности во время движения или работы.",
      image: cases3,
      backContent: "Здесь подробное описание третьего кейса. Можно добавить любой текст или контент."
    },
    {
      title: "ПРОМЫШЛЕННОСТЬ",
      description: "Контроль внимания на рабочем месте и обеспечение безопасности во время движения или работы.",
      image: cases3,
      backContent: "Здесь подробное описание третьего кейса. Можно добавить любой текст или контент."
    }
  ];

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

    sr.reveal('.cases h2', {
      origin: 'left',
      distance: '100px',
      duration: 1000,
    });

    sr.reveal('.cases-swiper-wrapper', {
      scale: 0.9,
    });
  }, []);

  return (
    <section className="cases" id="cases">
      <div className="cases-container">
        <h2>Кейсы</h2>
        <Swiper
          modules={[Navigation, Mousewheel, Pagination]}
          spaceBetween={25}
          slidesPerView={isMobile ? 1 : 3}
          mousewheel={true}
          loop={true}
          pagination={isMobile ? {
            clickable: true,
            dynamicBullets: true
          } : false}
          className="cases-swiper"

        >
          {cardContent.map((card, index) => (
            <SwiperSlide
              key={index}
              className="cases-slider-item"
              // onClick={() => handleClick(index)}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`cases-content-front ${activeCard === index ? 'active' : ''}`}>
                <p>{card.title}</p>
                <h3>{card.description}</h3>
                <div className="cases-image-wrapper">
                  <img src={card.image} alt="" />
                </div>
              </div>
              <div className={`cases-content-back ${activeCard === index ? 'active' : ''}`}>
                <div className="back-text">{card.backContent}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Cases; 