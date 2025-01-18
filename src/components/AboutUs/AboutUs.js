import './AboutUs.css';
import aboutUsSvg from '../../assets/images/aboutus.svg';
// import aboutUsPng from '../../assets/images/aboutus.png';
import whiteFade from '../../assets/images/whitefade.png';
import aboutUsButton from '../../assets/images/aboutusbutton.svg';
import { useState } from 'react';
import Form from '../FormPopup/Form';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function AboutUs() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = (e) => {
    e.preventDefault();
    setIsFormOpen(true);
  };

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '200px',
      duration: 1500,
      delay: 0,
      opacity: 0,
      mobile: false,
    });

    sr.reveal('.about-us-head div:first-of-type h1', { 
        origin: 'left',
    });
    sr.reveal('.about-us-head div:first-of-type p', {
        origin: 'left',
    });

    sr.reveal('.about-us-head div:last-of-type', {
        origin: 'right',
    });
    sr.reveal('.about-us-container > a', {
        origin: 'bottom',
    });
    sr.reveal('.about-us-container > img', {
        origin: 'bottom',
        delay: 300,
    });

}, []);

  return (
    <>
      <section className="about-us" id="about-us">
        <div className="about-us-container">
          <div className="about-us-head">
            <div>
              <h1>GEEK VISION</h1>
              <p>
                Это ведущий поставщик технологий распознавания, <br />обработки фото и видео изображений с помощью технологий <br /><span>искусственного интеллекта.</span><br /><br />
                Инновационные продукты нашей компании используются <br />для автоматизации производственных процессов, контроля <br />качества, предотвращения несчастных случаев.
              </p>
            </div>
            <div className='about-us-head-right'>
              <h2>30<span>+</span></h2>
              <p>Успешных проектов</p>
            </div>
          </div>
          <a href="/" onClick={handleOpenForm}>
            Обсудить проект
            <img src={aboutUsButton} alt="" />
          </a>
          <img className='about-us-bg' src={aboutUsSvg} alt="" />
        </div>
      </section>
      <img className='whitefade' src={whiteFade} alt="" />
      {/* <img className='about-us-image' src={aboutUsPng} alt="" /> */}
      {isFormOpen && <Form onClose={() => setIsFormOpen(false)} />}
    </>
  );
}

export default AboutUs; 