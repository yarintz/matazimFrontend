import 'react-dropdown/style.css';
import React, {useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import '../index.css';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
// import * as React from "react";
import * as ReactDOM from "react-dom";
import Popup from '../components/Popup';
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

const FrontalLessonAnswers = () => {
  const[token] = useCookies(['mr-token']);
  const [user,setUser] = useState([]);
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const classId = params.get('classId'); 
  const lessonID = params.get('lesson');
  const lessonName = params.get('lessonName');
  const className = params.get('class');
  const[allLessonStudents,setAllLessonStudents] = useState([]);
  const[exerciseGradePopup, setExerciseGradePopup ] = useState(false); 
  const[exerciseGrade, setExerciseGrade ] = useState(1); 
  const[projectGradePopup, setProjectGradePopup ] = useState(false); 
  const[projectGrade, setProjectGrade ] = useState(1); 
  const[userFrontalId, setUserFrontalId ] = useState(); 
  const [allStudentsOfClass, setAllStudentsOfClass] = useState([]);
  var studentsID = []; // holds the id's of the students who submited exercieses or projects
  const [student, setStudent] = useState([]);
  // const [student, setStudent] = useState([]);

  const studentsList =[];
  
        useEffect(() =>{
            API.getUserFrontalLessonsByLesson(lessonID)
                // .then(resp => console.log(resp.results[0].user))  
                .then(resp => setAllLessonStudents(resp.results))  
                .catch( error => console.log(error))
            API.getClassStudentsByID(classId)
                // .then(resp => console.log(resp.results))
                .then(resp => setAllStudentsOfClass(resp.results))
                .catch( error => console.log(error))
            }, [lessonID])
           
    function sleep(time){
        return new Promise((resolve)=>setTimeout(resolve,time)
      )
  }
  const updateExerciseGrade = (id) => {
    setUserFrontalId(id)
    setExerciseGradePopup(true)
    };
  const saveNewExerciseGrade = () => {
    console.log("exercise")
    console.log(typeof(exerciseGrade))
    // API.updateExerciseGrade(exerciseGrade, userFrontalId)
    API.updateExerciseGrade(exerciseGrade, userFrontalId)
    // API.updateExerciseGrade(parseInt(exerciseGrade, 10), userFrontalId)
    setExerciseGradePopup(false)
    };
  const exerciseUp = () => {
    setExerciseGrade(exerciseGrade+1)
    };
  const exerciseDown = () => {
    setExerciseGrade(exerciseGrade-1)
    };
  const updateProjectGrade = (id) => {
    setUserFrontalId(id)
    setProjectGradePopup(true)
    };
  const saveNewProjectGrade = () => {
    console.log("here:",projectGrade,userFrontalId )
    console.log("projectGrade")
    console.log(typeof(projectGrade))
    API.updateProjectGrade(parseInt(projectGrade, 10), userFrontalId)
    // API.updateProjectGrade(projectGrade, userFrontalId)
    setProjectGradePopup(false)
    };
  const projectUp = () => {
    setProjectGrade(projectGrade+1)
    };
  const projectDown = () => {
    setProjectGrade(projectGrade-1)
    };
    return (   
    



    <div className="App"> 
      {allLessonStudents.map(student => {
      studentsID.push(student.user)})}    
    <h2>{className}</h2>
    <h2>{lessonName}</h2>
    {console.log(className)} 

    { user.userType=="1"? window.location.href = '/Homepagescreen': " "}    
       <table>
        <tr>
          <th>תלמיד</th>
          <th>תרגיל</th>
          <th>ציון תרגיל</th>
          <th>פרוייקט </th>
          <th>ציון פרוייקט</th>
          {/* {courses.map(course => {
          return (
            // <tr>
          <th>{course.name}</th>      
        )
        
    })} */}
    
    </tr>
    {console.log("llLessonStudents")}
    {console.log(allLessonStudents)}
     
    {allStudentsOfClass && allStudentsOfClass.map( s => {
    if(studentsID.includes(s.user))
    {
    var studentsFound = true;
    const student = s; 
    // return <tr><td>{s.firstName +" "+ s.lastName}</td>
    // </tr>
    } 
    else
    var studentsFound = false; 

    if(studentsFound){
      {allLessonStudents.map(student => {
      if(student.user === s.user)
        student = student
      else{
        student = s  
      }

      //   return <td>
      // <td>{s.firstName +" "+ s.lastName}</td>
      // {/* <td style={{ background: student.exercise!=""? "none":"#CD5C5C"}}>{student.exercise==""?"לא הוגש":<a href={student.exercise}>{student.exercise}</a>}</td> */}
      // {/* <td>ggg</td>
      // <td>ddd</td> */}
      // </td>

        })}
       
    }return<tr>
    <td>{s.firstName +" "+ s.lastName}</td>
    {studentsFound ? 
      allLessonStudents.map(student => {
        if(student.user === s.user)
        return <td style={{ background: student.exercise!=""? "none":"#CD5C5C"}}>{student.exercise==""?"לא הוגש":<a href={student.exercise}>{student.exercise}</a>}</td>  
      }): <td style={{ background: "#CD5C5C"}}> לא הוגש</td>}

    {studentsFound ? 
      allLessonStudents.map(student => {
        if(student.user === s.user)
        return <td style={{ color: student.exerciseGrade!=0? "none":"#CD5C5C"}}>{student.exerciseGrade==0? "לא ניתנה הערכה": student.exerciseGrade}<br/>
    <button onClick={() => updateExerciseGrade(student.id)}> עדכן ציון</button></td>}):<td>לא הוגש</td>}
  
    {studentsFound ? 
      allLessonStudents.map(student => {
        if(student.user === s.user)
        return <td style={{ background: student.project!=""? "none":"#CD5C5C"}}>{student.project==""?"לא הוגש":<a href={student.project}>{student.project}</a>}</td>  
      }): <td style={{ background: "#CD5C5C"}}  > לא הוגש</td>}

{studentsFound ? 
      allLessonStudents.map(student => {
        if(student.user === s.user)
        return <td style={{ color: student.exerciseGrade!=0? "none":"#CD5C5C" }}>{student.projectGrade==0? <b>לא ניתנה הערכה</b>:student.projectGrade}<br/>
        <button onClick={() =>updateProjectGrade(student.id)}> עדכן ציון</button></td>}):<td > לא הוגש</td>}


    </tr>
  //   {allLessonStudents.map(student => {
  //   if(student.user === s.user)

  //   return <tr>
  // <td>{s.firstName +" "+ s.lastName}</td>
  // <td style={{ background: student.exercise!=""? "none":"#CD5C5C"}}>{student.exercise==""?"לא הוגש":<a href={student.exercise}>{student.exercise}</a>}</td>
  // <td>ggg</td>
  // <td>ddd</td>
  // </tr>
  //   })}
    {/* <td>{s.firstName +" "+ s.lastName}</td> */}

    {/* {allLessonStudents.some(student => {
    if (student.user === s.user) {
      // const student = element
      console.log("found!")
      // cobst student = 
      return  <p> 
        {console.log("s is: " +s.lastName)}
  <td>{s.firstName +" "+ s.lastName}</td> */}

  // return <p> {allLessonStudents.map(student => {
  // if(student.user === s.user)
 
  // return <tr>
  // <td>{s.firstName +" "+ s.lastName}</td>
  // <td style={{ background: student.exercise!=""? "none":"#CD5C5C"}}>{student.exercise==""?"לא הוגש":<a href={student.exercise}>{student.exercise}</a>}</td>
  // <td>ggg</td>
  // <td>ddd</td>
  // </tr>
  // })}</p>
  {/* <td style={{ background: student.exercise!=""? "none":"#CD5C5C"}}>{student.exercise==""?"לא הוגש":<a href={student.exercise}>{student.exercise}</a>}</td>})} */}
  {/* <td style={{ color: student.exerciseGrade!=0? "none":"#CD5C5C"}}>{student.exerciseGrade==0? "לא ניתנה הערכה": student.exerciseGrade}<br/>
  <button onClick={() => updateExerciseGrade(student.id)}> עדכן ציון</button>
  </td>

  <td style={{ background: student.project!=""? "none":"#CD5C5C"}}>{student.project==""?"לא הוגש":<a href={student.project}>{student.project}</a>}</td>
  <td style={{ color: student.exerciseGrade!=0? "none":"#CD5C5C" }}>{student.projectGrade==0? <b>לא ניתנה הערכה</b>:student.projectGrade}<br/>
  <button onClick={() =>updateProjectGrade(student.id)}> עדכן ציון</button>
  </td> */}
  {/* </p> */}
    {/* // }
 
    // console.log("not found!")
    // setStudent(s) */}

    {/* // })} */}
 
  })} 
  {/* // {console.log(student)} */}




       {/* { user.userType=="1"? window.location.href = '/Homepagescreen': " "}    
       <table>
        <tr>
          <th>תלמיד</th>
          <th>תרגיל</th>
          <th>ציון תרגיל</th>
          <th>פרוייקט </th>
          <th>ציון פרוייקט</th>
          {/* {courses.map(course => {
          return (
            // <tr>
          <th>{course.name}</th>      
        )
        
    })} */}
    
    {/* </tr>
    {console.log("llLessonStudents")}
    {console.log(allLessonStudents)} */}
    {/* {allStudentsOfClass && allStudentsOfClass.map( s => {
    return <p>  */}
    {/* {allLessonStudents && allLessonStudents.map(student => {
    // if(s.id == student.id){
          return <tr>
              <td>{student.user}</td>
              <td style={{ background: student.exercise!=""? "none":"#CD5C5C"}}>{student.exercise==""?"לא הוגש":<a href={student.exercise}>{student.exercise}</a>}</td>
              <td style={{ color: student.exerciseGrade!=0? "none":"#CD5C5C"}}>{student.exerciseGrade==0? "לא ניתנה הערכה": student.exerciseGrade}<br/>
              <button onClick={() => updateExerciseGrade(student.id)}> עדכן ציון</button>
              </td>
              {/* <td>{ReactDOM.render(<NumericTextBoxComponent value={10}/>, document.getElementById('numericContainer'))}</td> */}
              {/* <td style={{ background: student.project!=""? "none":"#CD5C5C"}}>{student.project==""?"לא הוגש":<a href={student.project}>{student.project}</a>}</td>
              <td style={{ color: student.exerciseGrade!=0? "none":"#CD5C5C" }}>{student.projectGrade==0? <b>לא ניתנה הערכה</b>:student.projectGrade}<br/>
              <button onClick={() =>updateProjectGrade(student.id)}> עדכן ציון</button>
              </td>
              </tr>})}
              {/* </p>})} */}
    </table> 
 {/* popup for update exercise grade */}     
<Popup trigger={exerciseGradePopup} setTrigger={setExerciseGradePopup}>  
<h3>הערכה לתרגיל</h3>
<p>:הכנס ציון</p>
{exerciseGrade>4? <br/>:<AiOutlineArrowUp class = "username" onClick={exerciseUp}/>}
<p>{exerciseGrade}</p>
{exerciseGrade<2? "":<AiOutlineArrowDown class = "username" onClick={exerciseDown}/>}<br/>
  <button onClick={saveNewExerciseGrade}>עדכן</button>    
</Popup>
{/* popup for update project grade */}
<Popup trigger={projectGradePopup} setTrigger={setProjectGradePopup}>  
<h3>הערכה לפרוייקט</h3>
<p>:הכנס ציון</p>
{projectGrade>4? <br/>:<AiOutlineArrowUp class = "username" onClick={projectUp}/>}
<p>{projectGrade}</p>
{projectGrade<2? "":<AiOutlineArrowDown class = "username" onClick={projectDown}/>}<br/>
  <button onClick={saveNewProjectGrade}>עדכן</button>    
</Popup>
</div> 

); 
};
                        
export default FrontalLessonAnswers;
                        