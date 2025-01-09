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
          <a href="mailto:scaleco@gmail.com">scaleco@gmail.com</a>
          <img src={contactsSvg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Contacts; 