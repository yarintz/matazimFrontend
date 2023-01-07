import React, {useEffect, useState} from 'react';

import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import '../index.css';
import { Button } from 'react-bootstrap';




const CoursesMenu = () => {
    const[token] = useCookies(['mr-token']);
    const[allClasses, setAllClasses] = useState([]);
    const [user,setUser] = useState([]);
    useEffect(() =>{
        if(!token['mr-token']) window.location.href = '/Signin';
  
        API.getUserDetails(token['mr-token'])
          .then(resp => setUser(resp.results))  
          .catch( error => console.log(error))
        // API.getAllClasses()
        //   .then(resp => setAllClasses(resp))
        //   .catch( error => console.log(error))

    }, [])
    const goToCourses = () =>{   
        window.location.href ='/CoursesMainScreen'; 
    }
    const goToMyClass = (userClass) =>{    
        window.location.href ='/MyClass?class=' + userClass; 
    }
    return (    
        <>
        <div className="App" >
        <header className="Header">
        <h1>למידה</h1>
        {console.log(user)}
        </header>
        <button onClick={goToCourses}>לשיעורים מקוונים</button><br/><br/> 
         {/*present all the classes belongs to the user  */}
            <p>:הכיתות שלי</p><br/>
                  <ul>
                {user.userType == "1" ? user.studentClasses && user.studentClasses.map(userClass => { 
                return <p>              
                  <p class = "username" onClick={() => goToMyClass(userClass.id)}>
                  {userClass.className}</p><br/>                            
             </p>                
          }):""}
                          {user.userType == "2" ? user.matatzClasses && user.matatzClasses.map(userClass => { 
                return <p>              
                  <p class = "username" onClick={() => goToMyClass(userClass.id)}>
                  {userClass.className}</p><br/>                            
             </p>                
          }):""}
                          {user.userType == "3" ? user.teacherClasses && user.teacherClasses.map(userClass => { 
                return <p>              
                  <p class = "username" onClick={() => goToMyClass(userClass.id)}>
                  {userClass.className}</p><br/>                            
             </p>                
          }):""}
                          {user.userType == "4" ? user.coordinatorClasses && user.coordinatorClasses.map(userClass => { 
                return <p>              
                  <p class = "username" onClick={() => goToMyClass(userClass.id)}>
                  {userClass.className}</p><br/>                            
             </p>                
          }):""}
          </ul>
                 
                   


           
        </div></>
    
    );
    
  };

         
export default CoursesMenu;