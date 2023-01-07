import { API } from '../api-service';
import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import { useCookies } from 'react-cookie';
import Popup from '../components/Popup';
// import {Navbar} from '../components/Navbar/index';
// import {index} from '../../pages/ProjectDisplay';

const ProjectDisplay = () => {
const[token] = useCookies(['mr-token']);
const [user,setUser] = useState([]);
const [project, setProject] = useState();
const [projectImages, setProjectImages] = useState([]);
const [projectUser, setProjectUser] = useState([]);
const search = window.location.search; // returns the URL query String
const params = new URLSearchParams(search); 
const projectId = params.get('id');
const userId = params.get('user'); 
const [approveProjectPopup, setApproveProjectPopup] = useState(false);
const [hideProjectPopup, setHideProjectPopup] = useState(false);
const [deleteProjectPopup, setDeleteProjectPopup] = useState(false);
const [editProjectPopup, setEditProjectPopup] = useState(false);
const [projectName, setProjectName] = useState();
const [projectBriefDescription, setProjectBriefDescription] = useState();
const [projectDescription, setProjectDescription] = useState();
const [projectLink, setProjectLink] = useState();
// const [uploadedFiles, setUploadedFiles] = useState([])

//get the selected project in the database
useEffect(() =>{ 
    API.getProject(projectId)
        .then( resp => setProject(resp))    
        .catch( error => console.log(error))
    API.getProjectImages(projectId)
        .then( resp => setProjectImages(resp.results))
        .catch( error => console.log(error)) 
    API.getUserProfileByUserId(userId)
        .then( resp => setProjectUser(resp.results))
        .catch( error => console.log(error))
    API.getUserDetails(token['mr-token'])
      .then(resp => setUser(resp.results))  
      .catch( error => console.log(error)) 

    
//    setProjectName(project&& project.title)
//    setProjectBriefDescription(project&& project.briefDescription)
//    setProjectDescription(project&& project.description)
//    setProjectLink(project&& project.link)    
}, [])
const setProjectDetails= () =>  { 
   console.log("i am here inside details")
   console.log(project && project)
   setProjectName(project.title)
   setProjectBriefDescription(project.briefDescription)
   setProjectDescription(project.description)
   setProjectLink(project.link) 
//    projectImages
    }

const approveProject= () =>  { 
    setApproveProjectPopup(true)
    }
const approveProjectFinal = () => {
    API.ApproveProject(project.id)
        .catch( error => console.log(error))     
    setApproveProjectPopup(false)
    window.location.reload(false)
}
const hideProject= () =>  { 
    setHideProjectPopup(true)
    }
const hideProjectFinal = () => {
    API.HideProject(project.id)
        .catch( error => console.log(error))     
    setHideProjectPopup(false)
    window.location.reload(false)
}
const deleteProject= () =>  { 
    setDeleteProjectPopup(true)
    }
const deleteProjectFinal = () => {
    API.DeleteProject(project.id)
        .catch( error => console.log(error))     
    setDeleteProjectPopup(false)
    window.location.href ='/ProjectsScreen';
}
const editProject= () =>  {
    setProjectDetails() 
    setEditProjectPopup(true)
    }
const editProjectFinal = () => {
    API.updateProject(project.id, projectName, projectBriefDescription, projectLink, projectDescription)
        .catch( error => console.log(error))     
    setEditProjectPopup(false)
    window.location.reload(false)
}

  return ( 
      <div className="App"> 
      {/* coordinator or admin can approve or hide project. admin can also delete from DB */}
        {(user.userType == "4" || user.userType == "5") && (project.approved == false)? <button onClick={() => approveProject()}>אשר פרויקט</button>: ""} 
        {(user.userType == "4" || user.userType == "5") && (project.hide ==  false) ? <button onClick={() => hideProject()}>הסתר פרויקט</button>: ""}
        {(user.userType == "5") ? <button onClick={() => deleteProject()}>מחק פרויקט</button>: ""}
     {/* user can hide or delete project of his own*/}
     {(user.userType == "1" || user.userType == "2" || user.userType == "3") && (project.user ==  user.user) && (project.hide ==  false)? <button onClick={() => hideProject()}>הסתר פרויקט</button>: ""}
     {(user.userType == "1" || user.userType == "2" || user.userType == "3"|| user.userType == "4") && (project.user ==  user.user) ? <button onClick={() => deleteProject()}>מחק פרויקט</button>: ""}
    {/* user can edit his own project as long as it not yet been approved*/} 
    {(project && project.approved == false) && (project.user ==  user.user) ? <button onClick={() => editProject()}>ערוך פרויקט</button>: ""}
     

      <h1>{project && project.title}</h1>
      <h3>{project && project.briefDescription}</h3>
      <h4>הפרוייקט של {projectUser && projectUser.firstName +" "+ projectUser.lastName}</h4>
      <p>{project && project.description}</p>
      {console.log(projectImages&& projectImages)}
      <br/>
      <div className="projects" >
      <div>
      <ReactPlayer trigger={project} controls url={project && project.link} width='80%'
       height='150%'/>
       </div>
       <div>
       <p>גלריית תמונות</p>
       {projectImages && projectImages.map(image => { 
               return <p>
                <br/>
               <img src={"http://127.0.0.1:8000"+image.images} width='100' 
                height='100'></img><br/>
               </p>              
              })}
              </div>
      </div><br/>
{/* Approve project */}
<Popup trigger={approveProjectPopup} setTrigger={setApproveProjectPopup}>
<h4>?האם אתה בטוח שברצונך לאשר את הפרויקט</h4>
{<button onClick={() =>approveProjectFinal()}>אשר</button>}
{/* <p>{schoolAddedSuccesfullyMessage}</p> */}
</Popup>
{/* Hide project */}
<Popup trigger={hideProjectPopup} setTrigger={setHideProjectPopup}>
<h4>?האם אתה בטוח שברצונך להסתיר את הפרויקט</h4>
{<button onClick={() =>hideProjectFinal()}>הסתר</button>}
{/* <p>{schoolAddedSuccesfullyMessage}</p> */}
</Popup>
{/* delete project */}
<Popup trigger={deleteProjectPopup} setTrigger={setDeleteProjectPopup}>
<h4>?האם אתה בטוח שברצונך למחוק את הפרויקט</h4>
{<button onClick={() =>deleteProjectFinal()}>מחק</button>}
{/* <p>{schoolAddedSuccesfullyMessage}</p> */}
</Popup>
{/* edit project */}
<Popup trigger={editProjectPopup} setTrigger={setEditProjectPopup}>
<h4>עריכת פרויקט</h4>
<input type = "text"  value={projectName} onChange={e => setProjectName(e.target.value)}></input>
      <label> :שם פרוייקט </label> <br/>
      <input type = "text"  value={projectBriefDescription} onChange={e => setProjectBriefDescription(e.target.value)}></input>
      <label> :תיאור מקוצר</label> <br/>
      <label> :תיאור מפורט</label> <br/>
      <textarea  value={projectDescription}
          name = "description"
          // value={projectDescription}
          onChange={e => setProjectDescription(e.target.value)}
          rows={5}
          cols={50}
        /><br/>
      
          <input type = "text" 
          value={projectLink} 
          onChange={e => setProjectLink(e.target.value)}
          ></input>
        <label> :לינק</label><br/> 
          {/* <input type="file" multiple onChange={handleUpload} />
          <label>:העלה תמונה</label><br/> */}
            {/*display the uploaded images  */}
          {/* {
          uploadedFiles.map(file =>{<br/>
          return <ImageThumb image={file} />})
          } */}
{<button onClick={() =>editProjectFinal()}>עדכן</button>}
{/* <p>{schoolAddedSuccesfullyMessage}</p> */}
</Popup>
      </div> 
  );  
};


export default ProjectDisplay;