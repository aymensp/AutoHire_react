import React from 'react';

const Modal = ({ onClose, results, data }) => {
  return(
    <div className="modal is-active" style={{paddingBottom:'100px',paddingLeft:'10px'}}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <h2 className="modal-card-title">Your answers  &nbsp; &nbsp; &nbsp; &nbsp; <button  onClick={onClose}> <strong>X</strong></button></h2>
         
        </header>
        <section className="modal-card-body content">
          <ul>
            {results.map((result, i) => (
              <li key={i} className="mb-6">
                <p><strong>{result.q}</strong></p>
                <p style={{color:'blue'}}>Your answer: {result.a}</p>
                {result.a !== data[i].answer && <p style={{color:'green'}}><strong>Correct answer: {data[i].answer}</strong></p>}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Modal;