import './Main.css';
import Header from '../Header/Header';
import mainsvg from '../../assets/images/main.svg';
import mainbutton from '../../assets/images/mainbutton.svg';

function Main() {
    return (
        <main>
            <Header />
            <h1>Geek Vision</h1>
            <p>
                Обработка фото и видео изображений с помощью <br />технологий искусственного интеллекта.
            </p>
            <a href="/">Обсудить проект <img src={mainbutton} alt="mainbutton" /></a>
            <img src={mainsvg} alt="main" />
        </main>
    );
}

export default Main; 