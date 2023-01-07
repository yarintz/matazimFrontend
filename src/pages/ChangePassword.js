import { updatePassword } from '@userfront/core';
import React, {useEffect, useState} from 'react';

import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router';
import { API } from '../api-service';
import '../index.css';

const ChangePassword = () => {

    const [newPassword,setNewPassword] = useState([]);
    const [ msg, setMsg]= useState([]);
    const [ apiMsg, setApiMsg]= useState([]);
    const search = window.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const userId = params.get('user');
    const user = Number(userId)

    const updatePassword = () =>  {
        console.log("user is:", user)
        API.changePassword(newPassword, user)
            .then( resp => setApiMsg(resp.bool))
            .catch( error => console.log(error))
        {console.log(apiMsg)}
        {apiMsg?
        setMsg("הסיסמה עודכנה בהצלחה"):
        setMsg("אירעה שגיאה")}
    } 

    
    return (     
        <div className="App">
            {/* <input type = "text" onChange={e => setSchoolNameToAdd(e.target.value) + setSchoolAddedSuccesfullyMessage('')}></input> */}

            <label htmlFor="password">הזן סיסמה חדשה</label><br/>
            <input id="password" type="password"  value={newPassword}
            onChange={ evt=> setNewPassword(evt.target.value) + setMsg('')}/><br/>
            <button onClick={updatePassword} >עדכן</button><br/>
            <label >{msg}</label> <br/>


            </div>
            )
}
export default ChangePassword;