import React from 'react';
import { motion } from "framer-motion";
import './style.css'

const FooterKg = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ ease: "easeInOut", duration: 1 }}
            className='footer'
        >
            <div className='footer-contacts'>
                <div className="title">
                    Байланыштар:
                </div>
                <div className="footer-links">
                    <a className='footer-link' href="https://wa.me/996708654585">
                        <i className='footer-icons whatsapp' />
                    </a>
                    <a className='footer-link' href="https://t.me/kasymov_07">
                        <i className='footer-icons telegram' />
                    </a>
                </div>
            </div>
            <div className='footer-address'>
                <p className="title">Картадагы дарек:</p>
                <div className='first-section-maps-wrap'>
                    <a
                        className='first-section-maps two-gis'
                        target="_blank" href="https://go.2gis.com/hc98u"
                    />
                    <a
                        className='first-section-maps google-maps'
                        target="_blank"
                        href="https://goo.gl/maps/M6wRdX2y3WxPBjfaA"
                    />
                    <a
                        className='first-section-maps yandex-taxi'
                        href="https://3.redirect.appmetrica.yandex.com/route?end-lat=42.820475&end-lon=74.617152&level=50&ref=yoursiteru&appmetrica_tracking_id=1178268795219780156"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default FooterKg;

