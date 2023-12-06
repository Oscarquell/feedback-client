import React from 'react';
import { motion } from "framer-motion";
import Photo1 from '../../media/img/1.jpg'
import Underline from '../../media/img/razdelitel.png'
import './style.css'

const SecondSection = () => {
    return (
        <div className='second-section-bg'>
            <div className="underline">
                <img src={Underline} alt="" className="underline-img"/>
            </div>

            <div className="second-section-invite">
                <p className='second-section-invite-title'> Дорогие гости!</p>
                <p style={{marginBottom: '2vh'}}>Спасибо, что разделили с нами радость нашего важного дня! Наша свадьба прошла волшебно, и мы счастливы, что Вы были с нами, чтобы поделиться этим моментом.</p>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ ease: "easeInOut", duration: 1.5 }}
                    className="second-section-photos">
                    <img className='second-section-photo' src={Photo1} alt=""/>
                </motion.div>
                <p style={{marginTop: '2vh'}}>Этот сайт — наш виртуальный альбом воспоминаний. Посмотрите на фотографии и вспоминайте с нами это чудесное событие </p>
                <p>С любовью, Арген и Адинай!</p>
            </div>

            <div className="underline">
                <img src={Underline} alt="" className="underline-img"/>
            </div>

        </div>
    );
};

export default SecondSection;