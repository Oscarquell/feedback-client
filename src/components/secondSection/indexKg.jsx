import React from 'react';
import { motion } from "framer-motion";
import Photo1 from '../../media/img/1.jpg'
import Underline from '../../media/img/razdelitel.png'
import './style.css'

const SecondSectionKg = () => {
    return (
        <div className='second-section-bg'>
            <div className="underline">
                <img src={Underline} alt="" className="underline-img"/>
            </div>

            <div className="second-section-invite">
                <p className='second-section-invite-title'>Урматтуу коноктор!</p>
                <p style={{marginBottom: '2vh'}}>Биздин жашообузда маанилүү жана салтанаттуу күн - биздин үйлөнүү тоюбуз жакындап келе жатат. Ушул жакшынакай күндү биз менен бөлүшүп, үй-бүлөөбүздүн курулушуна күбө болушуңузду чын жүрөктөн каалайбыз.</p>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ ease: "easeInOut", duration: 1.5 }}
                    className="second-section-photos">
                    <img className='second-section-photo' src={Photo1} alt=""/>
                </motion.div>
                <p style={{marginTop: '2vh'}}>Сиздерди 28 июль 2023 жылы «Jannat Regency» мейманканын жайкы террасасында күтөбүз.</p>
                <p>Дареги: А.Токомбаев 21/1 көчөсү.</p>
                <p>Башталышы саат 17:00</p>
            </div>

            <div className="underline">
                <img src={Underline} alt="" className="underline-img"/>
            </div>

        </div>
    );
};

export default SecondSectionKg;