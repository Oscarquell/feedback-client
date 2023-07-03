import React from 'react';
import Photo from '../../media/img/first-section.jpg'
import { motion } from "framer-motion";
import Slider from "react-slick";
import './style.css'

const FirstSectionKg = () => {

    const settings = {
        dots: false,
        infinite: true,
        accessibility: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        focusOnSelect: true,
        pauseOnFocus: true,
        centerPadding: 0,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='first-section-bg'>
            <div className="first-section-img">
                <motion.div
                    initial={{x: -30, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    viewport={{ once: true }}
                    className='first-section-description'>Арген</motion.div>
                <motion.div
                    initial={{y: -20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    viewport={{ once: true }}
                    className='first-section-description'>&</motion.div>
                <motion.div
                    initial={{x: 30, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    viewport={{ once: true }}
                    className='first-section-description'>Адинай</motion.div>
            </div>


            <div className="first-section-photo-block">
                <Slider {...settings}>
                    <div>
                        <img className='first-section-photo' src={Photo} alt=""/>
                    </div>
                    <div>
                        <img className='first-section-photo' src={Photo} alt=""/>
                    </div>
                    <div>
                        <img className='first-section-photo' src={Photo} alt=""/>
                    </div>
                </Slider>

            </div>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ ease: "easeInOut", duration: 1 }}
                viewport={{ once: true }}
                className="first-section-quote">
                "Жылдыз адамдардын көркөмү - бир көркөм, эки адам үчүн жарык сыямызды."
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ ease: "easeInOut", duration: 2 }}
                viewport={{ once: true }}
                className="first-section-quote-author">
                (с) Филип Бэрри
            </motion.div>

        </div>
    );
};

export default FirstSectionKg;