import React, {useEffect, useState} from 'react';
import CircularIndeterminate from "../../loader";
import FirstSection from "../../firstSection";
import SecondSection from "../../secondSection";
import FeedbackForm from "../../feedbackForm/feedback";
import TimerBlock from "../../timerBlock/timer";
import Footer from "../../footer";
import Rules from "../../rules-section";


const MainPageRus = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);


    return (
            <div>
                {
                    isLoading ?
                        <CircularIndeterminate />
                        :
                        <div>
                            <SecondSection />
                            <Rules />
                            <FeedbackForm />
                            <TimerBlock />
                            <FirstSection />
                            <Footer />
                        </div>
                }
            </div>
    );
};

export default MainPageRus;

