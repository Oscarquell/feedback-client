import React from 'react';
import './style.css'

const Footer = () => {
    return (
        <div className='footer'>

            <div className="footer-address">
                Ожидаем вашего присутствия в уютном и изысканном ресторане "Фрунзе" по адресу: ул. Абдумомунова, 220а.
            </div>

            <div className='footer-maps'>
                <a className='footer-maps-description' target="_blank" href="https://go.2gis.com/uzipr">Найти по карте 2GIS</a>
                <i className="footer-maps-icon two-gis"></i>
            </div>

            <div className='footer-maps'>
                <a className='footer-maps-description' target="_blank" href="https://goo.gl/maps/cvaGhSYcN7sXZu178">Найти по Google Maps</a>
                <i className="footer-maps-icon google-maps"></i>
            </div>

            <div className='footer-maps'>
                <a className='footer-maps-description' href="https://3.redirect.appmetrica.yandex.com/route?end-lat=42.878968&end-lon=74.606929&level=50&ref=yoursiteru&appmetrica_tracking_id=1178268795219780156">Заказать Яндекс такси</a>
                <i className="footer-maps-icon yandex-taxi"></i>
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

