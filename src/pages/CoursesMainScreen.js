import { API } from '../api-service';
import React, {useEffect, useState} from 'react';
import '../CoursesMain.css';
import { useCookies } from 'react-cookie';

const CoursesMainScreen = () => {
    const [coursesList, setCourses] = useState([]);
    const [token] = useCookies(['mr-token']);
    //get all the courses in the database
    useEffect(() =>{ 
        API.displayCourses()
            .then( resp => setCourses(resp))
            .catch( error => console.log(error))      
      }, [])

      const goToCourse= (course) =>  {
            if(!token['mr-token']) window.location.href = '/Signin';
            else{
                console.log("in go to course")         
                window.location.href ='/CoursesScreen?id=' + course.id + "&link=" + course.lessons[0].link + "&firstLessonId=" + course.lessons[0].id ;            
            }
      }
return ( 

   <div className="App">
      <header className="Header">
      <h1>רשימת קורסים</h1>
      </header>
      <br/> 
      <p> ברוכים הבאים לאתר הלמידה 
          כאן תמצאו קורסים שיעזרו לכם ללמוד תכנים טכנולוגיים מעשיים. 
          .הרשמו ולימדו.  </p>
          <p>הקורסים מסודרים בצורה שתאפשר לכם להתקדם בקצב שלכם ולסמן כל שיעור שעברתם. 
          .לחלקם יש מטלות לביצוע לפני שעוברים לשיעור הבא.
          </p>
          <p>המערכת מבוססת על אמון, כלומר אם סימנתם שהקשבתם לשיעור אז אנחנו מאמינים לכם 
          .בהצלחה. תהנו ותתנו משוב
          </p>   
      <br/> 
      <div>
        {/* {  courses.map( course => {
                return <ul class="tilesWrap">
                <li onClick={() => goToCourse(course)}>{course.name}</li>
                <p >{course.description}</p>
                </ul> 
            })} */}
                {  coursesList.map( course => {
                return <ul class="tilesWrap">
                    <li>
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                    <button onClick={() => goToCourse(course)} >מעבר לקורס</button>
                    </li>
                </ul> 
            })}
    </div>
</div>
  );
};

export default CoursesMainScreen;