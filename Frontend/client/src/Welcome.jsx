import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate("/signup");
    };

    return (
        <div className="welcome-container">
            <h1>To Every Smoker Ready for Change</h1>
            <p>You’re not weak—you’re human. And humans can <strong>change</strong>.</p>
            <p>Smoking isn’t just harming your lungs. It’s draining your energy, your time, your money, your future.</p>
            <p><strong>Every single smoke-free day is a victory.</strong> Every craving you resist makes you <strong>stronger</strong>.</p>
            <p>You’re not giving something up — you’re <strong>taking your life back</strong>.</p>
            <p>Your lungs are ready to heal. Your heart is ready to beat stronger. Your life is ready for more <strong>years</strong>, more <strong>breath</strong>, more <strong>you</strong>.</p>
            <p><strong>You can do this.</strong> Not someday. <strong>Today</strong>.</p>
            <p><em>This is the start of your freedom.</em></p>

            <button className="start-button" onClick={handleStartClick}>
                Start Now
            </button>
        </div>
    );
};

export default Welcome;
