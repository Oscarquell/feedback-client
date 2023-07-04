import React, {Suspense} from 'react';
import Photo2 from '../../media/img/2.jpg'
import Photo3 from '../../media/img/3.jpg'
import Photo4 from '../../media/img/4.jpg'
import { motion } from "framer-motion";
import Slider from "react-slick";
import './style.css'
import CircularIndeterminate from "../loader";


const FirstSection = () => {

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
        <Suspense fallback={<CircularIndeterminate />}>
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
                            <img className='first-section-photo' src={Photo2} alt=""/>
                        </div>
                        <div>
                            <img className='first-section-photo' src={Photo3} alt=""/>
                        </div>
                        <div>
                            <img className='first-section-photo' src={Photo4} alt=""/>
                        </div>
                    </Slider>

                </div>

                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ ease: "easeInOut", duration: 1 }}
                    viewport={{ once: true }}
                    className="first-section-quote">
                    "Счастье влюбленных - это солнце, светящееся для двоих."
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
        </Suspense>
    );
};

export default FirstSection;