import './Form.css';
import formButton from '../../assets/images/formbutton.png';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const sendEmail = (e) => {
    e.preventDefault();

    // Получаем значения полей формы
    const company = e.target.company.value;
    const name = e.target.name.value;
    const task = e.target.task.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    // Проверка на пустые поля
    if (!company || !name || !task || !email || !phone) {
      toast.error('Пожалуйста, заполните все поля!');
      return; // Прерываем выполнение функции, если есть пустые поля
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
          
        },
        (error) => {
          console.log('Ошибка при отправке письма:', error.text);
          toast.error('Произошла ошибка при отправке данных.');
        }
      );

    e.target.reset(); // Очищаем форму после отправки
  };

  return (
    <section className="form" id="form">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} />
      <div className="form-container">
        <div className="form-container-inner">
          <h2>Остались вопросы?</h2>
          <p>
            Заполните форму обратной связи и станьте частью <br />
            мира современных решений
          </p>
          <form onSubmit={sendEmail}>
            <div>
              <input id="input-company" name="company" type="text" placeholder="Название компании" />
              <input id="input-name" name="name" type="text" placeholder="Имя" />
            </div>
            <input id="input-task" name="task" type="text" placeholder="Опишите задачу" />
            <div>
              <input id="input-email" name="email" type="email" placeholder="E-mail" />
              <input id="input-phone" name="phone" type="tel" placeholder="Номер телефона" />
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
