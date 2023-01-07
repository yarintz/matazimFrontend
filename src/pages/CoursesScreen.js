import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import '../Courses.css';
import { API } from '../api-service';
//import {token} from '/Signin'; 
// import ReactDom from 'react-dom';
//import Popup from 'react-popup';
import Popup from '../components/Popup';
import { useCookies } from 'react-cookie';
import Signin from '../pages/Signin'; 



const CoursesScreen = () => {
  const [token] = useCookies(['mr-token']);
  console.log("token is: ", token['mr-token'])
  
  
const search = window.location.search; // returns the URL query String
const params = new URLSearchParams(search); 
const IdFromURL = params.get('id');
const linkFromURL = params.get('link');
// const courseFromUrl = params.get('course');   
console.log("now"); 
console.log(IdFromURL);
console.log(linkFromURL);


const [courses, setCourses] = useState([]);
const [userLessons, setUserLessons] = useState([]);
const [lessons, setLessons] = useState([]);
const [lessonNumber, setLessonsNumber] = useState([1]);
const [currentLesson, setCurrentLesson] = useState([]);
//the url from youtube for every lesson. changed when the user choose another lesson. the default is for the first lesson. 
const[url, setUrl ] = useState(linkFromURL);  
const[buttonPopup, setButtonPopup ] = useState(false); 
const[notePopup, setNotePopup ] = useState(false);
const[notes, setNotes ] = useState();
const[answer, setAnswer ] = useState();
const[link, setLink ] = useState();
const[userLastLesson, setUserLastLesson ] = useState(1);
const lessonsList =[];
var numOfLessons = 0;
const [file, setFile] = React.useState();
const[newImage, setNewImage] = useState(false); 
var linkRegex = '(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})'
var imageRegex = '(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i)' 
//const [playing, setPlaying] = useState()




//const displayCourses = () =>  {
  useEffect(() =>{
  var username = Signin.username
  console.log("username is:",username)
  setLessonsNumber(1) 
  API.displayCourses()
      .then( resp => setCourses(resp))
      //.then( resp => setCurrentLesson(resp[0].lessons[0]))
      .catch( error => console.log(error)) 
  API.getLessons()
      .then( resp => setLessons(resp))
      .catch( error => console.log(error)) 
  API.getUserLessons()
    .then( resp => setUserLessons(resp))
    .catch( error => console.log(error)) 
  API.getUserLastLesson(token['mr-token'],IdFromURL)
    .then( resp => setUserLastLesson(resp.results[0].numOfLesson))
    .catch( error => console.log(error))

}, [])


function handleUpload(event) {
  setFile(event.target.files[0]);
  setNewImage(true)
}
//code from internet
// var binaryData = [];
// binaryData.push(data);
// window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))

//real code!!!!!
// const ImageThumb = ({ image }) => {
//   return <img src={image && URL.createObjectURL(image)}  width='100'
//   height='100' alt={image.name} />;
  
// };
//try
const ImageThumb = ({ image }) => {
  var binaryData = [];
  binaryData.push(image);
  console.log("need to check the image: ", image)
  return <img src={image && URL.createObjectURL(new Blob(binaryData))} width='100'
  height='100' alt={image.name} />;
  
};
//console.log(parseJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'))
// const setFirstUrl= () =>  {
//   console.log("courses[0]")
//   console.log(courses[0])
//   //setUrl(courses[0].lessons[0].link)  .lessons[0].link
// }
// useEffect(() =>{ 
//   console.log("please work: ")
//   console.log(courses[0].lessons[0].link)  
// }, [courses.length > 1])

// const getFirstLesson = (courses) =>{
//   console.log("in first lesson")
//   var firstLesson = courses[0].lessons[0]
//   console.log("the first lesson is: ",firstLesson)
// }

const displayLessons = (lesson) =>{
  if(lesson.numOfLesson<=userLastLesson){
    console.log("in display lesson: ")
    console.log("last lesson is: ",userLastLesson)
    console.log(lesson)
    //console.log(parseJwt(token['mr-token']))
    console.log(userLessons)
    //console.log(token.User)
    //console.log(token['mr-token'].User)
    setUrl(lesson.link)
    console.log("lesson number is: ", lessonNumber)
    console.log("lesson id is: ",lesson.id)
    setLessonsNumber(lesson.numOfLesson)
    //works for python course -> setLessonsNumber(lesson.id === 1? 1:lesson.id-1)
    setCurrentLesson(lesson)
    console.log("after: lesson number is: ", lessonNumber)
  }
}




const playNextLesson= () =>  {
  console.log("in next lesoon fun. next lesson number is: ", lessonNumber+1);
  console.log("lesson number is: ", lessonNumber);
  console.log(lessonsList)
  // console.log("courses[0]")
  // console.log(courses[0].lessons[0])
//   var len = 2;
//  lessonsList.map(id => {return len=len+1} )

  console.log("lesson list.length is:", lessonsList[0].length);
 {lessonsList[0]  ?  lessonNumber ===  lessonsList[0].length  ?console.log("1") :console.log("2") :console.log("3") }
  //if there is ann assignmnent for these lesson - display it on a popup message. if there is no assignment - proceed to next lesson
    // if (currentLesson.assignment != "null"){
    // {lessonsList.map(lesson =>{
      // var first = lessonsList[0].name;
      // console.log(first);
      // console.log("first");
      //if there is an assignment for this lesson
    if(lessonsList[0][lessonNumber-1].assignment !="null"){
      console.log("need to be here");
      console.log(currentLesson.assignment);
      console.log("lesson number is: ", lessonNumber);
      setAnswer('')
      setLink('')
     // setFile('')

      if(currentLesson.id){
        API.getUserAnswer(token['mr-token'], currentLesson.id)
        .then( resp => setLessonDetails(resp.results[0]))
        //.then( resp => console.log("look here!!!", resp.results[0]))
        
         //.then( resp => setAnswer(resp.results[0].answer))
        // .then( resp => setLink(resp.results[0].link))
        // .then( resp => setFile(resp.results[0].image))
        .catch( error => console.log(error))
      }
      else{
        console.log("im in else")
        API.getUserAnswer(token['mr-token'], params.get('firstLessonId'))
        //.then( resp => console.log("look here!!!", resp.results[0]))
         .then( resp => setLessonDetails(resp.results[0]))
        //  .then( resp => setLink(resp.results[0].link))
        //  .then( resp => setFile(resp.results[0].image))
        .catch( error => console.log(error))
      }
       
      setButtonPopup(true);
  }
  else{
    if(userLastLesson==lessonNumber){
      API.updateUserCourse(token['mr-token'], userLastLesson+1, IdFromURL)
      setUserLastLesson(userLastLesson+1)
      }
    {lessonsList.map(lesson => {
      {console.log("inside next lesson")}
      {console.log(lesson[lessonNumber])}
      return setUrl(lesson[lessonNumber].link), setCurrentLesson(lesson[lessonNumber])
      
      // console.log(lesson[4].link);
    })}
    setLessonsNumber(lessonNumber+1)
    
  // console.log(lessonsList[3]);
 // console.log(lessonsList[4].url);
  //setLessonsNumber(lessonNumber+1)
  
  }
}
function sleep(time){
  return new Promise((resolve)=>setTimeout(resolve,time)
)
}

const setLessonDetails = (results) =>{
  console.log("inside setlessonDetails. file is: " , results.image)
  setAnswer(results.answer)
  setLink(results.link)
  setFile(results.image)
  setNewImage(false)
  // sleep(1000).then(()=>{
  //   <ImageThumb image={file} />
  // })
}


const playPreviousLesson= () =>  {
  console.log("in previous. next lesson number is:", lessonNumber-1);
  console.log("lesson number is: ", lessonNumber);
  {lessonsList.map(lesson => {
    return setUrl(lesson[lessonNumber-2].link), setCurrentLesson(lesson[lessonNumber-2])
    // console.log(lesson[4].link);
  })}
  setLessonsNumber(lessonNumber-1)
  
  // console.log(lessonNumber)
  // API.getPreviousLesson(lessonNumber-1)
  //     .then( resp => setCurrentLesson(resp))
  //     .then(console.log(currentLesson))
  //     .catch( error => console.log(error)) 
  // setUrl(currentLesson.link)
  // setLessonsNumber(currentLesson.id)  
}
//proceed to the next lesson of the course after the popup message
const proceedToNextLesson= () =>  {
if(currentLesson.answerType == "1") //type text
//validate that the text is not empty
if(answer==""){
  alert("הטקסט ריק")
  return 
}
if(currentLesson.answerType == "2") // type link
//validate that the link is correct
if(!link.match(linkRegex))
{
  alert("הלינק לא נכון")
  return 
}
if(currentLesson.answerType == "3")// type img
// validate that the image is correct
if(file&& (!(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(file.name)))
{
  alert("אין קובץ תמונה תקין")
  return 
}

  if(userLastLesson==lessonNumber){
    API.updateUserCourse(token['mr-token'], userLastLesson+1, IdFromURL)
    setUserLastLesson(userLastLesson+1)
    }
  console.log(" inside fun proceed");
  console.log(file);
  const uploadData = new FormData()
  uploadData.append('answer', answer);
  uploadData.append('link', link);
  uploadData.append('image', file);
  if(currentLesson.id){
    console.log("look here!!! ", currentLesson.id)
    API.updateUserAnswer(token['mr-token'], uploadData, currentLesson.id)}
  else
    API.updateUserAnswer(token['mr-token'], answer, link, file, params.get('firstLessonId'))
  {lessonsList.map(lesson => {
    return setUrl(lesson[lessonNumber].link), setCurrentLesson(lesson[lessonNumber])
  })}
  setLessonsNumber(lessonNumber+1)
  setButtonPopup(false)
}

const openNotes= () =>  {
  console.log(" inside openNotes");
  setNotes('')
  console.log("lesson is:",currentLesson.id)
  console.log("maybe that: ",  params.get('firstLessonId'))
  if(currentLesson.id){
    API.getUserNotes(token['mr-token'],currentLesson.id)
      .then( resp => setNotes(resp.results[0].notes))
      .catch( error => console.log(error))
  }
  else{
    console.log("im in else")
    API.getUserNotes(token['mr-token'],params.get('firstLessonId'))
      .then( resp => setNotes(resp.results[0].notes))
      .catch( error => console.log(error))
  }
  setNotePopup(true)
}
const saveNotes= () =>  { 
console.log("look here::: ", notes)
const uploadNote = new FormData()
uploadNote.append('notes', notes);
if(currentLesson.id)
  API.updateUserNotes(token['mr-token'], uploadNote, currentLesson.id)
else
  API.updateUserNotes(token['mr-token'], uploadNote, params.get('firstLessonId'))
 setNotePopup(false)
}
// if(currentLesson.id)
//   API.updateUserNotes(token['mr-token'], notes, currentLesson.id)
// else
//   API.updateUserNotes(token['mr-token'], notes, params.get('firstLessonId'))
//  setNotePopup(false)
// }
// const ref = player => {
//   player = player
// }

  return ( 

  
    <div className="App">
      <header className="Header">
      
     
      {/* <h1>{currentLesson.assignment}</h1> */}
        {/* {courses.map(lesson => {
             if(lesson.id == IdFromURL) 
                 return <h2>{lesson.name}}</h2>} */}


                 { courses.map(lesson => { 
                  if(lesson.id == IdFromURL) 
                      return <h1>{lesson.name}</h1>
                    //  return <h1>{currentLesson.id}</h1>
                     
               })}


      </header> 
      <button onClick={openNotes}>הערות</button>
      <div className="lessons">
      <div>
        {/* //working */}
      {/* {  courses.map( course => {
            return <button onClick={() => test(course)}>{course.name}</button>
          })}  */}
      {/* {  courses.map( course => {
            return <h2>{course.name}</h2>
          })}  */}
      {/* { courses.map(lesson => {
            return <h2>{lesson.lessons.map((name) => 
              <li >{name.name} </li>
              //<button onClick={displayLessons(name.name)}>{name.name} </button>
            )}</h2>
        })} */}
      </div>
      <div>
      {/* { courses.map( lesson => {         &nbsp;&nbsp;&nbsp;
          lesson.lessons.map(nam =>{
            return <h2>{nam.name}</h2>
        })
          })} */}
        </div>
       
        <div>

           {/*  display the lessons for the chosen course */ }
          { courses.map(lesson => { 
             if(lesson.id == IdFromURL){
                numOfLessons=lesson.lessons.length;
                {console.log("num of lesson is: ",numOfLessons )}
                {lessonsList.push(lesson.lessons)}
                // {setsSelectedCourse(lesson)}
                return <h2>{lesson.lessons.map((name) =>
                  <ul class={name.numOfLesson>userLastLesson? "coursesListBlocked" :name.numOfLesson == currentLesson.numOfLesson ? "currentList": "lessonsList"}>
                  <li onClick={() => displayLessons(name)}>
                  {name.numOfLesson>userLastLesson?   name.name + " (נעול)":name.name } </li> </ul>
                // <ul class={name.numOfLesson == currentLesson.numOfLesson ? "currentList": "lessonsList"}> <li onClick={() =>  displayLessons(name)}>{  name.numOfLesson>userLastLesson? name.name + " (נעול)"}b:name.name } </li> </ul>
             //}
             )}</h2> 
                } 
          })}
        
</div>
              

        <div>

          <ReactPlayer trigger={url} controls url={url} width='70%'
          height='220%'/><br/>
          {console.log("lessonsList")}
          {console.log(lessonsList)}
          {/* {numOfLessons = lessonsList.length > 0 ? lessonsList[0].length: '0'} */}
          {/* <div className="prevAndNext"> */}
            {/* <button className="prevAndNext" onClick={playNextLesson} >השיעור הבא</button> */}
            {/*lessonsList[0] &&    lessonsList[0].length*/}
            
              
           
            {/* <button className="prevAndNext" style={{display : lessonNumber ===  lessonsList[0].length  ? "": "none"}}  onClick={playNextLesson} >השיעור הבא</button>  */}
            <button className="prevAndNext" style={{display : lessonNumber ===  numOfLessons  ? "none": ""}}  onClick={playNextLesson} >השיעור הבא</button> 
            {/* <button className="prevAndNext" style={{display : lessonsList[0]!=null  &&  lessonNumber ===  lessonsList[0].length  ? "none": ""}}  onClick={playNextLesson} >השיעור הבא</button>  */}
            <button className="prevAndNext" style={{display : lessonNumber ===  1  ? "none": ""}} onClick={playPreviousLesson}>השיעור הקודם</button><br/>
     
        </div>

          {/* display as buttons all the lessons of the selected course  */}
        {/* { courses.map(lesson => {
            return <h2>{lesson.lessons.map((name) => 
             <ul class="lessonsList"> <li onClick={() => displayLessons(name)}>{name.name} </li> </ul>
              //<button onClick={displayLessons(name.name)}>{name.name} </button>
            )}</h2>
        })} */}
        


           {/* <button onClick={() => setUrl('https://youtu.be/i9-HWYsrh_k')} >שיעור 1</button><br/>
           <button onClick={() => setUrl('https://youtu.be/OWuRhPUP31s')}>שיעור 2</button><br/>
           <button onClick={() => setUrl('https://youtu.be/Ew_JiqX1EO0')} >שיעור 3</button><br/>
           <button onClick={() => setUrl('https://youtu.be/6XI_0ORZsao')}>שיעור 4</button><br/>
           <button onClick={() => setUrl('https://youtu.be/iDu4PuKNXpc')} >שיעור 5</button><br/>
           <button onClick={() => setUrl('https://youtu.be/VIAgn7_zPvU')}>שיעור 6</button><br/>
           <button onClick={() => setUrl('https://youtu.be/yPdMrpmLZ1o')} >שיעור 7</button><br/>
           <button onClick={() => setUrl('https://youtu.be/2SYkSp8bHkQ')}>שיעור 8</button><br/>
           <button onClick={() => setUrl('https://youtu.be/djYyAngqOHA')} >שיעור 9</button><br/>
           <button onClick={() => setUrl('https://youtu.be/F6OD_OCSDrQ')}>שיעור 10</button><br/>
           <button onClick={() => setUrl('https://youtu.be/hsdPUQ94TFQ')} >שיעור 11</button><br/>
           <button onClick={() => setUrl('https://youtu.be/iIFS059A1oM')}>שיעור 12</button><br/>
           <button onClick={() => setUrl('https://youtu.be/HD2s_BTtVBo')} >שיעור 13</button><br/>
           <button onClick={() => setUrl('https://youtu.be/zACdpNyH3_M')}>שיעור 14</button><br/>
           <button onClick={() => setUrl('https://youtu.be/Xn9_B_oQcC4')} >שיעור 15</button><br/>
           <button onClick={() => setUrl('https://youtu.be/K2eQyBepFoQ')}>שיעור 16</button><br/>
           <button onClick={() => setUrl('https://youtu.be/GSQEc4BxrhE')}>שיעור 17</button><br/>
           <button onClick={() => setUrl('https://youtu.be/uzZFDPQ_jyI')} >שיעור 18</button><br/>
           <button onClick={() => setUrl('https://youtu.be/Q-vWAl6AdsE')}>שיעור 19</button><br/>
           <button onClick={() => setUrl('https://youtu.be/z5zA9wMjwmQ')} >שיעור 20</button><br/>
           <button onClick={() => setUrl('https://youtu.be/HfyV9IzyaJQ')}>שיעור 21</button><br/> */}
        
        {/* <div>
          
          { courses.map( course => {
            return <h2>{course.name}</h2>
          })}
        </div> */}
          {/* course = this.props.data.map(function (co)){
          return(
          <div>
          <h2>{course.name}</h2>
          </div>
          );
      });
    } */}
    </div>
    
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <h3>לפני שעוברים לשיעור הבא יש לבצע מטלה</h3>
          {console.log("popup message")}
          {console.log(currentLesson.assignment)}
          <p>{currentLesson.assignment}</p>
          {console.log("answer is: ",answer)}
          
          <p>:טקסט חופשי</p>
          <input type = "text" value={answer} 
          onChange={e => setAnswer(e.target.value)}
          ></input>
          <br/> 
          <p>:הכנס לינק</p>
          <input type = "text" value={link} 
          onChange={e => setLink(e.target.value)}
          ></input>
        
            <p>:העלה תמונה</p>
          <input type="file" onChange={handleUpload} />
         
          {console.log("check the file in popup: ", file)}
          {/* {<img src={"http://127.0.0.1:8000/media/answers/yarinBBB%40gmail.com/IMG_20170911_091555.jpg" } width='100' 
 height='100'></img>} */}
 {/* /media/answers/yarinBBB%40gmail.com/IMG_20170912_173837.jpg */}
 {file && newImage? <ImageThumb image={file} />:  <img src={"http://127.0.0.1:8000"+file } width='100' 
 height='100'></img>}
           {/* {file == ""&& <ImageThumb image={file} />} */}
          <br/> 
          <button onClick={proceedToNextLesson}>שמור והמשך לשיעור הבא</button>
        {/* </div> */}
    </Popup>
    <Popup trigger={notePopup} setTrigger={setNotePopup}>
    
    {/* {console.log(this.player.getCurrentTime())} */}
      <h3>אלו ההערות שלך עבור שיעור זה</h3>
          {console.log("popup message 2")}
          {console.log(notes)}
          {/* {console.log(notes.results && notes.results.notes)} */}
          {console.log("end of popup message 2")}
          {/* <p>{notes}</p> */}
        
          <textarea
          name = "notesTA"
          value={notes}
          onChange={e => setNotes(e.target.value)}
          rows={5}
          cols={50}
        />
        <br/>
        <button onClick={saveNotes}>שמור</button>
        
    </Popup>
   
    </div>  

  );
};



export default CoursesScreen;
