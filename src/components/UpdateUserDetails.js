import React, {useEffect, useState} from 'react';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import Signin from '../pages/Signin'; 
import '../index.css';
import { useHistory } from "react-router-dom";
import Popup from './Popup';
//import UpdateUserDetails from '../components/UpdateUserDetails'
const axios = require('axios');


const UpdateUserDetails = () => {
  const history = useHistory();
  const handleRoute = () =>{ 
      history.push("/ProfileScreen");
    }
      
    const [token, setToken, deleteToken] = useCookies(['mr-token']);
    const [user,setUser] = useState([]);
    const[popup, setPopup ] = useState();
    const [UpdateUserfirstnamePopUp, setUpdateUserfirstnamePopUp ] = useState(false);
    const [UpdateUserlastnamePopUp, setUpdateUserlastnamePopUp ] = useState(false);
    const [UpdateUseremailPopUp, setUpdateUseremailPopUp ] = useState(false);
    const [UpdateUseraboutmePopUp, setUpdateUseraboutmePopUp ] = useState(false);
    const [UpdateUserhobbiesPopUp, setUpdateUserhobbiesPopUp ] = useState(false);
    useEffect(()=>{
        //var username = Signin.username
        //console.log("username is:",username)
        API.getUserDetails(token['mr-token'])
         //.then(resp => console.log("resp is:", resp.results))
         .then(resp => setUser(resp.results))  
         .catch( error => console.log(error)) 
    }, [])
    const openPopup = () =>{
      //if(this.user === undefined) {return}
      console.log('inside open Popup');
      setPopup('');
      console.log("user name ",user.firstName)
      
      setUpdateUserfirstnamePopUp(true);
    } 
    const openlastnamePopup = () =>{
      console.log('inside open last name Popup');
      setPopup('');
      console.log("user name ",user.firstName)
      
      setUpdateUserlastnamePopUp(true);
    }
    const openemailPopup = () =>{
      console.log('inside open email Popup');
      setPopup('');
      console.log("user name ",user.firstName)
      
      setUpdateUseremailPopUp(true);
    }
    const openaboutmePopup = () =>{
      console.log('inside open about me Popup');
      setPopup('');
      console.log("user name ",user.firstName)
      
      setUpdateUseraboutmePopUp(true);
    }
    const openhobbiesPopup = () =>{
      console.log('inside open hobbies Popup');
      setPopup('');
      console.log("user name ",user.firstName)
      
      setUpdateUserhobbiesPopUp(true);
    }
    /*
    const savechanges= () =>  { 
      if(currentLesson.id)
        API.updateUserNotes(token['mr-token'], notes, currentLesson.id)
      else
        API.updateUserNotes(token['mr-token'], notes, params.get('firstLessonId'))
       setNotePopup(false)
      }
      */
    return(
        <div className="App">
        <header className="Header">דף שינוי פרטים</header>
        <div className="updateProfile">
        <div>
        <h4>שם משתמש:</h4>
         <p>{user.username}</p>
         <h4>שם פרטי: </h4><button onClick={openPopup}>עריכה</button>
         <p>{user.firstName}</p>
          <h4>שם משפחה:</h4><button onClick={openlastnamePopup}>עריכה</button>
          <p>{user.lastName}</p>
       </div>
        <div>
        <h4>דואר אלקטרוני:</h4><button onClick={openemailPopup}>עריכה</button>
       <p>{user.email}</p>
       <h4>קצת עליי..</h4><button onClick={openaboutmePopup}>עריכה</button>
       <p>{user.aboutMe}</p>
       </div>
       <div>
       <h4>תחביבים:</h4><button onClick={openhobbiesPopup}>עריכה</button>
       <p>{user.hobbies}</p>
       </div>
       </div>
        <button onClick={handleRoute}>חזרה</button>
        <Popup trigger={UpdateUserfirstnamePopUp} setTrigger={setUpdateUserfirstnamePopUp}>
          <h3>שם פרטי:</h3>
          {console.log("first name popup message test")}
          <textarea>{user.firstName}</textarea>
        <br/>
        <button >שמור</button>
        </Popup>
        <Popup trigger={UpdateUserlastnamePopUp} setTrigger={setUpdateUserlastnamePopUp}>
          <h3>שם משפחה:</h3>
          {console.log("last name popup message test")}
          <textarea>{user.lastName}</textarea>
        <br/>
        <button >שמור</button>
        </Popup>
        <Popup trigger={UpdateUseremailPopUp} setTrigger={setUpdateUseremailPopUp}>
          <h3>דואר אלקטרוני:</h3>
          {console.log("mail popup message test")}
          <textarea>{user.email}</textarea>
        <br/>
        <button >שמור</button>
        </Popup>
        <Popup trigger={UpdateUseraboutmePopUp} setTrigger={setUpdateUseraboutmePopUp}>
          <h3>קצת עליי..:</h3>
          {console.log("about me popup message test")}
          <textarea>{user.aboutMe}</textarea>
        <br/>
        <button >שמור</button>
        </Popup>
        <Popup trigger={UpdateUserhobbiesPopUp} setTrigger={setUpdateUserhobbiesPopUp}>
          <h3>תחביבים:</h3>
          {console.log("hobbies popup message test")}
          <textarea>{user.hobbies}</textarea>
        <br/>
        <button >שמור</button>
        </Popup>
        </div>
    )
};

           
export default UpdateUserDetails;