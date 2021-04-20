import React, { Component } from 'react';
import Header from './Header';


import './App.css';
import UserForm from './resumeCreator/UserForm';

class resumeCreator extends Component {



  render() {
    return (

      <div>
              <Header />

        <div className="col-lg-8 mx-auto text-center mt-5">
          <h1><b>Let's generate your Resume!</b></h1>
          <p className="lead">Please provide accurate and clear description wherever necessary.</p>
          <hr />
        </div>
        <UserForm/>
      </div>
    );
  }
}

export default resumeCreator;
