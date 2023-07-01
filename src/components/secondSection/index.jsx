import React from 'react';
import { motion } from "framer-motion";
import Photo1 from '../../media/img/photo-1.jpg'
import Photo2 from '../../media/img/photo-2.jpg'
import Photo3 from '../../media/img/photo-3.jpg'
import './style.css'

const SecondSection = () => {
    return (
        <div>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ ease: "easeInOut", duration: 1 }}
                // viewport={{ once: true }}
                className="second-section-photos">
                <img className='second-section-photo' src={Photo1} alt=""/>
            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ ease: "easeInOut", duration: 1 }}
                // viewport={{ once: true }}
                className="second-section-photos">
                <img className='second-section-photo' src={Photo2} alt=""/>
            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ ease: "easeInOut", duration: 1 }}
                // viewport={{ once: true }}
                className="second-section-photos">
                <img className='second-section-photo' src={Photo3} alt=""/>
            </motion.div>
        </div>
    );
};

export default SecondSection;