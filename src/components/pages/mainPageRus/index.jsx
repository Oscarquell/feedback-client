import React from 'react';
import SecondSection from "../../secondSection";
import TimerBlock from "../../timerBlock/timer";
import Footer from "../../footer";
import Rules from "../../rules-section";
import FeedbackForm from "../../feedbackForm/feedback";

const MainPageRus = () => {
  return (
    <>
        <SecondSection/>
        <Rules/>
        <TimerBlock/>
        <FeedbackForm />
        <Footer/>
    </>
  );
};

export default MainPageRus;

