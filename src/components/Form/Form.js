import './Form.css';
import formButton from '../../assets/images/formbutton.png';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function Form() {
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [task, setTask] = useState('');
  const [email, setEmail] = useState('');

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
      return; // Прерываем выполнение функции, если есть пустые поля
    }

    // Валидация номера телефона
    const phoneRegex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phone)) {
      toast.error('Пожалуйста, введите корректный номер телефона в формате: +7 (905) 318-40-81');
      return; // Прерываем выполнение функции, если номер телефона некорректен
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
          // Очищаем форму после отправки
          setCompany('');
          setName('');
          setTask('');
          setEmail('');
          setPhone('');
        },
        (error) => {
          console.log('Ошибка при отправке письма:', error.text);
          toast.error('Произошла ошибка при отправке данных.');
        }
      );
  };

  return (
    <section className="form" id="form">
      
      <div className="form-container">
        <div className="form-container-inner">
          <h2>Остались вопросы?</h2>
          <p>
            Заполните форму обратной связи и станьте частью <br />
            мира современных решений
          </p>
          <form onSubmit={sendEmail}>
            <div>
              <input
                id="input-company"
                name="company"
                type="text"
                placeholder="Название компании"
                value={company}
                onChange={(e) => setCompany(e.target.value)} // Обновляем состояние
              />
              <input
                id="input-name"
                name="name"
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)} // Обновляем состояние
              />
            </div>
            <input
              id="input-task"
              name="task"
              type="text"
              placeholder="Опишите задачу"
              value={task}
              onChange={(e) => setTask(e.target.value)} // Обновляем состояние
            />
            <div>
              <input
                id="input-email"
                name="email"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Обновляем состояние
              />
              <input
                id="input-phone"
                name="phone"
                type="tel"
                placeholder="Номер телефона"
                value={phone}
                onInput={handlePhoneInput} // Используем onInput для автоформатирования
              />
            </div>
            <button type="submit">
              Оставить заявку
              <img src={formButton} alt="" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
