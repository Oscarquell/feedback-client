import React from 'react';
import './style.css'
import Underline from "../../media/img/razdelitel.png";

const FirstSection = () => {

    return (
            <div className='first-section-bg'>
                    <p className="first-section-janat">Место проведения</p>
                    <p className="first-section-janat">«Jannat Regency»</p>
                    <p className="first-section-janat">28.07.2023</p>
                    <div className='first-section-maps-wrap'>
                        <a className='first-section-maps two-gis' target="_blank" href="https://go.2gis.com/hc98u" />
                        <a className=' first-section-maps google-maps' target="_blank" href="https://goo.gl/maps/M6wRdX2y3WxPBjfaA" />
                        <a className=' first-section-maps yandex-taxi' href="https://3.redirect.appmetrica.yandex.com/route?end-lat=42.820475&end-lon=74.617152&level=50&ref=yoursiteru&appmetrica_tracking_id=1178268795219780156" />

                    </div>
                     <div className="underline">
                        <img src={Underline} alt="" className="underline-img"/>
                    </div>
            </div>
    );
};

export default FirstSection;