import React, { useState, useEffect } from 'react'
import './Feed.css'

import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move'
import { configureStore } from '@reduxjs/toolkit'
import {url} from './BaseUrl'
import axios from 'axios' ;
import { useHistory } from 'react-router'

function Feed() {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([])
    let history = useHistory()

    useEffect(() => {
        
        axios.get(`${url}offre/All/Offre`).then( res => {
         
           setPosts(res.data)
          })   
        }
            
           
   ,[])
   const Navigate =(industry)=>{
    history.push({pathname:'/company',
     search:  'industry'+'='+industry,
     state: { industry}
     });
       }
    const sendPost = e => {
        e.preventDefault();
        
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        
        setInput("")
    }
    
    return (
        <div className="feed">
            {/* <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)}type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>
             */}
             
            <FlipMove key="hamm">
            {posts.map(({ id,  titre, industry, description  }) => (
                              <p  onClick={()=>Navigate(industry)} >    {industry}


                <Post 
                key={id}
                name={titre}
               description={industry}
                message={description}
                photoUrl={industry}
              
                />  </p>
            ))}
            </FlipMove>
        </div>
    )
}

export default Feed
