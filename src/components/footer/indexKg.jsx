import React from 'react';
import './style.css'

const FooterKg = () => {
    return (
        <div className='footer'>
            <div className="footer-title">
                Суроолоруңуз болсо, биз менен байланышсаңыз болот
            </div>
            <div className="footer-links">
                <a className='footer-link' href="https://www.instagram.com/arg.kasymov">
                    <i className='footer-icons instagram'></i>
                </a>
                <a className='footer-link' href="https://wa.me/996708654585">
                    <i className='footer-icons whatsapp'></i>
                </a>
                <a className='footer-link' href="https://t.me/kasymov_07">
                    <i className='footer-icons telegram'></i>
                </a>
            </div>
        </div>
    );
};

export default FooterKg;