import React from 'react';
import './style.css'
import Photo2 from "../../media/img/2.jpg";
import Underline from "../../media/img/razdelitel.png";

const Rules = () => {
    return (
        <div className='rules-section-bg'>
            <div className="second-section-photos">
                <img src={Photo2} alt="" className="second-section-photo"/>
            </div>
            <h2 className="rules-title">Подсказки и пожелания</h2>
            <p className="rules-first">Убедительная просьба, для Вашего комфортного времяпровождения прийти без сопровождения детей</p>
            <div className="underline">
                <img src={Underline} alt="" className="underline-img"/>
            </div>
            <p className="rules-first">Мы очень готовились к нашему празднику и будем рады, если Вы придете вовремя</p>
        </div>
    );
};

export default Rules;