import 'react-dropdown/style.css';
import React, {useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import '../index.css';
import { Button } from 'react-bootstrap';

const TeachersScreen = () => {
  const[token] = useCookies(['mr-token']);
  const [user,setUser] = useState([]);
  const [selectedClass, setSelectedClass] = useState();
  const [studentInClass, setsStudentsInClass] = useState([]);
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search); 
  const IdClassFromURL = params.get('idClass');
  const [userCourses, setUserCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [currentCourseName, setCurrentCourseName] = useState();
  const studentsList =[];
  

  

//   useEffect(() =>{
//     if(!token['mr-token']) window.location.href = '/Signin';
//     console.log("idfromurl is: ", IdClassFromURL)
//     API.getUserDetails(token['mr-token'])
//       .then(resp => setUser(resp.results))  
//       .catch( error => console.log(error))
    
//     // API.getClassStudentsByID(IdClassFromURL)
//     //   .then(resp => setsStudentsInClass(resp.results)) 
//     //   .catch( error => console.log(error))  
    
//     // getDataOfClass(IdClassFromURL);
//     }, [])

       
        useEffect(() =>{
            getDataOfClass(IdClassFromURL);
            getAllUserCourses()
            getAllCourses()
            }, [IdClassFromURL])

    function sleep(time){
        return new Promise((resolve)=>setTimeout(resolve,time)
      )
  }

    const getDataOfClass= (numOfClass) =>  { 
      console.log("2- class is: ", numOfClass)
      API.getClassStudentsByID(numOfClass)
      .then(resp => setsStudentsInClass(resp.results)) 
      .catch( error => console.log(error))
    //   API.getClassTeacherssByID(numOfClass)
    //   .then(resp => setsTeachersInClass(resp.results)) 
    //   .catch( error => console.log(error))
    //   API.getClassCoordinatorsByID(numOfClass)
    //   .then(resp => setsCoordinatorsInClass(resp.results)) 
    //   .catch( error => console.log(error))
      }

      // const getCourses = (studentId) =>{
      //     console.log("id is: ", studentId)
      //   //get all the courses of the selected user  
      //   API.getAllCoursesByUserId(studentId) 
      //     .then(resp =>setUserCourses(resp.results))
      //     //  .then(resp => getCourseName(resp.results))
      //   // .then(resp => console.log(resp.results))  
      //    .catch( error => console.log(error))
      // }
      const getAllUserCourses = () =>{        
      API.getAllUserCourses() 
        // .then(resp =>console.log("results are: ",resp))
        .then(resp =>setUserCourses(resp))
        .catch( error => console.log(error))
    }

    const getAllCourses = () =>{        
      API.getAllCourses() 
     
        .then(resp =>setCourses(resp))
        .catch( error => console.log(error))
    }

      const getCourseName = (courses) =>{
        console.log("in fun",courses)
        courses.map(course => { 
            API.getCourses(course.course) 
                 .then(resp => setUserCourses((userCourses) => [...userCourses, resp]))
     })     
    }
    const getCoursename = (course) =>{
          API.getCourses(course.course) 
          .then(resp => setCurrentCourseName(resp)) 
    
  }
     

    return (   
    
    <div className="App">     
       { user.userType=="1"? window.location.href = '/Homepagescreen': " "}    
      <h1>דוח כיתה</h1>     
      <h3>:תלמידים</h3>
      
       {/*add the usernames of all the students of the selected class */}
       {studentInClass.map(student => { 
        
    //    { getCourses(student.user)} 
    {studentsList.push(student.user)}
                    return <p>
                        
                        
                         &nbsp;
                         <h5>
                           {/* {console.log(student)} */}
                        {student.firstName+ " "+ student.lastName}
                        </h5>
                        {/* &nbsp; */}
                        {/* {student.courses && student.courses.map(course => {
                          return  <span >{course.course}</span>
                        })} */}
                        {/* {userCourses.map(course => { 
                                return <p>                
                                  <p>
                                     
                                  {student.courses && student.courses[0]+" "+course.name} </p>                           
                            </p> })}    */}
                        {/* { getCourses(student.user)} */}
                        
                            
                             {console.log("courses list: ",userCourses)}
                             {userCourses.map(course => { 
                                return  <p>              
                                 {/* //working */}
                                 {/* <p> {course.user==student.user?   course.course+" ("+course.numOfLesson+")": ""}</p>  */}
                                  {course.user==student.user?  courses.map(c => {
                                   return <p>{course.course==c.id? c.name+" ("+course.numOfLesson+")": ""} </p>
                                 
                               
                                 }):""} 
                                 </p> 
                                })}
                                <br/></p>                      
                              })}

                              </div> 
);  
                            };
                                //  </p> 
                                //  course.course+" ("+course.numOfLesson+")": ""}</p> 
                                  // {/* <p>
                                  // {currentCourseName && currentCourseName.name}</p> */}
                                                             
                            // </p>              
                    
                           
                         
                        
                        // {/* { API.getAllCoursesByUserId(student.id) 
                        //     .then(resp => getCourseName(resp.results)) 
                        //     .catch( error => console.log(error))} */}
                         
                         
//                         {/* {console.log(student)}
//                         {sleep(100).then(()=>{
//                             <span >
//                             {/* {userCourses} */}
//                             {/* </span> */}
//                            {/* })}  */}
                        
                         
                      
            
//        {/*the line below make an infinite loop! */}
//        {/* {getCourses(studentsList[0])} */}
//       {/* {userCourses.length}
//       <br/>    
//       {studentsList.length} 
//       <br/>    
//       {studentsList[0]}  */}
//       {/* {getCourses(20)}      */}
//  {/* {userCourses.map(course => { 
//                                 return <p>                
//                                   <p>
                                     
//                                   {course.name} </p>                           
//                             </p> })}           */}



              // {console.log("courses list: ",userCourses)}
          //     {/* <p>
          //         sdfdfs </p>  
          //     { userCourses.map(course => { 
          //       return <p>                
          //         <p>
          //         {course.name} </p>                           
          //   </p>                 */}
          // {/* })} */}

   
  
export default TeachersScreen;