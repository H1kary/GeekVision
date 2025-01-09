import './Partners.css';
import partners1 from '../../assets/images/partners1.png';
import partners2 from '../../assets/images/partners2.png';
import partners3 from '../../assets/images/partners3.png';

function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="partners-track">
        <div className="partners-content">
          <img src={partners1} alt="" />
          <img src={partners2} alt="" />
          <img src={partners3} alt="" />
        </div>
        <div className="partners-content">
          <img src={partners1} alt="" />
          <img src={partners2} alt="" />
          <img src={partners3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Partners; 