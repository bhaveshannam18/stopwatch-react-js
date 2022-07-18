import "./Stopwatch.css";
import GenericSpan from "./Components/GenericSpan";
function Stopwatch(){
    return (
    <>
        <div className="container">
            {/* <span className="startTimer">Start</span>
            <span className="stopTimer">Stop</span>
            <span className="timerValue">00:00:00</span>
            {/* <span className="pauseTimer">Pause</span> */}
            {/* <span className="resumeTimer">Resume</span> */} 
            <GenericSpan 
            type="start" 
            text="Start" 
            handleClick={()=> {
                console.log("Start");
            }}
            />
        </div>        
    </>
    );
}

export default Stopwatch;