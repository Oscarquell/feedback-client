import React from 'react';
import FirstSection from "../../firstSection";
import SecondSection from "../../secondSection";
import FeedbackForm from "../../feedbackForm/feedback";
import TimerBlock from "../../timerBlock/timer";
import Footer from "../../footer";
import Rules from "../../rules-section";

const MainPageRus = () => {
    return (
        <>
            <SecondSection />
            <Rules />
            <FeedbackForm />
            <TimerBlock />
            <FirstSection />
            <Footer />
        </>

    );
};

export default MainPageRus;

