import React, {useEffect, useState} from 'react';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import Signin from '../pages/Signin'; 
import { useHistory } from "react-router-dom";
import Popup from '../components/Popup';
import '../index.css';
import UpdateUserDetails from '../components/UpdateUserDetails'
const axios = require('axios');


const ProfileScreen = () => {
    const history = useHistory();
    const handleRoute = () =>{ 
        history.push("/UpdateUserDetails");
      }
    const [token] = useCookies(['mr-token']);

    const [user,setUser] = useState([]);
    const [courses,setCourses] = useState([]);
    const [userCourses, setUserCourses] = useState([]);
    const [updateDetailsPopup, setUpdateDetailsPopup] = useState(false);
    const[newFirstname, setNewFirstName ] = useState();
    const[newLastName, setNewLastName ] = useState();
    const[newAboutMe, setNewAboutMe ] = useState();
    const[newHobbies, setNewHobbies ] = useState();
    const[newMyGoal, setNewMyGoal ] = useState();

    //   test
    const [studentsInClass, setsStudentsInClass] = useState([]);



    useEffect(()=>{
        if(!token['mr-token']) window.location.href = '/Signin';
        //var username = Signin.username
        //console.log("username is:",username)
        API.getUserDetails(token['mr-token'])
            //.then(resp => console.log("resp is:", resp.results))
         .then(resp => setUser(resp.results))
         .then(resp => console.log(resp.results))
        //  .then(setDetails())  
         .catch( error => console.log(error)) 
         API.getAllUserCoursesByToken(token['mr-token']) 
            .then(resp => getCourseName(resp.results)) 
            //.then(resp => console.log("resp is:", resp.results))
            // .then(resp => setCourses(resp.results))  
            .catch( error => console.log(error))
      
        

    }, [])

    const getCourseName = (courses) =>{
        console.log("in fun",courses)
        courses.map(course => { 
            API.getCourses(course.course) 
                 .then(resp => setUserCourses((userCourses) => [...userCourses, resp]))
     })     
    }
    const setDetails= () =>  {
      console.log("inside setDetails", user)  
      console.log("time passed: ", user)
      setNewFirstName(user.firstName)
      setNewLastName(user.lastName)
      setNewAboutMe(user.aboutMe)
      setNewHobbies(user.hobbies)
      setNewMyGoal(user.myGoal)
    
      }

    const updateDetails= () =>  {
      setDetails()
      setUpdateDetailsPopup(true)
      }

      const updateNewDetails= () =>  {      
         API.updateUserDetails(token['mr-token'], newFirstname, newLastName, newAboutMe, newHobbies, newMyGoal)
         setUpdateDetailsPopup(false)
         sleep(100).then(()=>{
          API.getUserDetails(token['mr-token'])     
            .then(resp => setUser(resp.results))
            .then(resp => console.log(resp.results)) 
            .catch(error => console.log(error)) 
           })
        }

      function sleep(time){
        return new Promise((resolve)=>setTimeout(resolve,time)
      )
  }
    return(
        <div className="App">
        <header className="Header"> הדף של {user.firstName}  {user.lastName}</header>
        <div className="profile">
          
      
            <div>
        <h4>שם משתמש:</h4>
         <p>{user.username}</p>

         {/* test */}
         {/* {console.log("user class is: ",user.studentClasses && user.studentClasses[0].className)}
         {console.log("the students in class number 2 are: ",studentsInClass)} */}
        
         <br/>

         <h4>שם פרטי: </h4>
         <p>{user.firstName}</p>
         <br/>

       <h4>שם משפחה:</h4>
       <p>{user.lastName}</p>
      
       </div>
        <div>
        {/* <h4>דואר אלקטרוני:</h4>
       <p>{user.email}</p> */}
         
       <h4>קצת עליי..</h4>
       <p>{user.aboutMe}</p>
       
       <h4>הקורסים שלי:</h4>

        { userCourses.map(course => { 
                return <p>           
                  <p>
                  {course.name} </p>                             
            </p> 
               
          })}
   <h4>הכיתות שלי:</h4>
{ user.studentClasses && user.studentClasses.map(userClass => { 
                return <p>              
                  <p>
                  {userClass.className} </p>                             
             </p>                
          })}
      



      
       </div>
       <div>
       <h4>תחביבים:</h4>
       <p>{user.hobbies}</p>
      
       <br/>
       <h4>הבאדג'ים שלך:</h4>
         <p>{user.badges}</p>
        
         <br/>
         <h4>המטרה שלי:</h4>
         <p>{user.myGoal}</p>
         
       </div>
       </div>
        
        <button onClick={updateDetails}> עדכון פרטים </button>

        <Popup trigger={updateDetailsPopup} setTrigger={setUpdateDetailsPopup}>
  <h4>עדכון פרטים</h4>
  {/* <input type = "text" onChange={e => setUserToSearch(e.target.value) + setAddedSuccesfullyMessage('')}></input> */}
{console.log("in popup ", user)}

  <input type = "text" value={newFirstname} 
  onChange={e => setNewFirstName(e.target.value)}></input>
  <h7> שם פרטי</h7><br/>
  <input type = "text" value={newLastName} 
  onChange={e => setNewLastName(e.target.value)}></input>
   <h7> שם משפחה</h7><br/>
    <input type = "text" value={newAboutMe} 
  onChange={e => setNewAboutMe(e.target.value)}></input>
  <h7> קצת עלי</h7><br/>
    <input type = "text" value={newHobbies} 
  onChange={e => setNewHobbies(e.target.value)}></input>
  <h7> תחביבים</h7><br/>
    <input type = "text" value={newMyGoal} 
  onChange={e => setNewMyGoal(e.target.value)}></input>
 <h7> המטרה שלי</h7><br/>
    <button onClick={updateNewDetails}>עדכן פרטים</button>
    {/* {console.log("users are: ",userToAdd.id)}
    <h5>{userToAdd!="null"?  userToAdd.username: " לא נמצא שם משתמש"}</h5>
    {<button  style={{display : userToAdd!="null"  ? "none": ""}} onClick={() => goToSignIn(userToSearch)}>רשום משתמש</button>}
    <p>{userToAdd && userToAdd.firstName}</p>
    <p>{userToAdd && userToAdd.lastName}</p>
    {<button  style={{display : userToAdd.id  ? "": "none"}} onClick={() => addUser(userToAdd.username)}>הוסף</button>}
    <p>{addedSuccesfullyMessage}</p>     */}

</Popup> 

        </div>
    )    
}
        



//         <div className="App">
//         <header className="Header">דף פרופייל</header>
//         <div className="profile">
//          {user.username}: שם משתמש 
//         </div>
//         <div>
//        :שם פרטי 
//         </div>
//         <div>
//         : שם משפחה
//         </div>
//         <div>
//         : דואר אלקטרוני 
//         </div>
//         <div>
//        : גיל
//         </div>
//         <div>
//        : תחביבים
//         </div>
//         <button onClick={UpdateUserDetails}>עדכון פרטים</button>
//         </div>
//     )
// }
 /*
class ProfileScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user_id:this.props.user_id,
            username:this.props.username,
            email:this.props.email,
            profileImage:this.props.profileImage,
            msg:this.props.msg,
            uploadedFile:null
        }
    }
    fetchUserDetails=(user_id)=>{
        //console.log(user_id);
        axios.get("http://127.0.0.1:8000/main/users/"+user_id,{
            headers: {
                "content-type": "application/json"
              } 
        }).then(res=>{
            console.log(res);
            this.setState({email:res.data.results[0].email});
            this.setState({profileImage:res.data.results[0].profileImage})
        })
        .catch(err=>console.log(err))
    }
    render(){
        return (
            <Container>
            <Row>
           
            <Col>
                <h1>User Profile</h1>
                <Form className="form">     
        <p>{this.state.msg}</p>
      <Form.Group controlId="formCategory1">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" defaultValue={this.state.username}/>     
      </Form.Group>
      <Form.Group controlId="formCategory2">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" defaultValue={this.state.email} />     
      </Form.Group>
      <Form.Group controlId="formCategory3">
        <Form.Label>First Name:</Form.Label>
        <Form.Control type="text" name="firstname" onChange={this.changefirstname}/>
        </Form.Group>
        <Form.Group controlId="formCategory4">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control type="text" name="lastname" onChange={this.changelastname}/>
        </Form.Group>
        <Form.Group controlId="formCategory5">
        <Form.Label>Skills:</Form.Label>
        <Form.Control type="text" name="skills" onChange={this.changeskills}/>
        </Form.Group>
      <Button variant="primary" onClick={this.UpdateProfileHandler}>Update Profile</Button>
      </Form>
       </Col>
    
           </Row>
            </Container>
        )
    }
    
}
*/
export default ProfileScreen;