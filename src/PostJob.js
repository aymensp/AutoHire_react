import React,{ useState }  from 'react'
import Header from './Header';
import './App.css';
import './PostJob.css';
import {url} from './BaseUrl';
import axios from 'axios';
import { useHistory } from 'react-router';
import AutocompletePlace from './AutocompletePlace';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function PostJob () {
    const userr = localStorage.getItem('user')
    const currentUser = JSON.parse(userr); 
    const [location, setLocation] = useState('');
    let history = useHistory()
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
    
    const onSubmit = (data) => {
      const hamma = {...data,
      titre:data.title,  
      creator: currentUser.username,
      industry: currentUser.entreprise,
      company : currentUser.entreprise,
      jobTime: data.type,
      address:location.place_name,
      longitude:location.geometry.coordinates[0],
      latitude:location.geometry.coordinates[1]}
      axios.post(`${url}offre/Newoffre`, 
      hamma)
            .then((response) => {
              console.log(response)
          history.push('/jobsSettings')
          }, (error) => {
              console.log(error);
            });
    };
   
   
    console.log(location);
   
       

return (
     <div >
     <Header />
     <div className="PostJob">
     <div className='headerr'>
       <h1>Find a great hire, fast</h1>
       <h2> Rated #1 in delivering quality hires</h2>  
     </div>    
     <div className="form" >
           <form onSubmit={handleSubmit(onSubmit)}>


                <label for="title" >Job Title</label>
                <input  placeholder="Job Title" type="text" 
                {...register("title", {
                  validate: (value) => 
                    value.length !==0       
        })}
         />
        {errors.title && <p className='p'>Please fill out this field</p>}


                <label for="location">Job Location</label>
                <AutocompletePlace  {...register("location", {
          validate: () => location.length !==0
          
        })} onSelect={(place)=>setLocation(place)}  />
           {errors.location && <p className='p'> Please select a location from the suggestions</p>}


                <label for="salary">Job Salary</label>
                <input   placeholder="Job Salary" type="text"
                 {...register("salary", {
          validate: {
            notEmpty:(value) => value.length!==0,
            positiveNumber: (value) => parseFloat(value) > 0,
          
          }
        })} />
{errors.salary && errors.salary.type === "positiveNumber" && (
        <p className='p'>Slary should be greater than 0</p>
      )}
     
       {errors.salary && errors.salary.type === "notEmpty" && (
        <p className='p'>Please fill out this field</p>
      )}



                <label for="position">Job Position</label>
                <input placeholder="Job Position" type="text" 
                     {...register("position", {
                      validate: (value) => value.length !==0
                    })} />
  {errors.position  && (
        <p className='p'>Please fill out this field</p>
      )}


                <label for="type">Employement Type</label>
                <select 
              
                    
                     placeholder="Choose one..." type="text"
                     {...register("type", {
                      validate: (value) => value !=="Choose one.."
                    })} 
                     >
                    <option>Choose one..</option>
                    <option value='Contract'>Contract</option>
                    <option value='Full-Time'>Full-Time</option>
                    <option value='Part-Time'>Part-Time</option>
                    <option value='Temporary'>Temporary</option>
                    <option value='Intership'>Intership</option>
                    <option value='Volunteer'>Volunteer</option>
                </select>
                {errors.type  && (
        <p className='p'>Please select an item in the list.</p>
      )}


                <label for="description">Job Description</label>
                <textarea placeholder="Job Description" type="text" id="text" 
                {...register("description", {
                  validate: (value) => value.length!==0
                })}
                    />
  {errors.description  && (
        <p className='p'>Please select an item in the list.</p>
      )}


                <button type="submit" > Post job for free</button>
            </form>
     </div>  
     </div>
     </div>
)
}

export default PostJob