import React from 'react';
import './style.css'

const Footer = () => {
    return (
        <div className='footer'>

            <div>
                проезд до ресторана
                <a target="_blank" href="https://go.2gis.com/uzipr">2GIS</a>
            </div>
            <div>
                проезд до ресторана
                <a target="_blank" href="https://goo.gl/maps/cvaGhSYcN7sXZu178">Google Maps</a>
            </div>

            <div>
                <a href="yandextaxi://route?source=app_search&dest=улица+Токтоболота+Абдумомунова,+дом+220А,+город+Бишкек">Заказать такси</a>
            </div>

            <div className="footer-title">
                Если у Вас возникнут вопросы, можете связаться с нами
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

export default Footer;

