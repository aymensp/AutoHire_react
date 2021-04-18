import { useState, useEffect }from "react"

import FlipMove from 'react-flip-move'

import axios from 'axios' ;
import Question from "../components/Question";


function Quiz() {

  
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
      
    axios.get(`http://192.168.1.24:3000/test`).then( res => {
        console.log(res.data)
        setPosts(res.data)
       }) 

    
        
}        
,[])

  


return(
 


      <div className="full-screenable-node">  
      
      
{posts.map(
        ({question,reponseA,reponseB,reponseC,reponseD,answer}) =>
                      {
                         


                 
                   
                         
                       return  ( 
                        <FlipMove>
                        <Question
                    
                      question={question}
                     
                      />
                        </FlipMove>,
                      
                         [
                            {
                                "question": {question},
                                "choices": [{reponseA}, {reponseB}, {reponseC}, {reponseD}],
                                "answer": {answer}
                              },
                        ]

                        


    );
    })  }
     
    </div>




);
  }
  


export default Quiz ;