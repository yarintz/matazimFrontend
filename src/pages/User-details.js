import React, { useState } from "react";
const BASE_URL = 'https://yarintz.pythonanywhere.com';
const LOCAL_URL = 'http://127.0.0.1:8000';
function UserDetails(props){
    const usr = props.usr;
    const getUserDetails = () =>{
        fetch(`${process.env.BASE_URL}/main/users/${props.user.id}`,{
            method: 'GET',
            headers: {  
                'Content-Type':'application/json',
                'Authorization':`Token ${props.token}`
            }
        }).then( resp => resp.json())
        .then( res => props.UpdateUser(res))
        .catch( error => console.log(error))
    } 
}