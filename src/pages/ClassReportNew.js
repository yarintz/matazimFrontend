import 'react-dropdown/style.css';
import React, {useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import '../index.css';
import '../Report.css';
import { Button } from 'react-bootstrap';

const TeachersScreen = () => {
  const[token] = useCookies(['mr-token']);
  const [user,setUser] = useState([]);
  const [selectedClass, setSelectedClass] = useState();
  const [studentInClass, setsStudentsInClass] = useState([]);
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search); 
  const IdClassFromURL = params.get('idClass');
  const ClassNameFromURL = params.get('className');
  const [userCourses, setUserCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [currentCourseName, setCurrentCourseName] = useState();
  const studentsList =[];
  const [courseFound, setCourseFound] = useState(false);

  

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
    //old version
    // <div className="App">     
    //    { user.userType=="1"? window.location.href = '/Homepagescreen': " "}    
    //   <h1>דוח כיתה</h1>     
    //   <h3>:תלמידים</h3>
      
    //    {/*add the usernames of all the students of the selected class */}
    //    {studentInClass.map(student => { 
        
   
    // {studentsList.push(student.user)}
    //                 return <p>
                        
                        
    //                      &nbsp;
    //                      <h5>
                    
    //                     {student.firstName+ " "+ student.lastName}
    //                     </h5>

                        
                            
    //                          {console.log("courses list: ",userCourses)}
    //                          {userCourses.map(course => { 
    //                             return  <p>              
    //                              {/* //working */}
    //                              {/* <p> {course.user==student.user?   course.course+" ("+course.numOfLesson+")": ""}</p>  */}
    //                               {course.user==student.user?  courses.map(c => {
    //                                return <p>{course.course==c.id? c.name+" ("+course.numOfLesson+")": ""} </p>
                                 
                               
    //                              }):""} 
    //                              </p> 
    //                             })}
    //                             <br/></p>                      
    //                           })}

    //                           </div>
    <div className="Report">
      <h3 style={{textAlign: "center" }} >{ClassNameFromURL} :שם כיתה </h3>
      <table>
        <tr>
          <th>תלמיד</th>
          <th>באדג'ים</th>
          {courses.map(course => {
          return (
            // <tr>
          <th>{course.name}</th>      
        )
        
    })}
    </tr>

         {studentInClass.map(student => {
          return <tr>
            
              <td>{student.firstName+ " "+ student.lastName}</td>
              <td>{student.badges}</td>
              {/* </tr> */}
        
        {/* go through all the courses in the list and check if the user has benn registerd to the course */}
        {courses.map(c => { 
            var foundCourse = false;
            return <td>
                {userCourses.map(course => {
                    if(course.course==c.id && course.user==student.user)
                    {
                        foundCourse = true;
                        return <td style={{ background: "lightgreen", borderBottom: "none", borderTop: "none" }}>{course.numOfLesson}</td>
                    }
                    // return <td>{course.user==student.user && course.course==c.id? course.numOfLesson:""}</td> 
                    //  return<td>{course.course==c.id && course.user==student.user? () =>setCourseFound(true)+course.numOfLesson :"" }</td>
                    //working -  return<td>{course.course==c.id && course.user==student.user? course.numOfLesson:"" }</td>

                })} 
              
              <td style={{ background: foundCourse? "none":"#CD5C5C", borderBottom: "none", borderTop: "none" }}>{foundCourse?"":"לא רשומ/ה"}</td>
              {/* <td>{"אין"}</td> */}
              
              </td>
            {/* </tr> */}
            
})}

            {/* {userCourses.map(course => { 
                return <tr> */}
                {/*go through all the list of UserCourse and continue if the course belong to the current student  */}
                {/* {course.user==student.user?  courses.map(c => {
                return <td>{course.course==c.id? course.numOfLesson: <tr><td>{"אין"}</td></tr>}</td>
                }):""} 
                </tr> */}
                {/* // )}
            })}  */}
            </tr>
            })}
      </table>
    </div> 
);  
                            };
 

   
  
export default TeachersScreen;