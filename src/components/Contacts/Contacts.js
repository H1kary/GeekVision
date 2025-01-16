import './Contacts.css';
import contactsSvg from '../../assets/images/contactssvg.svg';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Contacts() {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '200px',
      duration: 1500,
      delay: 0,
      opacity: 0,
      mobile: false,
    });
    sr.reveal('.contacts-container-left h2', {
      origin: 'left',
    });
    sr.reveal('.contacts-container-left p', {
      origin: 'left',
      delay: 100,
    });
    sr.reveal('.contacts-container-right', {
      origin: 'right',
    });
  }, []);

  return (
    <section className="contacts" id="contacts">
      <div className="contacts-container">
        <div className="contacts-container-left">
          <h2>Контакты</h2>
          <p>По любым вопросам можете связаться с нами</p>
        </div>
        <div className="contacts-container-right">
          <p>Электронная почта</p>
          <a href="mailto:info@geekvision.ru">info@geekvision.ru</a>
          <img src={contactsSvg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Contacts; 