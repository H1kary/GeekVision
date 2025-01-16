import './CallUs.css';
import callUsSvg from '../../assets/images/callus.svg';
import { useState } from 'react';
import Form from '../FormPopup/Form';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function CallUs() {
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
  sr.reveal('.call-us-container', {
    origin: 'bottom',
  });
  }, []);

  return (
    <>
      <section className="call-us" id="call-us">
        <div className="call-us-container">
          <h2>Давайте обсудим ваш <br/>проект вместе</h2>
          <p>Мы готовы обсудить ваши задачи и предложить <br/>индивидуальные решения для роста вашего бизнеса. <br/>Заполните форму ниже, и наш менеджер свяжется с <br/>вами в ближайшее время.</p>
          <a href="/" onClick={handleOpenForm}>Связаться с нами</a>
          <img src={callUsSvg} alt="" />
        </div>
      </section>
      {isFormOpen && <Form onClose={() => setIsFormOpen(false)} />}
    </>
  );
}

export default CallUs; 