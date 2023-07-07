import React from 'react';
import {Link} from "react-router-dom";
import RUS from '../../../media/icons/ru.jpg'
import KGZ from '../../../media/icons/kg.jpg'
import './style.css'

const Language = () => {
    return (
        <div className='language'>
            <h2 className="language-select">
                Выберите язык / Тилди таңдоо
            </h2>
            <div className="language-wrap">
                <h3 className="languages">
                    <Link to='/eventRU'>
                        <img className='language-flags' src={RUS} alt=""/>
                    </Link>
                </h3>
                <h3 className="languages">
                    <Link to='/eventKG'>
                        <img className='language-flags' src={KGZ} alt=""/>
                    </Link>
                </h3>
            </div>
        </div>
    );
};

export default Language;