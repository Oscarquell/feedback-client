import React from "react";
import {motion} from "framer-motion";
import Underline from "../../media/img/razdelitel.png";
import './style.css'

const TimerBlockKg = () => {

  const [time, setTime] = React.useState({})

  function countdown(targetDate) {
    const currentDate = new Date();

    const timeDiff = targetDate.getTime() - currentDate.getTime();

    if (timeDiff <= 0) {
      return 'Мероприятие началось!';
    }

    const seconds = Math.floor(timeDiff / 1000) % 60;
    const minutes = Math.floor(timeDiff / (1000 * 60)) % 60;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Формируем строку обратного отсчета
    let countdownString = {};

    if (days > 0) {
      countdownString = {d: days};
    } else {
      countdownString += {d: '0'};
    }


    if (hours >= 0 && hours < 10) {
      countdownString = {...countdownString, h: '0' + hours};
    } else if (hours > 10) {
      countdownString = {...countdownString, h: hours};
    } else {
      countdownString = {...countdownString, h: '00'};
    }


    if (minutes >= 0 && minutes < 10) {
      countdownString = {...countdownString, m: '0' + minutes};
    } else if (minutes > 0) {
      countdownString = {...countdownString, m: minutes};
    } else {
      countdownString = {...countdownString, m: '00'};
    }


    if (seconds > 0 && seconds < 10) {
      countdownString = {...countdownString, s: '0' + seconds};
    } else if (seconds > 10) {
      countdownString = {...countdownString, s: seconds};
    } else {
      countdownString = {...countdownString, s: '00'};
    }


    setTime(countdownString)
    return countdownString;
  }


  const targetDate = new Date(2023, 6, 28, 17, 0, 0);


  React.useEffect(() => {
    const timerID = setInterval(() => countdown(targetDate), 1000);
    return () => {
      return clearInterval(timerID)
    };
  }, []);


  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ease: "easeInOut", duration: 1}}
      className='timer-section-bg'>
      <div className="timer-section-title">
        Иш-чаранын алдында калган:
      </div>
      <div className="timer-section-timer-wrap">
        <div className="timer-section-timer-app">
          <p className='timer-section-timer'>{time.d}</p>
          <p className='timer-section-timer-description'>Күн</p>
        </div>
        <div className="timer-section-timer-app">
          <p className='timer-section-timer'>{time.h}</p>
          <p className='timer-section-timer-description'>Саат</p>
        </div>
        <div className="timer-section-timer-app">
          <p className='timer-section-timer'>{time.m}</p>
          <p className='timer-section-timer-description'>Мүнөт</p>
        </div>
        <div className="timer-section-timer-app">
          <p className='timer-section-timer'>{time.s}</p>
          <p className='timer-section-timer-description'>Сек</p>
        </div>
      </div>
      <div className="underline">
        <img src={Underline} alt="" className="underline-img"/>
      </div>
    </motion.div>
  );
}

export default TimerBlockKg;