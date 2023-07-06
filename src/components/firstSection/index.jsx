import React from 'react';
import './style.css'
import Bouquet from "../../media/img/buket.png";


const FirstSection = () => {

    return (
            <div className='first-section-bg'>
                    <div className='first-section-maps-wrap'>
                        <a className='first-section-maps two-gis' target="_blank" href="https://go.2gis.com/uzipr" />
                        <a className=' first-section-maps google-maps' target="_blank" href="https://goo.gl/maps/cvaGhSYcN7sXZu178" />
                        <a className=' first-section-maps yandex-taxi' href="https://3.redirect.appmetrica.yandex.com/route?end-lat=42.878968&end-lon=74.606929&level=50&ref=yoursiteru&appmetrica_tracking_id=1178268795219780156" />
                    </div>
            </div>
    );
};

export default FirstSection;