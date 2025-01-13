import './Header.css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Header() {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1500,
            delay: 200,
            reset: true,
            mobile: true,
        });
        sr.reveal('#header', {
            origin: 'top',
            distance: '60px',
            duration: 1500,
            delay: 200,
            reset: true,
            mobile: true,
        });
    }, []);
    return (
        <header id="header">
            <nav>
                <a href="#about-us">О нас</a>
                <a href="#advantages">Преимущества</a>
                <a href="#cases">Кейсы</a>
                <a href="#contacts">Контакты</a>
            </nav>
        </header>
    );
}

export default Header; 