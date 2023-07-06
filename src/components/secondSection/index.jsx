import React from 'react';
import { motion } from "framer-motion";
import Photo1 from '../../media/img/1.jpg'
import Bouquet2 from "../../media/img/buket2.png";
import Underline from '../../media/img/razdelitel.png'
import './style.css'
import Bouquet from "../../media/img/buket.png";

const SecondSection = () => {
    return (
        <div className='second-section-bg'>
            <div className="second-section-invite">
                <div className="bouquet-decoration">
                    <img src={Bouquet} alt="" className="bouquet"/>
                </div>
                <p className='second-section-invite-title'> Дорогие гости!</p>
                <p>Совсем скоро в нашей жизни состоится важное и торжественное событие — день нашей свадьбы. Мы искренне желаем, чтобы вы разделили с нами этот прекрасный день и стали свидетелями зарождения новой ячейки общества.</p>
                <p>Ждём Вас 28 июля 2023 года в летней террасе «Jannat Regency» по адресу: ул. А. Токомбаева 21/2.    </p>
                <p>Начало — в 17:00.</p>
                <p>С любовью, Арген и Адинай!</p>
            </div>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ ease: "easeInOut", duration: 1.5 }}
                className="second-section-photos">
                <img className='second-section-photo' src={Photo1} alt=""/>
            </motion.div>

            <div className="underline">
                <img src={Underline} alt="" className="underline-img"/>
            </div>

        </div>
    );
};

export default SecondSection;