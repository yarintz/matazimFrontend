import React, {useEffect, useState} from 'react';

import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import '../index.css';
import { Button } from 'react-bootstrap';
import '../Courses.css';



const FrontalLessonMenu = () => {
    const[token] = useCookies(['mr-token']);
    const [lessonDetails,setLessonDetails] = useState([]);
    const [user,setUser] = useState([]);
    const[selectedCourse, setSelectedCourse]= useState([])
    const search = window.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const course = params.get('course');
    const classId = params.get('class');

    useEffect(() =>{
        if(!token['mr-token']) window.location.href = '/Signin';
        console.log("course ", course)
        API.getUserDetails(token['mr-token'])
          .then(resp => setUser(resp.results))  
          .catch( error => console.log(error))
        API.getCourseById(course)
          // .then(resp => console.log(resp)) 
          .then(resp => setSelectedCourse(resp))  
          .catch( error => console.log(error))

    }, [])
    const goToLesson = (lesson) =>{
        console.log(lesson)      
        window.location.href ='/FrontalLesson?lesson=' + lesson.id + "&class=" + classId; 
    }
    return (    
        <>
        <div className="App" >
        <header className="Header">
        <h1>שיעור פרונטאלי</h1>
        </header> 
            <p>:שיעורים</p>


{selectedCourse.frontalLessons && selectedCourse.frontalLessons.map(lesson =>{
                  return <ul class= "frontalLessonsList">
                  <li onClick={() => goToLesson(lesson)}>
                  {lesson.numOfLesson}  </li></ul>})}            
  
{/* {selectedCourse.frontalLessons && selectedCourse.frontalLessons.map(lesson =>{
                  return <button 
                  onClick={() => goToLesson(lesson)}>
                  {lesson.numOfLesson} </button>  })}                   */}


           
        </div></>
       
    );
    
  };

         
export default FrontalLessonMenu;