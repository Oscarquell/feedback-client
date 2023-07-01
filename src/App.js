import './App.css';
import FirstSection from "./components/firstSection";
import SecondSection from "./components/secondSection";
import Footer from "./components/footer";
import TimerBlock from "./components/timerBlock/timer";
import CircularIndeterminate from "./components/loader";
import {useEffect, useState} from "react";
import FeedbackForm from "./components/feedbackForm/feedback";

function App() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

  return (
    <div className="App">
        {
            isLoading ?
                <CircularIndeterminate />
                :
                <div>
                    <FirstSection />
                    <SecondSection />
                    <FeedbackForm />
                    <TimerBlock />
                    <Footer />
                </div>
        }

    </div>
  );
}

export default App;
