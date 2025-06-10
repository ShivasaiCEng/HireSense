import "./Body.css";
import "./Body-container.css"
import LogoMarquee from "./Horizontalslider";
import GsapMarquee from "./GsapMArque";
import FeatureCards from "./featureCards";
import PricingCard from "./PricingCard";
import { useNavigate } from 'react-router-dom';

export default function Body() {
    const navigate = useNavigate();
    
    const handleStartClick = () => {
        navigate('/dashboard');
    };
    
    return (
        <>
            <div className="Body-container">
                <div className="Body">
                    <h1><i className="fa-solid fa-robot"></i> AI Interviewer</h1>
                    <h2>Ace your next interview with smart mock sessions.</h2>
                    <h3><i className="fa-solid fa-comments"></i> Real-time questions. <i className="fa-solid fa-chart-line"></i> Instant feedback. <i className="fa-solid fa-microphone"></i> Voice or text.
                        <br/><i className="fa-solid fa-briefcase"></i> Tailored for your role. <i className="fa-solid fa-clock"></i> Anytime. <i className="fa-solid fa-location-dot"></i> Anywhere</h3>
                    <button className="Start-practising" onClick={handleStartClick}>
                        <i className="fa-solid fa-play"></i> Start Practising Now
                    </button>
                </div>
                
                <div className="Body2">
                    <div className="video-container">
                        <div className="placeholder-video">
                            <div className="Overlay"></div>
                            <div className="DemoVideo-text">
                                <h1>Hold on we are still making the backend..</h1>
                            </div>
                        </div>
                    </div>
                    
                    <br></br> <br></br>
                    <h1 style={{textAlign: "center", width: "100%"}}>Our users in college</h1>
                    <LogoMarquee />
                    <br></br><br></br>
                    
                    <div className="screenshots">
                        <h1 style={{textAlign: "center", width: "100%"}}>Screenshots</h1>
                    </div>

                    <div className="featureCards">
                        <h1 style={{fontSize:"3rem", textAlign: "center", width: "100%"}}>Why recruiters should choose us?</h1>
                        <FeatureCards />
                        <GsapMarquee />
                        <br></br>
                        <PricingCard />
                    </div>
                </div>
            </div>
        </>
    );
}