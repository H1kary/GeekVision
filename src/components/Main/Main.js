import './Main.css';
import Header from '../Header/Header';
import mainsvg from '../../assets/images/main.svg';
import mainbutton from '../../assets/images/mainbutton.svg';
import { useState, useEffect } from 'react';
import Form from '../FormPopup/Form';
import ScrollReveal from 'scrollreveal';

function Main() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleOpenForm = (e) => {
        e.preventDefault();
        setIsFormOpen(true);
    };

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '200px',
            duration: 1500,
            delay: 0,
            opacity: 0,
            mobile: false,
        });
        sr.reveal('#main h1', {
            origin: 'left',
        });
        sr.reveal('#main p', {
            origin: 'left',
            delay: 100,
        });
        sr.reveal('#main > a', {
            origin: 'left',
            delay: 150,
        });
        ScrollReveal().reveal('#main img', {
            distance: '0px',
            opacity: 0,
            scale: 0.5,
            rotate: {
                x: 20,
                y: 20,
                z: 10,
            },
        });

        return () => sr.destroy();
    }, []);

    return (
        <>
            <main id="main">
                <Header />
                <h1>Geek Vision</h1>
                <p>
                Оптимизация бизнес-процессов с использованием <br />технологий искусственного интеллекта
                </p>
                <a href="/" onClick={handleOpenForm}>Обсудить проект <img className='main-button-img' src={mainbutton} alt="" /></a>
                <img src={mainsvg} alt="main" />
            </main>
            {isFormOpen && <Form onClose={() => setIsFormOpen(false)} />}
        </>
    );
}

export default Main; 