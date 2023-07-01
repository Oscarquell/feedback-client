import './App.css';
import FirstSection from "./components/firstSection";
import SecondSection from "./components/secondSection";
import Footer from "./components/footer";
import TimerBlock from "./components/timerBlock/timer";

function App() {
  return (
    <div className="App">
        <FirstSection />
        <SecondSection />
        <TimerBlock />
        <Footer />
    </div>
  );
}

export default App;
