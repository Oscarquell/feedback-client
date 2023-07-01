import './App.css';
import FirstSection from "./components/firstSection";
import SecondSection from "./components/secondSection";
import Footer from "./components/footer";
import FeedbackForm from "./components/feedbackForm/feedback";

function App() {
  return (
    <div className="App">
        <FirstSection />
        <SecondSection />
        <Footer />
    </div>
  );
}

export default App;
