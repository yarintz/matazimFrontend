import { API } from '../api-service';
import React, {useEffect, useState} from 'react';
import '../CoursesMain.css';
import '../Projects.css';
import { useCookies } from 'react-cookie';
import Popup from '../components/Popup';

const ProjectsScreen = () => {
  const [token] = useCookies(['mr-token']);
  const [projectsList, setProjectsList] = useState([]);
  const [userUNApprovedProjects, setUserUNApprovedProjects] = useState([]);
  const [addProjectPopup, setAddProjectPopup] = useState(false);
  const [projectName, setProjectName] = useState();
  const [projectBriefDescription, setProjectBriefDescription] = useState();
  const [projectDescription, setProjectDescription] = useState();
  const [projectLink, setProjectLink] = useState();
  const [uploadedFiles, setUploadedFiles] = useState([])
//get all the projects in the database
useEffect(() =>{ 
  // get all the pproved projectsof all the users in order to display them
  API.getAllApprovedProjects()
      .then( resp => setProjectsList(resp.results))
      .catch( error => console.log(error)) 
  // get all the user projects that had not been approved in order to display them in different way
  API.getallUnApprovedProjectOfUser(token['mr-token'])   
      .then( resp => setUserUNApprovedProjects(resp.results))
      .catch( error => console.log(error))   
}, [])
const displayProject= (project) =>  {     
      window.location.href ='/ProjectDisplay?id=' + project.id + "&user=" + project.user;            
}
const addProjectButton= () =>  {
  setAddProjectPopup(true)
  }

  const uploadImages= (newProjectId) =>  {
    // add all the uploaded images to postImages table
    const uploadData = new FormData()
    uploadedFiles.map(file => {
    uploadData.append('img',file)
    return API.addNewProjectImage(newProjectId,uploadData )})
    }

const addProject= () =>  {
  // create a new project by the form that sent by the user and rhen upload the images
  API.addNewProject(token['mr-token'],projectName,projectBriefDescription,projectDescription,projectLink  )
      .then(resp => uploadImages(resp.results))
      .catch( error => console.log(error))  
  // close the popup  
  setAddProjectPopup(false)
  }
  // handle upload image
  function handleUpload(event) {
const chosenFiles = Array.prototype.slice.call(event.target.files)
handleUploadFiles(chosenFiles);
  }

  const handleUploadFiles = files => {
    const uploaded = [...uploadedFiles];
    files.some((file) => {
    uploaded.push(file);
    setUploadedFiles(uploaded);
})
 }

  const ImageThumb = ({ image }) => {
    var binaryData = [];
    binaryData.push(image);
    console.log("need to check the image: ", image)
    return <img src={image && URL.createObjectURL(new Blob(binaryData))} width='100'
    height='100' alt={image.name} />;
    
  };
  function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
  )
}
  return ( 
    <div className="App">  
    <header className="Header">
      <h1>רשימת כל הפרויקטיים</h1>
      </header>
      
      <button onClick={addProjectButton}>הוסף פרוייקט</button>
      <div class="first">
      {/* display all the approved projects */}
                {  projectsList.map( project => {
                return <ul class="tilesWrap">
                    <li>
                      {console.log(project)}
                    <h3>{project.title}</h3>
                    <p>{project.briefDescription}</p>
                    <button onClick={() => displayProject(project)} >הצג פרויקט </button>
                    </li>
                </ul> 
            })}
</div>
<div class="middle">
<h3>:פרוייקטים שלי שלא אושרו עוד</h3> 
</div>
<div class="second">

        {/* display all the projects of the user that have not been approved yet in a diiferen way*/}
        {  userUNApprovedProjects.map( project => {
            return <ul class="tilesWrap2">
                <li>
                  {console.log(project)}
                <h3>{project.title}</h3>
                <p>{project.briefDescription}</p>
                <button onClick={() => displayProject(project)} >הצג פרויקט </button>
                </li>
            </ul> 
        })}

    </div> 
    
    {/* popup for adding new project */}    
    <Popup trigger={addProjectPopup} setTrigger={setAddProjectPopup}>
      <h4>הוסף פרויקט חדש</h4>
      
      <input type = "text" onChange={e => setProjectName(e.target.value)}></input>
      <label> :שם פרוייקט </label> <br/>
      <input type = "text" onChange={e => setProjectBriefDescription(e.target.value)}></input>
      <label> :תיאור מקוצר</label> <br/>
      <label> :תיאור מפורט</label> <br/>
      <textarea
          name = "description"
          // value={projectDescription}
          onChange={e => setProjectDescription(e.target.value)}
          rows={5}
          cols={50}
        /><br/>
      
          <input type = "text" 
          onChange={e => setProjectLink(e.target.value)}
          ></input>
        <label> :לינק</label><br/> 
          <input type="file" multiple onChange={handleUpload} />
          <label>:העלה תמונה</label><br/>
            {/*display the uploaded images  */}
          {
          uploadedFiles.map(file =>{<br/>
          return <ImageThumb image={file} />})
          }
      <button onClick={() =>addProject()}>הוסף</button>
      
    </Popup>
      </div>
      
  );
  
};

export default ProjectsScreen;