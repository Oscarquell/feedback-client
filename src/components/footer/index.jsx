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
                <a href="https://3.redirect.appmetrica.yandex.com/route?end-lat=55.76776211471192&end-lon=37.60714921124336&level=50&ref=yoursiteru&appmetrica_tracking_id=1178268795219780156">Заказать такси</a>
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

