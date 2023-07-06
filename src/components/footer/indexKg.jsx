import React from 'react';
import './style.css'

const FooterKg = () => {
    return (
        <div className='footer'>

            <div className="footer-address">
                Адреси: Абдумомунов көчөсү, 220а, "Фрунзе" ресторандын жашыруу жана чоңкой суранычты көруңүздү күтөбүз."
            </div>

            <div className='footer-maps'>
                <a className='footer-maps-description' target="_blank" href="https://go.2gis.com/uzipr">2GIS картада издөө</a>
            </div>

            <div className='footer-maps'>
                <a className='footer-maps-description' target="_blank" href="https://goo.gl/maps/cvaGhSYcN7sXZu178">Google Maps төмөндөгүлө издөө</a>
            </div>

            <div className='footer-maps'>
                <a className='footer-maps-description' href="https://3.redirect.appmetrica.yandex.com/route?end-lat=42.878968&end-lon=74.606929&level=50&ref=yoursiteru&appmetrica_tracking_id=1178268795219780156">Яндекс такси тапшырыңыз</a>
            </div>

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