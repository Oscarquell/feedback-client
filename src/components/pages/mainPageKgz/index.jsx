import React, {useEffect, useState} from 'react';
import CircularIndeterminate from "../../loader";
import FirstSectionKg from "../../firstSection/indexKg";
import SecondSection from "../../secondSection";
import FeedbackFormKg from "../../feedbackForm/feedbackKg";
import TimerBlockKg from "../../timerBlock/timerKg";
import FooterKg from "../../footer/indexKg";


const MainPageKgz = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);


    return (
        <div>
            {
                isLoading ?
                    <CircularIndeterminate />
                    :
                    <div>
                        <FirstSectionKg />
                        <SecondSection />
                        <FeedbackFormKg />
                        <TimerBlockKg />
                        <FooterKg />
                    </div>
            }
        </div>
    );
};

export default MainPageKgz;