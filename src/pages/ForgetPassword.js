import React, {useEffect, useState} from 'react';

import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import '../index.css';

const ForgetPassword = () => {
    const [newMail,setNewMail] = useState([]);
    const [ msg, setMsg]= useState([]);
    const [ apiMsg, setApiMsg]= useState([]);

    const mailSent = () =>  {
        API.forgetPassword(newMail)
            .then( resp => setApiMsg(resp.bool))
            .catch( error => console.log(error))
        {console.log(apiMsg)}
        {apiMsg?
        setMsg("כנס לחשבון האימייל שלך"):
        setMsg("כתובת מייל אינה קיימת במערכת")
    } 
        

              
    }


    return (     
        <div className="App">
            {/* <input type = "text" onChange={e => setSchoolNameToAdd(e.target.value) + setSchoolAddedSuccesfullyMessage('')}></input> */}
            <label htmlFor="mail"> :כתובת מייל </label> <br/>
            <input id="mail" type="text" value={newMail}
             onChange={ evt=> setNewMail(evt.target.value) + setMsg('')}/><br/>
            <button onClick={mailSent}>שלח</button><br/>
            <label >{msg}</label> <br/>
            </div>
            )
}
export default ForgetPassword;