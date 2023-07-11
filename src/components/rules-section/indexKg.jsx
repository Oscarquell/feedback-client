import React from 'react';
import Photo2 from "../../media/img/2.jpg";
import Photo3 from "../../media/img/3.jpg";
import Photo4 from "../../media/img/4.jpg";
import Underline from "../../media/img/razdelitel.png";
import {motion} from "framer-motion";
import Slider from "react-slick";
import './style.css'

const RulesKg = () => {

    const settings = {
        dots: false,
        infinite: true,
        accessibility: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        focusOnSelect: true,
        pauseOnFocus: true,
        centerPadding: 0,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ease: "easeInOut", duration: 1}}
            className='rules-section-bg'>
            <div className="second-section-photos">
                <Slider {...settings}>
                    <div>
                        <img className='second-section-photo' src={Photo2} alt=""/>
                    </div>
                    <div>
                        <img className='second-section-photo' src={Photo3} alt=""/>
                    </div>
                    <div>
                        <img className='second-section-photo' src={Photo4} alt=""/>
                    </div>
                </Slider>
            </div>
            <h2 className="rules-title">Каалоолор жана сунуштар</h2>
            <p className="rules-first">Сураныч, сиздер  ыңгайлуу жана көңүлдүү эс алып кетүүңөр үчүн бала коноктордун коштоосу жок келиңиздер</p>
            <div className="underline">
                <img src={Underline} alt="" className="underline-img"/>
            </div>
            <p className="rules-first">Белгиленген убакытка келип берүүңөрдү өтүнөбүз</p>
            <div className="underline">
                <img src={Underline} alt="" className="underline-img"/>
            </div>
        </motion.div>
    );
};

export default RulesKg;

