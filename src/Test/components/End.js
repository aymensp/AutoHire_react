import React, { useEffect, useState } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import result from '../../assets/results.jpg'

import { formatTime } from '../utils';

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const handle = useFullScreenHandle();

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return(
    <FullScreen handle={handle}> 
    <div className="card" style={{ background : 'white' ,width:'400px',textAlign: 'center'}}>
      <div className="card-content">
        <div className="content">
        <br></br><br></br>

        <img style={{  width:'350px' ,borderStyle:'outset'}} src={result} alt='hamma'></img>
<br></br><br></br>
          <h3>Correct answers : {correctAnswers} of {data.length}</h3>
           
          <h3>Score : {Math.floor((correctAnswers / data.length) * 100)}% </h3>
          <h3>Time : {formatTime(time)}</h3>
          <br></br>

          <button  style={{ color : 'white' , fontSize:'13px',lineHeight:'1.7',marginLeft:'115px' }} className="btn" onClick={onAnswersCheck}>Check your answers</button>
<br></br><br></br>

          
        </div>
      </div>
      
    </div><br></br>
          <br></br>
          
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
    </FullScreen>
  );
}

export default End;