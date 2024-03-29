import "./Stopwatch.css";
import GenericSpan from "./Components/GenericSpan";
import {Start , Stop , Pause , Resume , Timer} from "../Constants";
import { useState } from "react";
function Stopwatch(){
    const [stopwatchState , setStopwatchState] = useState(0);
    const [secPassed , setSecPassed] = useState(0);
    const [timerId , setTimerId] = useState(null);

    const startTimer = (_) => {
        let tId = setInterval(()=>{
            setSecPassed((sec)=>sec=sec+1);
        },1000);
        setTimerId(tId);
    }

    const stopTimer = () =>{
        clearInterval(timerId);
        setSecPassed(0);
    }

    const pauseTimer = ()=>{
        clearInterval(timerId);
    }

    const resumeTimer = ()=>{
        startTimer();
    }

    const properTimeFormat = (time) =>{
        if(time<10){
            time = "0" + time;
        }
        return time;
    }
    const getFormattedTime = (secCount)=>{
        let res = "";
        let sec = secCount % 60;
        secCount = parseInt(secCount/60);
        let min = secCount % 60;
        secCount = parseInt(secCount/60);
        let hours = secCount % 60;
        res = properTimeFormat(hours)+":"+properTimeFormat(min)+":"+properTimeFormat(sec);
        return res;
    }
    return (
    <>
        <div className="container">

            {stopwatchState === 0 && (<GenericSpan 
            type={Start.type} 
            text={Start.text}
            className={Start.className} 
            handleClick={()=> {
                startTimer();
                setStopwatchState(1);
            }}
            />)}

            {stopwatchState === 1 && (<><GenericSpan 
            type={Stop.type} 
            text={Stop.text}
            className={Stop.className}
            handleClick={()=> {
                stopTimer();
                setStopwatchState(0);
            }}
            />
            <GenericSpan 
            type={Timer.type}
            className={Timer.className}
            text={getFormattedTime(secPassed)} 
            />
            <GenericSpan 
            type={Pause.type} 
            text={Pause.text}
            className={Pause.className}
            handleClick={()=> {
                pauseTimer();
                setStopwatchState(2);
            }}
            />
            </>)}
            {stopwatchState === 2 && (<><GenericSpan 
            type={Stop.type} 
            text={Stop.text}
            className={Stop.className}
            handleClick={()=> {
                stopTimer();
                setStopwatchState(0);
            }}
            />
            <GenericSpan 
            type={Timer.type}
            className={Timer.className}
            text={getFormattedTime(secPassed)}
            />
            <GenericSpan 
            type={Resume.type} 
            text={Resume.text}
            className={Resume.className}
            handleClick={()=> {
                resumeTimer();
                setStopwatchState(1);
            }}
            /></>)}

        </div>        
    </>
    );
}

export default Stopwatch;