import React, {useEffect, useState} from 'react';
import Popup from '../components/Popup';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import '../index.css';
import { Button } from 'react-bootstrap';
import { AiFillFileAdd } from 'react-icons/ai';




const FrontalLesson = () => {
    const[token] = useCookies(['mr-token']);
    const [lessonDetails,setLessonDetails] = useState([]);
    const [allFeedbacks,setAllFeedbacks] = useState([]);
    const [user,setUser] = useState([]);
    const search = window.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const LessonFromURL = params.get('lesson');
    const classId = params.get('class');
    const[getClass, setClass] = useState([]);
    const[feedbackPopup, setFeedbackPopup] = useState(false);
    const[getFeedbackPopup, setGetFeedbackPopup] = useState(false);
    const[exercisePopup, setExercisePopup] = useState(false);
    const[projectPopup, setProjectPopup] = useState(false);
    const[exerciseLink, setExerciseLink ] = useState();
    const[projectLink, setProjectLink ] = useState();
    const[feedback, setFeedback ] = useState();
    const [presentation, setPresentation] = React.useState();
    const[newImage, setNewImage] = useState(false);
    const [classTeachersAndMatatzes, setClassTeachersAndMatatzes] = useState([]);
    var linkRegex = '(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})'
    useEffect(() =>{
        if(!token['mr-token']) window.location.href = '/Signin';
  
        API.getUserDetails(token['mr-token'])
          .then(resp => setUser(resp.results))  
          .catch( error => console.log(error))


        API.getFrontalLesson(LessonFromURL)
          .then(resp => setLessonDetails(resp))  
          .catch( error => console.log(error))

        API.getClass(classId)
          .then(resp => setClass(resp))  
          .catch( error => console.log(error))

        API.getClassMatatzesByID(classId)
          .then(resp => setClassTeachersAndMatatzes((classTeachersAndMatatzes) => [...classTeachersAndMatatzes.concat(resp.results)]))
          .catch( error => console.log(error))
        API.getClassTeachersByID(classId)
          .then(resp => setClassTeachersAndMatatzes((classTeachersAndMatatzes) => [...classTeachersAndMatatzes.concat(resp.results)]))
          .catch( error => console.log(error))
    }, [])
    // const ImageThumb = ({ image }) => {
    //     var binaryData = [];
    //     binaryData.push(image);
    //     console.log("need to check the image: ", image)
    //     return <img src={image && URL.createObjectURL(new Blob(binaryData))} width='100'
    //     height='100' alt={image.name} />;
        
    //   };
    const submitExercise = () => {
      if(!exerciseLink.match(linkRegex))
      {
        alert("הלינק לא נכון")
        return 
      }
    };
    const submitProject = () => {
      if(!projectLink.match(linkRegex))
      {
        alert("הלינק לא נכון")
        return 
      }
      API.addUserFrontalLesson(exerciseLink, projectLink,LessonFromURL,token['mr-token'])
      setProjectPopup(false)
    };
    const submitFeedback = () => {
      if(!feedback.match(""))
      {
        alert("לא ניתן לשלוח פידבק ריק")
        return 
      }
    API.addFeedback(feedback, LessonFromURL,classId,token['mr-token'])
    setFeedbackPopup(false)
  };
    const openSubmitExercise = () => {
      setExercisePopup(true)
    };
    const openSubmitProject = () => {
      setProjectPopup(true)
    };
    const addFeedback = () => {
      setFeedbackPopup(true)
    };
    const getFeedbacks = () => {
      API.getAllFeedbacks(LessonFromURL,classId)
        .then(resp => setAllFeedbacks(resp.results))  
        .catch( error => console.log(error))
      setGetFeedbackPopup(true)
    };
    const updatePresentation = () => {
      const uploadData = new FormData()
      uploadData.append('presentation', presentation);
      API.updateLessonPresentation(uploadData, lessonDetails.id)
    };
    const checkAssignments = () => {
    window.location.href ='/FrontalLessonAnswers?lesson=' + LessonFromURL + "&class=" + getClass.className+ "&classId=" + getClass.id+ "&lessonName=" + lessonDetails.name; 
    };
    function handleUploadPresentation(event) {
        setPresentation(event.target.files[0]);     
        // setNewImage(true)
      }
    
    //   function handleUploadProject(event) {
    //     setProjectFile(event.target.files[0]);
    //     setNewImage(true)
    //   }

    return (    
        <>
        <div className="App" >
        <header className="Header">
        <h1>שיעור פרונטאלי</h1>
        </header> 
            <p>:שיעור</p>
            <p>{lessonDetails.name}</p><br/>
            <p>:תיאור שיעור</p>
            <p>{lessonDetails.description}</p><br/>
            <p>:מצגת שיעור</p>
            
            <a href={lessonDetails.presentation} download>לחץ להורדת המצגת</a>
            {/* button only for coordinator to upload presentation */}
            {user.userType == "4" ? <p>:עדכון מצגת</p>: ""}
            {user.userType == "4" ? <input type="file" onChange={handleUploadPresentation} />: ""}
            {user.userType == "4" ? <button onClick={updatePresentation}> עדכן</button>: ""}<br/><br/>
            {user.userType == "4" ? <button onClick={checkAssignments}> בדוק מטלות לשיעור זה</button>: ""}<br/><br/>
            {user.userType == "4" ? <button onClick={getFeedbacks}>צפה בפידבקים של המדריכים לשיעור זה</button>: ""}
            {user.userType == "2"||user.userType == "3" ? <button onClick={addFeedback}>הוסף פידבק</button>: ""}
            {/* {exerciseFile && newImage? <ImageThumb image={exerciseFile} />:  <img src={"http://127.0.0.1:8000"+exerciseFile } width='100' 
            height='100'></img>} */}
            <br/><br/>
            {console.log(lessonDetails)}
            
            <br/><br/>
            {user.userType == "1" ? <button onClick={openSubmitExercise}>הגשת תרגיל</button>: ""}
            <br/><br/>
            {user.userType == "1" ? <button onClick={openSubmitProject}>הגשת פרויקט</button>: ""}
            {/* <p>:העלאת תרגיל</p>
            <input type="file" onChange={handleUploadExercise} />
            <p>:העלאת פרוייקט</p>
            <input type="file" onChange={handleUploadProject} /> */}
            {/* {user.userType == "2"  ? <button >הוסף פידבק מטצ</button>: ""}
            {user.userType == "3"  ? <button >הוסף פידבק מורה</button>: ""} */}



    <Popup trigger={exercisePopup} setTrigger={setExercisePopup}>  
    <h3>הגשת תרגיל</h3>
    <p>:הכנס לינק</p>
          <input type = "text" value={exerciseLink} 
          onChange={e => setExerciseLink(e.target.value)}
          ></input>
      <br/>
      <button onClick={submitExercise}>שמור</button>    
  </Popup>
  
  <Popup trigger={projectPopup} setTrigger={setProjectPopup}>  
    <h3>הגשת פרויקט</h3>
    <p>:הכנס לינק</p>

          <input type = "text" value={projectLink} 
          onChange={e => setProjectLink(e.target.value)}
          ></input>
      <br/>
      <button onClick={submitProject}>שמור</button>    
  </Popup> 

    <Popup trigger={feedbackPopup} setTrigger={setFeedbackPopup}>  
    <h3> הוספת פידבק</h3>
    <textarea
          name = "feedbackTA"
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
          rows={5}
          cols={50}
        /><br/>
      <button onClick={submitFeedback}>שמור</button>    
  </Popup> 

      <Popup trigger={getFeedbackPopup} setTrigger={setGetFeedbackPopup}>  
    <h3> כל הפידבקים לשיעור זה</h3>
    {console.log(classTeachersAndMatatzes)}

    {allFeedbacks && allFeedbacks.map(feedback => {

    return <p>
    {}
    {classTeachersAndMatatzes.map(teacher => {
      return<h5>{feedback.user==teacher.user ? ":"+teacher.firstName+ " "+ teacher.lastName:"" }</h5>
    })}
      {/* <br/><p>{feedback.user}</p> */}
        {feedback.feedback}<br/>
        </p>})} 
        
  </Popup>         
        </div></>
    
        
    );
  };


export default FrontalLesson;