import 'react-dropdown/style.css';
import React, {useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import '../index.css';
import '../Report.css';
import { Button } from 'react-bootstrap';
import { render, waitFor } from '@testing-library/react';

const CoordinatorReport = () => {
  const[token] = useCookies(['mr-token']);
  const [teacher,setTeacher] = useState([]);
  const [studentInClass, setsStudentsInClass] = useState([]);
  const [matatzesInClass, setsMatatzesInClass] = useState([]);
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search); 
  const IdUserFromURL = params.get('idUser');
  const [userCourses, setUserCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [coordinatorClasses, setCoordinatorClasses] = useState([]);
  const [currentMatatz, setCurrentMatatz] = useState();
  const classList =[];
  const studentsList =[];
  const options=[];
  const [allusers, setAllUsers] = useState([]);
  const [allTeachers, setAllTeachers] = useState([]);
  var nameOfTeacher= ""
  var studentsID = [];

function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
  )
}


        useEffect(() =>{

            console.log("id user is: ", IdUserFromURL)
            API.getUserProfileById(IdUserFromURL)
                .then(resp => getCoordinatorClasses(resp))  
                .catch( error => console.log(error))
            API.getAllUsers()
                .then(resp => setAllUsers(resp))  
                .catch( error => console.log(error))
            API.getAllTeachers()
                .then(resp => setAllTeachers(resp.results))  
                .catch( error => console.log(error))
            getAllUserCourses()
        }, [])

        useEffect(() =>{
          getAllMatatz()

          
      }, [studentInClass])

      const getAllUserCourses = () =>{        
        API.getAllUserCourses() 
   
          .then(resp =>setUserCourses(resp))
          .catch( error => console.log(error))
      }
  
      const getAllCourses = () =>{        
        API.getAllCourses() 
       
          .then(resp =>setCourses(resp))
          .catch( error => console.log(error))
      }

    const getCoordinatorClasses= (coordinator) =>  {
           setTeacher(coordinator)
           console.log("teacher 3 is:", coordinator)
           coordinator.coordinatorClasses && coordinator.coordinatorClasses.map(coordinatorClass => { 
                                return <p>  
                                {classList.push(coordinatorClass.id)}            
                                {setCoordinatorClasses((coordinatorClass) => [...coordinatorClass, coordinatorClass])}                           
                            </p>                
                        }) 
            getAllCoordinatorStudents()
            getAllCourses()
    }


    const getAllMatatz= () =>  {    
      console.log("studentInClass len: ",studentInClass.length )
      studentInClass && studentInClass.map(student =>{
        console.log("student is: ",student )
        API.getStudentsMatatz(student.id)
         .then(resp => setsMatatzesInClass((matatzesInClass) => [...matatzesInClass.concat(resp.results)]))
        console.log("inside for ", options)
      } )
    }
  



   
    const getDataOfClass= (numOfClass) =>  { 
      console.log("2- class is: ", numOfClass)
      API.getClassStudentsByID(numOfClass)
         .then(resp => setsStudentsInClass((studentInClass) => [...studentInClass.concat(resp.results)]))
         .catch( error => console.log(error))
      API.getClassMatatzesByID(numOfClass)
         .then(resp => setsStudentsInClass((studentInClass) => [...studentInClass.concat(resp.results)]))
         .catch( error => console.log(error))
      }


      const getAllCoordinatorStudents = () =>{
        sleep(100).then(()=>{
        console.log("list :", classList)
       
        classList.map(classId => {  
            console.log("time:",classId)
             getDataOfClass(classId)

        }) 
        sleep(100).then(()=>{  
        console.log("students are:  ", studentsList)
        })  
            })    

      }



    
    return (   
    
   
    <div className="Report">
      <h4>שם רכז:</h4>
      <p>{teacher.firstName}</p>

      <table>
        <tr>
          <th>תלמיד</th>
          <th>באדג'ים</th>
          <th>כיתה</th>
          <th>מורה</th>
          <th>מטצ</th>
          {courses.map(course => {
          return (
            // <tr>
          <th>{course.name}</th>      
        )
        
    })}
    </tr>
      
    {/* {matatzesInClass && matatzesInClass.map(matatz => { 
          return <td>{matatz.username}</td>
          }) 
        } */}

              {console.log("im here ",studentInClass )}
        
        {studentInClass.map(student => {
       //check if this student had already added to the table
        if(studentsID.includes(student.id))
        return 
        {studentsID.push(student.id)}
          return <tr>
              {console.log("student: ", student)}
              {console.log("classList: ", classList)}
              {/* {studentsID.push(student.firstName)} */}
              {/* {console.log("teacherClasses:  ", teacherClasses)} */}
              <td>{student.firstName+ " "+ student.lastName}</td>
              <td>{student.badges}</td>
              <td>{student.userType==="1" ? student.studentClasses[0].className: student.matatzClasses[0].className}</td>
          
              {/* {allTeachers && allTeachers.map(teacher => {
              return <p>{teacher.teacherClasses.map(Teacherclass=>{
                  console.log("a", Teacherclass.id)
                  console.log("ab",student.studentClasses[0].id)
                if(Teacherclass.id === student.studentClasses[0].id)
                // console.log("success",teacher.username)
                return <td>{teacher.username}</td>
                
              })}</p>
              })}   */}
            {/* get the teacher of the student */}
               {allTeachers && allTeachers.map(teacher => {
                  {teacher.teacherClasses.map(Teacherclass=>{
                    if(student.userType==="1") 
                    if(Teacherclass.id === student.studentClasses[0].id)
                      nameOfTeacher = teacher.username
                    if(student.userType==="2") 
                      if(Teacherclass.id === student.matatzClasses[0].id)
                        nameOfTeacher = teacher.username
                      // return <tr><td style={{"borderTop": "1px", "borderWidth":"1px", 'border':"10px", 'borderStyle':'solid','borderBottom':"1px", 'position': "relative"}}>{teacher.username}</td> </tr> 
              })}
              })}
              <td>{nameOfTeacher}</td>
               {/*get the mataz of the student  */}           
              {allusers.map(matatz => {
              if(student.mataz === matatz.id)
              return <td>{student.userType==="2"? "-":matatz.username}</td>
              })}
              

        {/* /* go through all the courses in the list and check if the user has benn registerd to the course */} 
        {courses.map(c => { 
            var foundCourse = false;
            return <td>
                {userCourses.map(course => {
                  {console.log("qqqqqqq",course.course,c.id, course.user, student.user  )}
                    if(course.course==c.id && course.user==student.user)
                    {
                        foundCourse = true;
                        return <td style={{ background: "lightgreen", borderBottom: "none", borderTop: "none" }}>{course.numOfLesson}</td>
                    }
                    // return <td>{course.user==student.user && course.course==c.id? course.numOfLesson:""}</td> 
                    //  return<td>{course.course==c.id && course.user==student.user? () =>setCourseFound(true)+course.numOfLesson :"" }</td>
                    //working -  return<td>{course.course==c.id && course.user==student.user? course.numOfLesson:"" }</td>

                })} 
               {/* <td style={{ background: "red", borderBottom: "none", borderTop: "none" }}>{foundCourse?"":"לא רשומ/ה"}</td> */}
               <td style={{ background: foundCourse? "none":"#CD5C5C", borderBottom: "none", borderTop: "none" }}>{foundCourse?"":"לא רשומ/ה"}</td>
              {/* <td>{"אין"}</td> */}
              
              </td>
            {/* </tr> */}
            
})}


            </tr>
            })}

         {/* })}  */}
      </table>
    
    </div> 
);  
                  };
 

   
  
export default CoordinatorReport;