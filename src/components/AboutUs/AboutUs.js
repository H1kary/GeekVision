import './AboutUs.css';
import aboutUsSvg from '../../assets/images/aboutus.svg';
import aboutUsButton from '../../assets/images/aboutusbutton.svg';

function AboutUs() {
  return (
    <section className="about-us">
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
        <a href="/">
        Обсудить проект
        <img src={aboutUsButton} alt="" />
        </a>
        <img src={aboutUsSvg} alt="" />
      </div>
      
    </section>
  );
}

export default AboutUs; 