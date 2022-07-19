import React, {useEffect, useState} from 'react';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import Signin from './Signin'; 
import { useHistory } from "react-router-dom";
import Popup from '../components/Popup';
import '../index.css';
import UpdateUserDetails from '../components/UpdateUserDetails'
const axios = require('axios');


const UserProfile = () => {
    console.log("hiiiiiiiiii");
    // const history = useHistory();
    // const handleRoute = () =>{ 
    //     history.push("/UpdateUserDetails");
    //   }
    const [token] = useCookies(['mr-token']);
    const search = window.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const IdFromURL = params.get('id');
    const IdUserFromURL = params.get('idUser');
    const IdClassFromURL = params.get('idClass');
    const [user,setUser] = useState([]);
   // const [courses,setCourses] = useState([]);
    const [userCourses, setUserCourses] = useState([]);
    const [actionsPopup, setActionsPopup] = useState(false);
    //   test
    //const [studentsInClass, setsStudentsInClass] = useState([]);



    useEffect(()=>{
        console.log("id from url is: ", IdFromURL)
        API.getUserProfileById(IdFromURL)
         .then(resp => setUser(resp))  
         .catch( error => console.log(error)) 


          //get all the courses of the selected user 
          API.getAllCoursesByUserId(IdUserFromURL) 
            .then(resp => getCourseName(resp.results)) 
            .catch( error => console.log(error))
    }, [])

    const getCourseName = (courses) =>{
      console.log("in fun",courses)
      courses.map(course => { 
          API.getCourses(course.course) 
               .then(resp => setUserCourses((userCourses) => [...userCourses, resp]))
   })     
  }
    // const getCourseName = (courses) =>{
    //     console.log("in fun",courses)
    //     courses.map(course => { 

    //         API.getCourses(course.course) 

    //              .then(resp => setUserCourses((userCourses) => [...userCourses, resp]))

    //  }) 
    
    // }
    
    const backToClass= () =>  {
      window.location.href ='/TeachersScreen?class=' + IdClassFromURL;
      }
      const actions= () =>  {
        setActionsPopup(true)
        }
        const checkAssignments= () =>  {
          window.location.href ='/CheckUserAssignments?id=' + IdUserFromURL;
          }


    return(
        <div className="App">
        <header className="Header"> הדף של {user.firstName}  {user.lastName}</header>
        <div className="profile">
            <div>
        <h4>שם משתמש:</h4>
         <p>{user.username}</p>
         {console.log("user data: ",user)}

         {/* test */}
         {/* {console.log("user class is: ",user.studentClasses && user.studentClasses[0].className)}
         {console.log("the students in class number 2 are: ",studentsInClass)} */}
        
         <br/>

         <h4>שם פרטי: </h4>
         <p>{user.firstName}</p>
         <br/>

       <h4>שם משפחה:</h4>
       <p>{user.lastName}</p>
       </div>
        <div>
        {/* <h4>דואר אלקטרוני:</h4>
       <p>{user.email}</p> */}
         
       <h4>קצת עליי..</h4>
       <p>{user.aboutMe}</p>

       <h4>הקורסים שלי:</h4>
        { userCourses.map(course => { 
                return <p>                
                  <p>
                  {course.name} </p>                           
            </p>                
          })}
      
      <h4>הכיתות שלי:</h4>
      { user.studentClasses && user.studentClasses.map(userClass => { 
                return <p>              
                  <p>
                  {userClass.className} </p>                             
             </p>                
          })} 


      
       </div>
       <div>
       <h4>תחביבים:</h4>
       <p>{user.hobbies}</p>
       <br/>
       <h4>הבאדג'ים שלך:</h4>
         <p>{user.badges}</p>
        
         <br/>
         <h4>המטרה שלי:</h4>
         <p>{user.myGoal}</p>
       </div>
       </div>
       <button onClick={actions}>פעולות</button><br/>
        <button onClick={backToClass}>חזרה לכיתה</button>
        <Popup trigger={actionsPopup} setTrigger={setActionsPopup}>
  {<button onClick={() => checkAssignments()}>בדוק מטלות</button>}<br/>
  {<button onClick={() => backToClass()}>הוסף לתת קבוצה</button>}<br/>
  {<button onClick={() => backToClass()}>הענק תג</button>}
</Popup>
        </div>
        
    )
}


export default UserProfile;