import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Index from './index'
import Meeting from './meeting'
import Header from '../../Header'

class AppV extends Component {
  render() {
    return (
     
      <Router>
        
        <div className="full">
            <Header />
          <Route exact path="/" component={Index} />
          <Route path="/meeting" component={Meeting} />
        </div>
      </Router>
    )
  }
}

export default AppV
