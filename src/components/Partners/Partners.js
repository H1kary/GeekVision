import './Partners.css';
import partners1 from '../../assets/images/partners1.png';
import partners2 from '../../assets/images/partners2.png';
import partners3 from '../../assets/images/partners3.png';

function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="partners-track">
        <div className="partners-content">
          {/* <img src={partners1} alt="" />
          <img src={partners2} alt="" />
          <img src={partners3} alt="" /> */}
          <a href="https://www.kommersant.ru/doc/3725822?ysclid=m4wz4ftgp8539329168" target="_blank" rel="noopener noreferrer">
            <img src={partners1} alt="" />
          </a>
          <a href="https://beststartup.asia/101-top-russian-artificial-intelligence-companies-and-startups/" target="_blank" rel="noopener noreferrer">
            <img src={partners2} alt="" />
          </a>
          <a href="https://beststartup.asia/101-top-russian-artificial-intelligence-companies-and-startups/" target="_blank" rel="noopener noreferrer">
            <img src={partners3} alt="" />
          </a>
        </div>
        <div className="partners-content">
          {/* <img src={partners1} alt="" />
          <img src={partners2} alt="" />
          <img src={partners3} alt="" /> */}
          <a href="https://www.kommersant.ru/doc/3725822?ysclid=m4wz4ftgp8539329168" target="_blank" rel="noopener noreferrer">
            <img src={partners1} alt="" />
          </a>
          <a href="https://beststartup.asia/101-top-russian-artificial-intelligence-companies-and-startups/" target="_blank" rel="noopener noreferrer">
            <img src={partners2} alt="" />
          </a>
          <a href="https://beststartup.asia/101-top-russian-artificial-intelligence-companies-and-startups/" target="_blank" rel="noopener noreferrer">
            <img src={partners3} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Partners; 