import "./Stopwatch.css";
import GenericSpan from "./Components/GenericSpan";
import { useState } from "react";
function Stopwatch(){
    const [stopwatchState , setStopwatchState] = useState(0);
    return (
    <>
        <div className="container">

            {stopwatchState === 0 && (<GenericSpan 
            type="start" 
            text="Start" 
            handleClick={()=> {
                setStopwatchState(1);
            }}
            />)}

            {stopwatchState === 1 && (<><GenericSpan 
            type="stop" 
            text="Stop" 
            handleClick={()=> {
                setStopwatchState(0);
            }}
            />
            <GenericSpan 
            type="timer" 
            text="00:00:00" 
            />
            <GenericSpan 
            type="pause" 
            text="Pause" 
            handleClick={()=> {
                setStopwatchState(2);
            }}
            />
            </>)}
            {stopwatchState === 2 && (<><GenericSpan 
            type="stop" 
            text="Stop" 
            handleClick={()=> {
                setStopwatchState(0);
            }}
            />
            <GenericSpan 
            type="timer" 
            text="00:00:00" 
            />
            <GenericSpan 
            type="resume" 
            text="Resume" 
            handleClick={()=> {
                setStopwatchState(1);
            }}
            /></>)}

        </div>        
    </>
    );
}

export default Stopwatch;