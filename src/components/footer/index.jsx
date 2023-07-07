import React from 'react';
import { motion } from "framer-motion";
import './style.css'

const Footer = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ ease: "easeInOut", duration: 1 }}
            className='footer'>
            <div className="footer-title">
                По любым вопросам можете связаться с нами:
            </div>
            <div className="footer-links">
                <a className='footer-link' href="https://wa.me/996708654585">
                    <i className='footer-icons whatsapp'></i>
                </a>
                <a className='footer-link' href="https://t.me/kasymov_07">
                    <i className='footer-icons telegram'></i>
                </a>
            </div>
        </motion.div>
    );
};

export default Footer;

