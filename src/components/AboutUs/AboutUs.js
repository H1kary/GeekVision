import './AboutUs.css';
import aboutUsSvg from '../../assets/images/aboutus.svg';
import aboutUsButton from '../../assets/images/aboutusbutton.svg';
import { useState } from 'react';
import Form from '../FormPopup/Form';

function AboutUs() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = (e) => {
    e.preventDefault();
    setIsFormOpen(true);
  };

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
            <div>
              <h2>30<span>+</span></h2>
              <p>Успешных проектов</p>
            </div>
          </div>
          <a href="/" onClick={handleOpenForm}>
            Обсудить проект
            <img src={aboutUsButton} alt="" />
          </a>
          <img src={aboutUsSvg} alt="" />
        </div>
      </section>
      {isFormOpen && <Form onClose={() => setIsFormOpen(false)} />}
    </>
  );
}

export default AboutUs; 