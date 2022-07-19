import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React, {useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import '../index.css';
import { Button } from 'react-bootstrap';
import Popup from '../components/Popup';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import HomepageScreen from './HomepageScreen';

const CheckUserAssignments = () => {
  const[token] = useCookies(['mr-token']);
   const [user,setUser] = useState([]);
   const [userCourses, setUserCourses] = useState([]);
   const [userAnswers, setUserAnswers] = useState([]);
   const [selectedCourse, setSelectedCourse] = useState();
   const [studentInClass, setsStudentsInClass] = useState([]);
   const [teachersInClass, setsTeachersInClass] = useState([]);
   const [coordinatorsInClass, setsCoordinatorsInClass] = useState([]);
   const search = window.location.search; // returns the URL query String
   const params = new URLSearchParams(search); 
   const IdUserFromURL = params.get('id');
   const lessonsList =[];
   const options=[];
   const defaultOption = '';
   const[answerPopup, setAnswerPopup ] = useState(false); 
   const[selectedLesson, setSelectedLesoon ] = useState(); 
   

  useEffect(() =>{
    if(!token['mr-token']) window.location.href = '/Signin';
    //console.log("idfromurl is: ", IdClassFromURL)
    API.getUserDetails(token['mr-token'])
      .then(resp => setUser(resp.results))  
      .catch( error => console.log(error))
   
    sleep(1000).then(()=>{
    //get all the courses belong to the selected user
     API.getAllCoursesByUserId(IdUserFromURL)
        .then(resp => getCourseName(resp.results)) 
        .catch( error => console.log(error))
      })
    
    }, [])

    const getCourseName = (courses) =>{
        courses.map(course => { 
            API.getCourses(course.course) 
                 .then(resp => setUserCourses((userCourses) => [...userCourses, resp]))
     })     
    }


      function sleep(time){
        return new Promise((resolve)=>setTimeout(resolve,time)
      )
  }


    // const getCourseDetails= () =>  { 
    //     API.getUserAnswersById(IdUserFromURL)
    //     .then(resp => setUserAnswers(resp.results)) 
    //     .catch( error => console.log(error)) 
    //     sleep(1000).then(()=>{
    //         console.log(userAnswers)
    //     })
    // }

    function handleChange(event) {
      console.log("event is: ",event);
      
      for (var i = 0; i < options.length; i++) {
        if(options[i].value == event.value ){
          console.log(options[i].key);
          setSelectedCourse(options[i].key);
        //   getCourseDetails()

          break;
        }
    } 
         }
         const showFullAnswer = (lessonId) =>{
            API.getUserAnswersById(IdUserFromURL, lessonId)
             .then(resp => setUserAnswers(resp.results)) 
             .catch( error => console.log(error)) 
            sleep(1000).then(()=>{
            console.log(userAnswers)
            })
         setSelectedLesoon(lessonId)
         setAnswerPopup(true)
         }
 
    return (   

    <div className="App">

      <h1>בדיקת מטלות</h1>
      {/* insert to options all the courses belong to this user this user.
      insert the course id as a key and the course name as the value.
      the value will be shown in the dropdown */}
      { userCourses.map(course => {
         
          {console.log("course is: ",course)}
                  {options.push({key:course.id,value:course.name})}       
          })}
    
    {/* the dropdown will hold the courses of the user and will display them by their names*/}
    <Dropdown className='dropdown' options={options} value={defaultOption} label={defaultOption.key} onChange={handleChange}  placeholder="בחר קורס" />
    <div className="profile">
    <div>
    <h3>שיעורים:</h3>

 

      { userCourses.map(course => { 
              if(course.id === selectedCourse){
      
                {lessonsList.push(course.lessons)}
               
                return <p>{course.lessons.map((lesson) =>

                <p>
                <p> { lesson.name } </p> 
                <button onClick={() => showFullAnswer(lesson.id)}>הצג תשובה לשיעור זה</button>
                <br/></p>

             )} </p>
             
                }     
          })}
</div>
      <div>
       {/* show on the screen the assignments belong to the chosen course
      <h3>מטלות:</h3>
      { userCourses.map(course => { 
              if(course.id === selectedCourse){
      
                {lessonsList.push(course.lessons)}
               
                return <p>{course.lessons.map((lesson) =>

                <p>
                <p > { lesson.assignment=="null"? "אין מטלה לשיעור זה": lesson.assignment } </p> <br/></p>

             )} </p>
                }     
          })} */}




             
</div>
<div>
{/* <h3>תשובות:</h3> */}
{/* <button onClick={showAnswer}>הצג תשובה לשיעור זה</button> */}
{/* {userAnswers && userAnswers.map(lesson => { 
               return <p>
               <p >{lesson.answer}</p> <br/>
               <a href={lesson.link}>{lesson.link}</a>
               </p>              
              })} */}
    
  </div>

    </div>
       <Popup trigger={answerPopup} setTrigger={setAnswerPopup}>
    

      
       <h3>מטלה</h3>
{/* display the assignmnet for the selected lesson */}
      { userCourses.map(course => { 
              if(course.id === selectedCourse){
                {lessonsList.push(course.lessons)}               
                return <p>{course.lessons.map((lesson) =>
                  
                  { if (lesson.id === selectedLesson){
                  {console.log("i am here!!!!!!")}
                  {console.log(lesson.id)}
                  {console.log(lesson.assignment)}
                  
                  
                // <p>                  
                    return <p > { lesson.assignment=="null"? "אין מטלה לשיעור זה": lesson.assignment } </p>              
                      // </p>
                    }}
                  )} </p>
                }     
          })}<br/>

<h3>אלו התשובות עבור שיעור זה</h3>
{/* display the answers for the selected lesson including image and link if attached */}
{userAnswers && userAnswers.map(lesson => { 
               return <p>
              

              
               <p>{lesson.answer}</p> <br/>
               <a href={lesson.link}>{lesson.link}</a> <br/><br/>
               <img src={"http://127.0.0.1:8000"+lesson.image} width='100' 
                height='100'></img>
               </p>              
              })}
        
    </Popup>
   
    </div>
     
   
   
   
  );
  
};

export default CheckUserAssignments;