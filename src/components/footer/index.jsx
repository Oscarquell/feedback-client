import React from 'react';
import './style.css'

const Footer = () => {
    return (
        <div className='footer'>

            <div className="footer-address">
                Ожидаем Вас в ресторане "Фрунзе" по адресу: ул. Абдумомунова, 220а.
            </div>

            <div className='footer-maps'>
                <a className='footer-maps-description' target="_blank" href="https://go.2gis.com/uzipr">Найти на карте 2GIS</a>
            </div>

            <div className='footer-maps'>
                <a className='footer-maps-description' target="_blank" href="https://goo.gl/maps/cvaGhSYcN7sXZu178">Найти на Google Maps</a>
            </div>

            <div className='footer-maps'>
                <a className='footer-maps-description' href="https://3.redirect.appmetrica.yandex.com/route?end-lat=42.878968&end-lon=74.606929&level=50&ref=yoursiteru&appmetrica_tracking_id=1178268795219780156">Заказать Яндекс такси</a>
            </div>


            <div className="footer-title">
                По любым вопросам можете связаться с нами:
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

