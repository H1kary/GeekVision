import './Form.css';
import formButton from '../../assets/images/formbutton.png';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import policyPDF from '../../assets/files/policy.pdf';

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
    let cleaned = value.replace(/\D/g, '');

    // Если начинается с 8, заменяем на 7
    if (cleaned.startsWith('8')) {
      cleaned = '7' + cleaned.slice(1);
    }
    if (!cleaned.startsWith('7')) {
      cleaned = '7' + cleaned;
    }

    let formatted = '+7';
    if (cleaned.length > 1) {
      formatted += ' (' + cleaned.slice(1, 4);
    }
    if (cleaned.length >= 4) {
      formatted += ') ' + cleaned.slice(4, 7);
    }
    if (cleaned.length >= 7) {
      formatted += '-' + cleaned.slice(7, 9);
    }
    if (cleaned.length >= 9) {
      formatted += '-' + cleaned.slice(9, 11);
    }

    return formatted;
  };

  const handlePhoneInput = (e) => {
    const input = e.target.value;
    // Если пользователь удаляет символы, не форматируем
    if (input.length < phone.length) {
      setPhone(input);
    } else {
      const formattedPhone = formatPhoneNumber(input);
      setPhone(formattedPhone);
    }
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

    
    const templateParams = {
      from_name: name,
      to_name: 'GeekVision',
      company: company,
      task: task,
      email: email,
      phone: phone,
    };

    emailjs
      .send('service_itsa1sz', 'template_eu5stpn', templateParams, 'f00jNmXGxI7vp2tyq')
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
                Я согласен на обработку <a href={policyPDF} target="_blank" rel="noopener noreferrer">персональных данных</a>
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