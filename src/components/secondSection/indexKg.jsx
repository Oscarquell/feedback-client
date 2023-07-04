import React from 'react';
import { motion } from "framer-motion";
import Photo1 from '../../media/img/1.jpg'
import Photo5 from '../../media/img/5.jpg'
import './style.css'

const SecondSectionKg = () => {
    return (
        <div className='second-section-bg'>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ ease: "easeInOut", duration: 1 }}
                className="second-section-photos">
                <img className='second-section-photo' src={Photo1} alt=""/>
            </motion.div>

            <div className="second-section-invite">
                <p className='second-section-invite-title'> Көркөмдүү достор!</p>
                <p>Биздин бала тууганыгымызга кантип сырлайбыз! Биз сиз менен бул жашылча күндү бөлүшүңүздү күтөтөбүз. 20 июльда "Фрунзе" ресторанында бизге катышып, бизге сүйлөнүп калган, сырткы күндү калган эч кандай эскертүүлүктөрдү жасайып, мухтаж болубуз.</p>
                <p>Сүйүктүү менен,</p>
                <p>Арген жана Адинай!</p>
            </div>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ ease: "easeInOut", duration: 1 }}
                // viewport={{ once: true }}
                className="second-section-photos">
                <img className='second-section-photo' src={Photo5} alt=""/>
            </motion.div>

        </div>
    );
};

export default SecondSectionKg;