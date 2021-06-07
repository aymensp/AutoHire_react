import React, { useState, useEffect } from 'react'
import { url } from '../BaseUrl'
import axios from 'axios';
import { SidebarData } from './SideBarData';
import './Navbar.css';
import img from '../assets/vermeg.jpg'

import Auxiliary from '../Auxiliary'
import './company.css'
import Header from "../Header"


import './RatingPopup.css'

import './ListC.css'
import { Link } from "react-router-dom";


import Employee from './ListEmp';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import RatingCmp from './RatingsCmp';
import OffresCmp from './OffresCmp';
import { useHistory, useLocation } from 'react-router';
import AboutCmp from './AboutCmps';
import List from './ListCompany'

function ListC(props) {

  let history = useHistory();
  let location = useLocation();
  const [posts, setPosts] = useState([])
  const [posts2, setPosts2] = useState([]);
 // let idCompany=props.location.state.industry;
 let idCompany=location.search.split('=')[1];

let idCom="Vermeg";
let f="Wevioo"
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const industry = query.get('industry');
    console.log("location"+location.search)
    axios.get(`${url}entreprise/n/${industry}`).then(res => {
      setPosts2(res.data)
    })
  }


    , [])


  


  const Navigate = (industry) => {
    history.push({
      pathname: '/company',
      search: 'industry' + '=' + industry
    });
  }  

return(


    <div className="app">
    <Header />
  
    <div className="myjobs__body">
    <div className='list' style={{width:'1000px'}}>
      <Auxiliary>
            <div style={{ borderBottom: '1px solid rgba(0,0,0,0.08)'}} className="company_card">

              <div className="company_card_header" >
                <br></br>

                {posts2.map(
                    ({ logo}) => {




                     
                      return (

                        <img style={{ width: '320px', height: '200px' ,borderStyle:'outset'}} src={`${url}uploads/${logo}`}></img>

                );

              })}
                <div className="company_card_info" >
                  {posts2.map(
                    ({ nom, industry, about, adresse }) => {




                     
                      return (

                        <p >
                         
                           <h2>{nom}</h2>
                       
                          <p >{adresse}</p>

                          <p >{industry}</p>
                          <br>
                          </br>
                          <p >{about}</p>


                        </p>



                      );

                    })}



                  <div style={{ display: 'flex', marginTop: '2px' }}>
                    <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '13px', lineHeight: '1.7', marginRight: '8px' }}>

                    </p>

                  </div>


                </div>
              </div>
            </div>
            <div className="company_card_footer">

              <div style={{ display: 'flex' }}>

              </div>
            </div >
            <div className='company_description' >

              <div style={{ display: 'inline' }}>

                <Router>
                <table id="table" >
      <tr>
        {SidebarData.map((item, index) => {
          
          return (

            <th key={index} className={item.cName}>
              <Link style={{
                display: 'block',
                color: 'black',
              }} to=
             
              {item.path+idCompany} idcomp={idCompany}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </th>
          );
        })}



      </tr>

    </table>


                  <Switch>
                  <Route path='/aboutCmp/' component={AboutCmp} />

                    <Route path='/offresCmp/' component={OffresCmp} />
                    <Route path='/employees/' component={Employee} />
                  

                    <Route path='/ratings/'  component={RatingCmp} />
                

                  </Switch>
                </Router>



              </div>







            </div>
            <img style={{ width: '850px', height: '0px' }} src={img} ></img>

          </Auxiliary>
      
    </div>
   
    
   </div>
   
 </div>
)


}

export default ListC