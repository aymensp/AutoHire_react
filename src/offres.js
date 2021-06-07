import React , { useRef,useState, useEffect }from "react"
import './offres.css'
import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab'
import 'react-smarttab/dist/index.css'
import FlipMove from 'react-flip-move'
import Header from "./Header"
import OffreCardsLeft from "./offreCardsLeft"
import {url} from './BaseUrl'
import axios from 'axios' ;
import OffreCardRight from "./offreCardRight"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TablePagination from "@material-ui/core/TablePagination";
import TableContainer from "@material-ui/core/TableContainer";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import Auxiliary from "./Auxiliary"
import Skeleton from '@material-ui/lab/Skeleton';

function Offres() {

  const [posts, setPosts] = useState([]);

  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;
  const [anchorEl, setAnchorEl] = useState(null);
  const [clicked,setClicked]= useState([]);
  const [filter,setFilter] = useState("");
  const [selected,setSelected] = useState("");
  const [checked,setChecked] =useState([]);
  const [companies,setCompanies] = useState([])
  const mapWrapper= useRef();
  const div= useRef();
  const [filterList,setFilterlist] =useState( [
  
    {
       id: 11,
       value: "company",
       items: posts.map((item)=>{return item.company})
     },
  
    {
       id: 12,
       value: "jobTime",
       items:["Contract","Part-Time","Full-Time","Temporary"]
     },
   
   ])
  const [activeFilter,setActivefilter] =useState ({});
  const handleClick = (items,event) => {
    setAnchorEl(event.currentTarget);
    setClicked(items.items);
    setFilter(items.value);
  };

  //close menu
  const handleClose = () => {
    setAnchorEl(null);
    setClicked([]);
  };
  function multiFilter(array, filters) {
    let filterKeys = Object.keys(filters);
    // filters all elements passing the criteria
    return array.filter((item) => filterKeys.every((key) => (filters[key].indexOf(item[key]) !== -1)));
  }
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const  onFilterChange =(item,filterr)=> {

          if(activeFilter[filterr]){
            
            if(activeFilter[filterr].includes(item)){
              const index = activeFilter[filterr].indexOf(item);
              activeFilter[filterr].splice(index)
              const indexx= checked.indexOf(item);
              checked.splice(indexx,1)
              if(activeFilter[filterr].length===0)
              {
                Reflect.deleteProperty(activeFilter, filterr);
               
              }
            }
            else{
              activeFilter[filterr].push(item);
              checked.push(item);
            }
           
          }
          else {
            activeFilter[filterr]= [item];
            checked.push(item);
          }

    
  }

 
 useEffect(() => {
  
  
  
    axios.get(`${url}offre/ScrapedOffers/tanit`) 
      .then(
        responseA =>
          Promise.all([
            responseA,
            axios.get(`${url}offre/All/Offre`)
          ])   
      )
      .then(
        ([responseA,responseB]) => {
        
        setPosts([...responseB.data,...responseA.data])
       
        })
      .catch((err) => {
          console.log(err.message);
      });
    },
    posts.map(item=>{
      if (!companies.includes(item.company)){
        const aymen =companies;
        aymen.push(item.company);
        setCompanies(aymen)
      }
    
    })


   
 ,[selected])
 
var filteredList = multiFilter(posts, activeFilter);
let tabs =  <Auxiliary>
  <Tabs  >   
<TabNav>
<TableContainer >  
 <header style={{borderBottom:'1px solid rgba(0,0,0,0.08)',position:'sticky', zIndex:'1'}}>
   <div style={{ padding:' 8px 12px 8px 10px',borderLeft:'solid 2px #eb0392' , alignItems:'center' , display:'flex' ,height:'56px'}}>
    <h1 style={{fontSize:'18px',fontWeight:'400',lineHeight:'1.5'}}>Jobs based on your Profile</h1>
   </div>
 </header>
     
     <div style={{display:'flex',width:'100%'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25}  />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
     
    </div>
    <div style={{display:'flex'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25} />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
     
    </div>
    <div style={{display:'flex'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25}  />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
     
    </div>
    <div style={{display:'flex'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25}/>
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
     
    </div>
    <div style={{display:'flex'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25}  />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
     
    </div>
    <div style={{display:'flex'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25}  />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
     
    </div>  <div style={{display:'flex'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25}  />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
     
    </div>  <div style={{display:'flex'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25}  />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
     
    </div>
    </TableContainer> 
</TabNav>
<TabContent >
<div style={{borderBottom:'1px solid rgba(0,0,0,0.08)'}} className="offre_card">

<div className="offre_card_header">
<Skeleton variant="rect" width={120} height={120} />
<div style={{marginBottom:'100px'}} className="offre_card_info">

      <Skeleton height={25}  />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>


</div>




</div>
</div>
<div className="offre_card_footer">
<h2 style={{ fontSize:'15px' ,fontWeight:'normal' , color:'gray' , lineHeight:'1.7'}}> Posted by</h2>
<div style={{ display:'flex'}}>
<Skeleton variant="rect" width={50} height={50} style={{ marginRight: 10 }} />
<Skeleton height="25px" animation={false} width="60%" />
</div>
</div >
<div className='offre_description'> 
<Skeleton animation={false} width="90%" />
<Skeleton animation={false} width="90%" />
<Skeleton animation={false} width="90%" />
<Skeleton animation={false} width="90%" />

<div className='offre_description_details'>
<div className ='offre_box'>
<Skeleton animation={false} width="60%" />
<Skeleton animation={false} width="60%" />
</div>
<div className ='offre_box'>
<Skeleton animation={false} width="60%" />
<Skeleton animation={false} width="60%" />
</div>
<div className ='offre_box'>
<Skeleton animation={false} width="60%" /><Skeleton animation={false} width="60%" />
</div>
<div className ='offre_box'>
<Skeleton animation={false} width="60%" /><Skeleton animation={false} width="60%" />
</div>

</div>

</div>
</TabContent>
</Tabs>
            </Auxiliary>    
if (posts.length!=0)
{
tabs =  <Tabs selected='1' onLeaveTab={(currentIndex, nextIndex) => { console.log("leaveTab", currentIndex, nextIndex) }}
onShowTab={(e) => { 

  const map = new mapboxgl.Map({
    container: mapWrapper.current,
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [10.179099,36.803021],
    zoom: 13
  });
  
  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/driving'
  })
  
  map.addControl(directions, 'top-left');
  map.on('load',  function() {
  directions.setDestination(  [filteredList[e-1]['longitude'],filteredList[e-1]['latitude']]);
  console.log(directions.getDestination())
    // can be address in form setOrigin("12, Elm Street, NY")
  })

  console.log(e)

  
}}>   
       
<TabNav>
<TableContainer >  
 <header style={{borderBottom:'1px solid rgba(0,0,0,0.08)',position:'sticky', zIndex:'1'}}>
   <div style={{ padding:' 8px 12px 8px 10px',borderLeft:'solid 2px #eb0392' , alignItems:'center' , display:'flex' ,height:'56px'}}>
    <h1 style={{fontSize:'18px',fontWeight:'400',lineHeight:'1.5'}}>Jobs based on your Profile</h1>
   </div>
 </header>
   {filteredList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ _id,  titre, company, address ,createdAt ,users,link  }) => (
     <TabNavItem key={_id}> 
      <FlipMove>
         <OffreCardsLeft
       key={_id}
       title={titre}
       company={company}
       addresse ={address}
       date ={createdAt}
       users={users}
       link ={link}
     
       />
         </FlipMove>
       </TabNavItem>
   ))}
   <div style={{marginLeft:'30px' ,width:'410px', backgroundColor:'red'}}>
   <TablePagination

      rowsPerPageOptions={[5, 10, 15]}
      
      count={filteredList.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
   </div>
   
    </TableContainer> 

</TabNav>
<TabContent >
<div></div>
   {filteredList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ _id,  titre, industry,company, address ,createdAt,description ,longitude,latitude, salary , poste , jobTime , type,creator,users,saves,link   }) => (
     <TabPanel key={_id}>
       <FlipMove>
         <OffreCardRight
       key={_id}
       id={_id }
       title={titre}
       company={company}
       addresse ={address}
       date ={createdAt}
       description={description} 
       salary={salary}
       longitude={longitude}
       latitude={latitude}
       industry= {industry}
       poste={poste}
       jobTime={jobTime}
       type ={type}
       creator={creator}
       users={users}
       saves={saves}
       link={link}
       selected={selected}
       ref={_id}
       />
       </FlipMove>
    
       </TabPanel>
   ))}

  
<div ref={div} style={{margin:'10px',padding:'15px',borderRadius:'15px',backgroundColor:'white',border:'1px solid rgba(0, 0, 0, 0.08)'}}>
       <h4 style={{marginBottom:'30px',fontSize:'19px',fontWeight:'500'}}>See your commute</h4>
       <div 
        ref={mapWrapper} 
        className="mapWrapper" 
      >
          </div>
          </div>

  
</TabContent>
</Tabs>

}


    return (
      <div className="offres">
       <Header/>
       <div className="searchBar">
         <div className="items">
          
    {filterList.map(filterr=>(
            
           <button className={ activeFilter[filterr.value]? "filter_button_selected": "filter_button"} onClick={(event)=>handleClick(filterr,event)}>
           {filterr.value}
           <ArrowDropDownIcon/>
           </button>
    ))}    
                  <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  >  
                    <form>
                  {
                  filter!=="company" ?
                   clicked.map(ha=>(
           <MenuItem>
         
             <label htmlFor={ha} >{ha}</label>
             <input
             id={ha}
             type="checkbox"
            
             defaultChecked={checked.includes(ha)}
             onClick={() => onFilterChange(ha,filter)}
             
             />
         
           </MenuItem>
           
           

))
:

companies.map(ha=>(
  <MenuItem>

    <label htmlFor={ha} >{ha}</label>
    <input
    id={ha}
    type="checkbox"   
    defaultChecked={checked.includes(ha)}
    onClick={() => onFilterChange(ha,filter)}   
    />

  </MenuItem>
))}
    </form>
          </Menu>
       </div>
        
       </div>     
         {tabs}
     </div>
             
    )
  }
export default Offres ;