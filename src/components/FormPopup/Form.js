import './Form.css';
import formButton from '../../assets/images/formbutton.png';

function Form({ onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target.className === 'form-popup-overlay') {
      onClose();
    }
  };

  return (
    <div className="form-popup-overlay" onClick={handleOverlayClick}>
      <div className="form-popup">
        <button className="form-popup-close" onClick={onClose}>&times;</button>
        <div className="form-container-inner">
          <h2>Остались вопросы?</h2>
          <p>Заполните форму обратной связи и станьте частью <br />мира современных решений</p>
          <form>
            <div>
              <input id="input-company" type="text" placeholder="Название компании" />
              <input id="input-name" type="text" placeholder="Имя" />
            </div>
            <input id="input-task" type="text" placeholder="Опишите задачу" />
            <div>
              <input id="input-email" type="email" placeholder="E-mail" />
              <input id="input-phone" type="tel" placeholder="Номер телефона" />
            </div>
            <button>Оставить заявку<img src={formButton} alt="" /></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form; 