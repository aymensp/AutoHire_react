import React, { useEffect } from 'react';
import {  useSelector  } from 'react-redux'
import { withRouter} from 'react-router-dom';
import Acceuil from './Acceuil';
import './App.css';
import { selectUser } from './features/userSlice';
import Login from './Login'; 




// function SecuredRoute(props) {
 
//   const dispatch = useDispatch()
  
 
//   return(
//     <Route path={props.path} render ={data => user ?  (
//       <props.component {...data}></props.component> ):
//       (<Redirect to={{pathname:'/'}}></Redirect>)
//     }></Route>
//   )
// }
 
function App() {
  const user = useSelector(selectUser)
  
  return (
    <div >

     {
user?
<Acceuil/>
:
<Login/>

     }

      {/* <Switch>
     <Route exact path ="/"  component={Login}/>
     <SecuredRoute path="/aceuil" component={Acceuil}/>
     </Switch> */}
      {/* <Header />
      
      {!user ? (
        <Login />
      ) : (
        
        <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
        )} */}
      
    </div>
  );
}

export default withRouter(App);
