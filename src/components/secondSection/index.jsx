import React from 'react';
import { motion } from "framer-motion";
import Photo1 from '../../media/img/1.jpg'
import Photo5 from '../../media/img/5.jpg'
import './style.css'

const SecondSection = () => {
    return (
        <div className='second-section-bg'>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ ease: "easeInOut", duration: 1 }}
                // viewport={{ once: true }}
                className="second-section-photos">
                <img className='second-section-photo' src={Photo1} alt=""/>
            </motion.div>

            <div className="second-section-invite">
                <p className='second-section-invite-title'> Дорогие друзья!</p>
                <p>Счастливы и радостно приглашаем вас на нашу свадьбу! Мы с нетерпением ждем, чтобы разделить этот особый день с вами. Пожалуйста, присоединитесь к нам 20 июля в ресторане "Фрунзе" и помогите нам создать незабываемые воспоминания, наполненные любовью и счастьем.</p>
                <p>С любовью,</p>
                <p>Арген и Адинай!</p>
            </div>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ ease: "easeInOut", duration: 1 }}
                // viewport={{ once: true }}
                className="second-section-photos">
                <img className='second-section-photo' src={Photo5} alt=""/>
            </motion.div>

        </div>
    );
};

export default SecondSection;