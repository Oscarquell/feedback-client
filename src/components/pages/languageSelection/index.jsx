import React from 'react';
import {Link} from "react-router-dom";
import './style.css'

const Language = () => {
    return (
        <div className='language'>
            <h2 className="language-select">
                Выберите язык / Тилди тандоо
            </h2>
            <h3 className="languages">
                <Link to='/eventRU'>
                    Русский
                </Link>
            </h3>
            <h3 className="languages">
                <Link to='/eventKG'>
                    Кыргызча
                </Link>
            </h3>
        </div>
    );
};

export default Language;