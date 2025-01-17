import './Cases.css';
import cases1 from '../../assets/images/cases1.png';
import cases2 from '../../assets/images/cases2.png';
import cases3 from '../../assets/images/cases3.png';
import cases4 from '../../assets/images/cases4.png';
import cases5 from '../../assets/images/cases5.png';
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
      description: "Автоматизация контроля качества и управления запасами на производстве.",
      image: cases1,
      backContent: {
        description: "Ведущий производитель металлических конструкций и компонентов для строительной отрасли",
        requirements: "Ручной осмотр изделий на дефекты был трудоемким и подвержен человеческим ошибкам",
        solution: "Доработать li",
        result: "Доработать li"
      }
    },
    {
      title: "СЕЛЬСКОЕ ХОЗЯЙСТВО",
      description: "Интеграция системы компьютерного зрения для мониторинга урожайности.",
      image: cases2,
      backContent: {
        description: "Крупный агропромышленный холдинг, специализирующийся на производстве сельскохозяйственной продукции",
        requirements: "Крупный агропромышленный холдинг, специализирующийся на производстве сельскохозяйственной продукции",
        solution: "Разработка и внедрение системы компьютерного зрения, основанной на анализе изображений, собранных с помощью дронов и стационарных камер. Система использует алгоритмы глубокого обучения для распознавания признаков заболеваний, вредителей и других отклонений от нормы в растениях.",
        result: "Доработать li"
      }
    },
    {
      title: "ИНТЕРНЕТ-МАГАЗИН",
      description: "Поиск по фотографиям для маркетплейса одежды.",
      image: cases3,
      backContent: {
        description: "Один из ведущих маркетплейсов в сфере онлайн-продаж одежды, ориентированный на широкий ассортимент брендов и категорий товаров.",
        requirements: "Маркетплейс сталкивался с проблемой улучшения поисковой функциональности для пользователей, которым трудно найти аналогичные товары по текстовым запросам. Стандартные фильтры и текстовый поиск часто не давали точных результатов, и покупатели испытывали трудности в нахождении похожих товаров, что снижало конверсию и повышало количество отказов.",
        solution: "Разработка системы поиска похожих товаров по изображениям с использованием технологий компьютерного зрения и нейросетей. Система позволяет пользователю загружать фотографии, на которых происходит анализ одежды для дальнейшего подбора аналогичных товаров.",
        result: "Доработать li"
      }
    },
    {
      title: "ИНТЕРНЕТ-МАГАЗИН",
      description: "Автоматическое выделение характеристик товара по фотографии.",
      image: cases4,
      backContent: {
        description: "Маркетплейс, специализирующийся на продаже разнообразных товаров от многочисленных продавцов, включая одежду, аксессуары и бытовую технику.",
        requirements: "Заполнение карточек товара было длительным и трудоемким процессом для продавцов, особенно с учетом большого объема товаров. Каждый товар требовал вручную заполнения множества характеристик, таких как цвет, пол, размер и категория. Это замедляло процесс загрузки товаров на платформу и ухудшало опыт продавцов.",
        solution: "Разработка системы, автоматически предзаполняющей характеристики товара (цвет, пол, категория) по загруженной фотографии. Модель использовала визуальный энкодер и несколько линейных моделей для предсказания нужных параметров, что позволяло значительно ускорить процесс заполнения карточек.",
        result: "Доработать li"
      }
    },
    {
      title: "ЗАПОВЕДНИК",
      description: "Учет и подсчет диких животных для заповедника.",
      image: cases5,
      backContent: {
        description: "Заповедник, занимающийся охраной дикой природы и ведением научных исследований",
        requirements: "Заповедник сталкивался с трудностями в формировании ежегодных отчетов по численности животных различных видов. Традиционные методы учета (наблюдения, ловушки, слежение за следами) были трудоемкими, а также не всегда давали точных результатов из-за ограничений в времени и человеческих ресурсах.",
        solution: "Разработка системы автоматического учета животных с использованием изображений, полученных с фотоловушек, расположенных по заповеднику. Система использует компьютерное зрение для анализа фотографий с дикими животными, автоматически подсчитывая особей каждого вида и формируя отчет.",
        result: "Доработать li"
      }
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
                <div className="back-text">
                  <h4>Заказчик</h4>
                  <p>{card.backContent.description}</p>
                  
                  <h4>Проблематика</h4>
                  <p>{card.backContent.requirements}</p>
                  
                  <h4>Решение</h4>
                  <p>{card.backContent.solution}</p>
                  
                  <h4>Результат</h4>
                  <p>{card.backContent.result}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Cases; 