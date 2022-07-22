import Stopwatch from './Stopwatch/Stopwatch';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter , setCounter] = useState(0);
  const generateStopwatch = () =>{
    return Array(counter).fill(<Stopwatch />);
  }

  return (
    <>
      <div className='addStopwatch'>
        {/* <h1>Multiple Stopwatch</h1> */}
        <button onClick={()=>setCounter((counter)=>counter+1)}>+</button>
      </div>
      <div className='stopwatchContainer'>
        {generateStopwatch()}
      </div>
    </>
  );
}

export default App;
