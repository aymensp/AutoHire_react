import React,{ useState }  from 'react'
import Header from './Header';
import './App.css';
import './PostJob.css';
import {url} from './BaseUrl';
import axios from 'axios';
import { useHistory } from 'react-router';
function PostJob () {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [position, setPosition] = useState('');
    let history = useHistory()
    const PostJob = (e) => {
        e.preventDefault();
        axios.post(`${url}offre/Newoffre`, {
    titre: title,
    description: description,
    poste: position,
    address: location,
    creator: "aymlan",
    industry: company,
    company : company,
    type: type,
    jobTime: type,
    salary: salary,
    longitude:"3.613140",
    latitude:"36.400512"
          })
          .then((response) => {
        history.push('/jobsSettings')
     
        }, (error) => {
            console.log(error);
          });
         
    } 
return (
    <div >
     <Header />
     <div className="PostJob">
     <div className='headerr'>
       <h1>Find a great hire, fast</h1>
       <h2> Rated #1 in delivering quality hires</h2>  
    </div>    
     <div className="form">
           <form>
                <label for="firstname" >Job Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Job Title" type="text"/>
                <label for="firstname">Company</label>
                <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Company" type="text"/>
                <label for="firstname">Job Location</label>
                <input value={location} onChange={e => setLocation(e.target.value)} placeholder="Job Location" type="text"/>
                <label for="firstname">Job Salary</label>
                <input value={salary} onChange={e => setSalary(e.target.value)} placeholder="Job Salary" type="text"/>
                <label for="firstname">Job Position</label>
                <input value={position} onChange={e => setPosition(e.target.value)} placeholder="Job Position" type="text"/>
                <label for="firstname">Employement Type</label>
                <select value={type} onChange={e => setType(e.target.value)} placeholder="Choose one..." type="text">
                    <option>Choose one..</option>
                    <option value='Contract'>Contract</option>
                    <option value='Full-Time'>Full-Time</option>
                    <option value='Part-Time'>Part-Time</option>
                    <option value='Temporary'>Temporary</option>
                    <option value='Intership'>Intership</option>
                    <option value='Volunteer'>Volunteer</option>
                </select>
                <label for="firstname">Job Description</label>
                <textarea onChange={(event)=> setDescription(event.target.value)} placeholder="Job Description" type="text" id="text" defaultValue={description} value={description} />
                <button type="submit" onClick={PostJob}>Post job for free</button>
            </form>
           
        </div>  
    </div>
    </div>
)

}

export default PostJob