import React from 'react';
import {Link} from "react-router-dom";
import RUS from '../../../media/icons/ru.jpg'
import KGZ from '../../../media/icons/kg.jpg'
import './style.css'

const Language = () => {
    return (
        <div className='language'>
            <div className="language-wrap">
                <div className="language-title">Выберите язык / Тилди таңдаңыз</div>
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