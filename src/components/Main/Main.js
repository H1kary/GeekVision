import './Main.css';
import Header from '../Header/Header';
import mainsvg from '../../assets/images/main.svg';
import mainbutton from '../../assets/images/mainbutton.svg';
import { useState } from 'react';
import Form from '../FormPopup/Form';

function Main() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleOpenForm = (e) => {
        e.preventDefault();
        setIsFormOpen(true);
    };

    return (
        <>
            <main id="main">
                <Header />
                <h1>Geek Vision</h1>
                <p>
                    Обработка фото и видео изображений с помощью <br />технологий искусственного интеллекта.
                </p>
                <a href="/" onClick={handleOpenForm}>Обсудить проект <img src={mainbutton} alt="mainbutton" /></a>
                <img src={mainsvg} alt="main" />
            </main>
            {isFormOpen && <Form onClose={() => setIsFormOpen(false)} />}
        </>
    );
}

export default Main; 