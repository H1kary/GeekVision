import './CallUs.css';
import callUsSvg from '../../assets/images/callus.svg';

function CallUs() {
  return (
    <section className="call-us">
      <div className="call-us-container">
        <h2>Давайте обсудим ваш <br/>проект вместе</h2>
        <p>Мы готовы обсудить ваши задачи и предложить <br/>индивидуальные решения для роста вашего бизнеса. <br/>Заполните форму ниже, и наш менеджер свяжется с <br/>вами в ближайшее время.</p>
        <a href="/">Связаться с нами</a>
        <img src={callUsSvg} alt="" />
      </div>
    </section>
  );
}

export default CallUs; 