import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div>
            <h2>GEEK<br />VISION</h2>
          </div>
          <div>
            <h3>Компания</h3>
            <a href="#about-us">О нас</a>
            <a href="#advantages">Наши преимущества </a>
            <a href="#cases">Кейсы</a>
            <a href="/">Услуги</a>
            <a href="#contacts">Контакты</a>
          </div>
        </div>
        <div className="footer-right">
          <p>Электронная почта</p>
          <a href="mailto:info@geekvision.ru">info@geekvision.ru</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 