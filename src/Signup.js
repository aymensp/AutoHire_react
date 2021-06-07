import React,{ useState }  from 'react'
import './App.css';
import logo from './assets/logo.png'
import './Signup.css';
import {url} from './BaseUrl';
import axios from 'axios';
import { useHistory } from 'react-router';
import AutocompletePlace from './AutocompletePlace';
import { useForm } from "react-hook-form";
import 'react-phone-number-input/style.css'
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const emailRegex = /\S+@\S+\.\S+/;
var regularExpression = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
function Signup () {
    const [value, setValue] = useState('')
    const [location, setLocation] = useState('');
    let history = useHistory()
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
    
  
    const recaptchaRef = React.createRef();
    const onSubmit = (data) => {
        console.log(data)
    
        const hamma = {...data,
             username : data.username,
             firstName : data.firstN,
             lastName : data.lastN,
            // position : position ,
            entreprise : data.company,
             password : data.username,
            role : data.type,
            address:location.place_name,
             picture : data.username,
            // email : email,
            // birthDate : birthDate,
            
             phoneNumber : data.phone,
       }
       console.log(hamma)
        axios.post(`${url}user/`, 
        {   username : data.username,
            firstName : data.firstN,
            lastName : data.lastN,
            position : data.position ,
           entreprise : data.company,
            password : data.password,
           role : data.type,
           address:location.place_name,
            picture : data.username,
            email : data.email,
           // birthDate : birthDate,
           
            phoneNumber : data.phone,})
              .then((response) => {
                console.log(response)
            history.push('/login')
            }, (error) => {
                console.log(error);
              });
      };
    

return (
     <div >
     
     <div className="Signup">
     <div className='headerrr'>
     <img style={{ height:'60px'}} src={logo} alt=""/>
     <h1>Make the most of your professional life</h1>

     </div>    
     
     <div className="formm" >
     
           <form onSubmit={handleSubmit(onSubmit)} >


                <label htmlFor="username" >Username</label>
                <input  type="text" 
                {...register("username", {
                  validate: (value) => 
                    value.length !==0       
        })}
         />
        {errors.username && <p className='p'>Please fill out this field</p>}
        <label htmlFor="firstN" >First Name</label>
                <input   type="text" 
                {...register("firstN", {
                  validate: (value) => 
                    value.length !==0       
        })}
         />
        {errors.firstN && <p className='p'>Please fill out this field</p>}
        <label htmlFor="lastN" >Last Name</label>
                <input   type="text" 
                {...register("lastN", {
                  validate: (value) => 
                    value.length !==0       
        })}
         />
        {errors.lastN && <p className='p'>Please fill out this field</p>}


        <label htmlFor="password">Password</label>
                <input type="text" 
                       {...register("password", {
                        validate: (value) => regularExpression.test(value)
                      })} />
  {errors.password  && (
        <p className='p'>Password should include at least one number,one Uppercase character and one special character</p>
      )}
                <label htmlFor="location"> Address</label>
                <AutocompletePlace  {...register("location", {
          validate: () => location.length !==0
          
        })} onSelect={(place)=>setLocation(place)}  />
           {errors.location && <p className='p'> Please select a location from the suggestions</p>}


           <PhoneInput
           {...register("phone", {
            validate: () => isValidPhoneNumber(value)
            
          })} 
           style={{fontSize:'30px'}}
  value={value}
  onChange={setValue}
  />

{errors.phone && (
        <p style={{marginTop:'8px'}} className='p'>phone Number not valid for this country</p>
      )}
     
  


<label htmlFor="position">Position</label>
                <input  type="text" 
                     {...register("position", {
                      validate: (value) => value.length !==0
                    })} />
  {errors.position  && (
        <p className='p'>Please fill out this field</p>
      )}

                <label htmlFor="company">Company</label>
                <input type="text" 
                     {...register("company", {
                      validate: (value) => value.length !==0
                    })} />
  {errors.company  && (
        <p className='p'>Please fill out this field</p>
      )}
    <label htmlFor="email">Email</label>
                <input  type="text" 
                     {...register("email", {
                      validate: (value) => emailRegex.test(value)
                    })} />
  {errors.email  && (
        <p className='p'>Please fill out this field</p>
      )}


                <label htmlFor="type">User Type</label>
                <select 
              
                    
                     placeholder="Choose one..." type="text"
                     {...register("type", {
                      validate: (value) => value !=="Choose one.."
                    })} 
                     >
                    <option>Choose one..</option>
                    <option value='Human Resource'>Human resource</option>
                    <option value='Job Seeker' > Job seeker</option>
                 
                </select>
                {errors.type  && (
        <p className='p'>Please select an item in the list.</p>
                    )}

                <button type="submit" >Sign Up</button>
            </form>
            <div style={{marginTop:'8px'}} >
            <p>Already on AutoHire? <a href='/login' className="aa"> Sign in</a></p>
            </div>
            <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        
       
      />
     </div>  
     </div>
     </div>
)
}

export default Signup