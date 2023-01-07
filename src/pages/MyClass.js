import React, {useEffect, useState} from 'react';

import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import '../index.css';
import { Button } from 'react-bootstrap';




const MyClass = () => {
    const[token] = useCookies(['mr-token']);
    const[userClass, setUserClass] = useState([]);
    const[school, setSchool] = useState([]);
    const [user,setUser] = useState([]);
    const [frontalCourses,setFronalCourses] = useState([]);
    const search = window.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const classId = params.get('class');
    useEffect(() =>{
        if(!token['mr-token']) window.location.href = '/Signin';
  
        API.getUserDetails(token['mr-token'])
          .then(resp => setUser(resp.results))  
          .catch( error => console.log(error))
        API.getClass(classId)
          .then(resp => setUserClass(resp))
          .catch( error => console.log(error))
        API.getFronalCoursesByClass(classId)
        //   .then(resp => console.log(resp.results[0].name))
          .then(resp => setFronalCourses(resp.results))
          .catch( error => console.log(error))
        // sleep(1000).then(()=>{
        // API.getSchool(userClass.school)
        //   .then(resp => setSchool(resp))
        //   .catch( error => console.log(error))
        // })

    }, [])

    useEffect(() =>{
        API.getSchool(userClass.school)
          .then(resp => setSchool(resp))
          .catch( error => console.log(error))
    }, [userClass])
    const goToCourse = (courseId) =>{   
        window.location.href ='/FrontalLessonMenu?course=' + courseId + "&class=" + classId; 
    }
    const goToMyClass = (userClass) =>{    
        window.location.href ='/MyClass?class=' + userClass; 
    }
    function sleep(time){
        return new Promise((resolve)=>setTimeout(resolve,time)
      )
  }
    return (    
        <>
        <div className="App" >
        <header className="Header">
        <h1>{userClass.className}</h1><br/>
        </header>
        <p>:בית ספר</p>
        <p>{school.schoolName}</p><br/>
        <p>:קורסים פרונטאליים</p>
                <ul>
                {frontalCourses.map(course => { 
                return <p>              
                  <p class = "username" onClick={() => goToCourse(course.id)}>
                  {course.name}</p><br/>                            
             </p>                
          })}</ul>

        </div></>   
    );    
  };
       
export default MyClass;