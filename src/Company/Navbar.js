import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  return (
   
 /*
          <ul className='NavC'   >
         
            {SidebarData.map((item, index) => {
              return (
                <li className='liC' key={index} className={item.cName}>
                  <Link className='liCa' to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>*/
          <table id="table" >
  <tr>
  {SidebarData.map((item, index) => {
              return (
                <th  key={index} className={item.cName}>
                  <Link style={{ display: 'block',
  color: 'black',
 }} to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </th>
              );
            })}

    
    
  </tr>
  
</table>
      
   
 
  );
}

export default Navbar;
