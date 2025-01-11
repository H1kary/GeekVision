import './Contacts.css';
import contactsSvg from '../../assets/images/contactssvg.svg';

function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts-container">
        <div className="contacts-container-left">
          <h2>Контакты</h2>
          <p>По любым вопросам можете <br />связаться с нами</p>
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