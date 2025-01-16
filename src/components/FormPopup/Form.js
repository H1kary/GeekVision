import './Form.css';
import formButton from '../../assets/images/formbutton.png';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

function FormPopup({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [task, setTask] = useState('');
  const [email, setEmail] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  useEffect(() => {
    document.body.classList.add('form-open');
    return () => {
      document.body.classList.remove('form-open');
    };
  }, []);

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length > 10) {
      const match = cleaned.match(/^8(\d{3})(\d{3})(\d{2})(\d{2})$/);
      if (match) {
        return `+7 (${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
      }
    }
    return value;
  };

  const handlePhoneInput = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Проверка на пустые поля
    if (!company || !name || !task || !email || !phone) {
      toast.error('Пожалуйста, заполните все поля!');
      return;
    }

    // Валидация номера телефона
    const phoneRegex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phone)) {
      toast.error('Пожалуйста, введите корректный номер телефона в формате: +7 (905) 318-40-81');
      return;
    }

    // Создаем объект с данными для отправки
    const templateParams = {
      from_name: name,
      to_name: 'GeekVision',
      company: company,
      task: task,
      email: email,
      phone: phone,
    };

    emailjs
      .send('service_gk3g9yp', 'template_ny80gvp', templateParams, '_XKJaj8pxeZ3ZGnOA')
      .then(
        (result) => {
          console.log('Письмо успешно отправлено:', result.text);
          toast.success('Данные успешно отправлены!');
          setIsClosing(true);
          setTimeout(onClose, 3000);
        },
        (error) => {
          console.log('Ошибка при отправке письма:', error.text);
          toast.error('Произошла ошибка при отправке данных.');
        }
      );

    // Очищаем форму после отправки
    setCompany('');
    setName('');
    setTask('');
    setEmail('');
    setPhone('');
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'form-popup-overlay') {
      setIsClosing(true);
      setTimeout(onClose, 300);
    }
  };

  const handleCloseClick = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`form-popup-overlay ${isClosing ? 'closing' : ''}`} onClick={handleOverlayClick}>
      <div className={`form-popup ${isClosing ? 'closing' : ''}`}>
        <button className="form-popup-close" onClick={handleCloseClick}>&times;</button>
        <div className="form-container-inner">
          <h2>Остались вопросы?</h2>
          <p>Заполните форму обратной связи и станьте частью <br />мира современных решений</p>
          <form onSubmit={sendEmail}>
            <div>
              <input
                id="input-company"
                name="company"
                type="text"
                placeholder="Название компании"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <input
                id="input-name"
                name="name"
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <input
              id="input-task"
              name="task"
              type="text"
              placeholder="Опишите задачу"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <div>
              <input
                id="input-email"
                name="email"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="input-phone"
                name="phone"
                type="tel"
                placeholder="Номер телефона"
                value={phone}
                onInput={handlePhoneInput}
              />
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="agreement"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
              />
              <label htmlFor="agreement">
                Я согласен на обработку персональных данных
              </label>
            </div>
            <button type="submit" disabled={!isAgreed}>
              Оставить заявку
              <img src={formButton} alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormPopup; 