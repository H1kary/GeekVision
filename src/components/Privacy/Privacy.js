import './Privacy.css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { useNavigate } from 'react-router-dom';

function Privacy() {
  const navigate = useNavigate();

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '200px',
      duration: 1500,
      delay: 0,
      opacity: 0,
      mobile: true,
    });
    
    sr.reveal('.privacy-container', {
      origin: 'bottom',
    });
  }, []);

  return (
    <section className="privacy">
      <div className="privacy-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Назад
        </button>
        <h1>Политика конфиденциальности</h1>
        <div className="privacy-content">
          <h2>1. Общие положения</h2>
          <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных»...</p>

          <h2>2. Основные понятия</h2>
          <p>Персональные данные – любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных)...</p>

          <h2>3. Обработка персональных данных</h2>
          <p>Мы собираем и обрабатываем только те персональные данные, которые необходимы для предоставления услуг или исполнения соглашений с Пользователем...</p>

          {/* Добавьте остальные разделы политики конфиденциальности */}
        </div>
      </div>
    </section>
  );
}

export default Privacy; 