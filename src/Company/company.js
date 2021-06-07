import React , { useState, useEffect,useHistory }from "react"
import './company.css'
import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab'
import 'react-smarttab/dist/index.css'
import FlipMove from 'react-flip-move'
import Header from "../Header"

import {url} from '../BaseUrl'
import axios from 'axios' ;

import Widgets from './Cwidget';
import List from './companyCardRight'
function Company() {
  const [posts, setPosts] = useState([])
    useEffect(() => {
      
      axios.get(`${url}entreprise`).then( res => {
         console.log(res.data.nom)
         setPosts(res.data)
        })   
      }
          
         
 ,[])
    return (
     
    <div className="app">
    <Header />
       
     <div className="app__body">
     <List/>
     <Widgets/>
   </div>
     
 </div>
         
     
    )
  }
  


export default Company ;