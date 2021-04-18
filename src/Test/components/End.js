import React, { useEffect, useState } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

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
          <h3>Your results</h3>
           
          <p>{correctAnswers} of {data.length}</p>
          <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <p><strong>Your time:</strong> {formatTime(time)}</p>
          <br></br>

          <button  style={{ color : 'white' , fontSize:'13px',lineHeight:'1.7',marginLeft:'115px' }} className="btn" onClick={onAnswersCheck}>Check your answers</button>
<br></br><br></br>

          <button style={{ color : 'white' , fontSize:'13px',lineHeight:'1.7',marginLeft:'115px' }} className="btn" onClick={onReset}>Try again</button>
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