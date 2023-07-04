import React from 'react';
import './style.css'

const Footer = () => {
    return (
        <div className='footer'>

            {/*<div>*/}
            {/*    проезд до ресторана*/}
            {/*    <a target="_blank" href="https://go.2gis.com/uzipr">2GIS</a>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    проезд до ресторана*/}
            {/*    <a target="_blank" href="https://goo.gl/maps/cvaGhSYcN7sXZu178">Google Maps</a>*/}
            {/*</div>*/}

            <div>
                <a href="yandextaxi://route?source=app_search&dest=%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%A2%D0%BE%D0%BA%D1%82%D0%BE%D0%B1%D0%BE%D0%BB%D0%BE%D1%82%D0%B0%20%D0%90%D0%B1%D0%B4%D1%83%D0%BC%D0%BE%D0%BC%D1%83%D0%BD%D0%BE%D0%B2%D0%B0%20%D0%B4%D0%BE%D0%BC%20220%D0%90">Заказать такси</a>

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

