import React, { useEffect, useState ,Component } from "react";
import { API } from '../../api-service';
import { useCookies } from 'react-cookie';
// import Badge from '@mui/material/Badge';
// import MailIcon from "@material-ui/icons/Mail";
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button';
import Child from '../../pages/ProjectDisplay';
// import ProjectDisplay from '../../pages/ProjectDisplay';
// import  { useCallback } from 'react'
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const Navbar = () => {
const [user,setUser] = useState([]);
const[token, setToken, deleteToken] = useCookies(['mr-token']);
const [open, setOpen] = React.useState(true);
const [projectsList, setProjectsList] = useState([]);


useEffect(() =>{ 
    API.getUserDetails(token['mr-token'])
      .then(resp => setUser(resp.results))  
      .catch( error => console.log(error))
    // get the project that have not been approved yet and display them in the bell
    API.getNotApprovedProjects()
        .then( resp => setProjectsList(resp.results))
        .catch( error => console.log(error))
          
    }, [])
 
// get the project that have not been approved yet and display them in the bell
// useEffect(() =>{ 
//     console.log("now!!!")
//     API.getNotApprovedProjects()
//         .then( resp => setProjectsList(resp.results))
//         .catch( error => console.log(error))      
//     }, [update])

const logoutUser = () => {
      console.log("inside logoutUser");
      console.log(token);
      deleteToken(['mr-token']);
      console.log(token);
}
const goToProject = (project) => {
    console.log("inside goToProject");
    console.log(project);
     window.location.href ='/ProjectDisplay?id=' + project.id + "&user=" + project.user;  
}
  
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />
            <NavMenu>
            <NavLink to="/AboutusScreen" activeStyle>
                    עלינו
                </NavLink>
            {/* <NavLink to="/FrontalLessonMenu" activeStyle>
                    שיעור פרונטאלי
                </NavLink>  */}
            <NavLink to="/TeachersScreen" activeStyle>
                    הדרכה
                </NavLink>
            <NavLink to="/ProfileScreen" activeStyle>
                    פרופייל
                </NavLink>
            <NavLink to="/ProjectsScreen" activeStyle>
                    פרויקטים
                </NavLink> 
                <NavLink to="/CoursesMenu" activeStyle>
                    למידה
                </NavLink>
                <NavLink to="/HomeScreen" activeStyle>
                    דף הבית
                </NavLink>



                {token['mr-token'] && token['mr-token']!='undefined' ? (<NavBtn onClick={logoutUser} activeStyle>
                    התנתק
                </NavBtn> ) : <NavLink  to="/Signin" activeStyle>
                    התחבר
                </NavLink>}
{/* coordinators and admins bell*/}
  { token['mr-token'] &&  (user.userType == "4" || user.userType == "5"  )?   <Box >

                      <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
                <IconButton cursor="pointer" aria-label="bell"  disabled={open}
        variant="outlined"
        onClick={() => {
            setOpen(true);
          }}>
       <StyledBadge badgeContent={projectsList && projectsList.length} color="secondary">
        <NotificationsIcon />
      </StyledBadge>
    </IconButton>
    </Stack>

    <Collapse in={open}>
        <Alert icon={false}  
          action={
            <IconButton
          
              aria-label="close"
              color="inherit"
              size="small"
        onClick={() => {
          setOpen(false);
        }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 0 }}
        >
        
          {projectsList.map( project => {
            return   <p onClick={() =>goToProject(project)}>ממתין לאישור {project.title}</p>
         })}
        </Alert>
      </Collapse>
    </Box>:""}  
  
  {/* students, matatzs and teachers bell*/}
    {/* { token['mr-token'] &&  (user.userType == "1" || user.userType == "2"  || user.userType == "3")?   <Box >

<Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
<IconButton cursor="pointer" aria-label="bell"  disabled={open}
variant="outlined"
onClick={() => {
setOpen(true);
}}>
<StyledBadge badgeContent={projectsList && projectsList.length} color="secondary">
<NotificationsIcon />
</StyledBadge>
</IconButton>
</Stack>

<Collapse in={open}>
<Alert icon={false}  
action={
<IconButton

aria-label="close"
color="inherit"
size="small"
onClick={() => {
setOpen(false);
//   window.location.reload(false);
}}>
<CloseIcon fontSize="inherit" />
</IconButton>
}
sx={{ mb: 0 }}
>

{projectsList.map( project => {
// {console.log(Parent.changed)}
return   <p onClick={() =>goToProject(project)}>ממתין לאישור {project.title}</p>
// <p onClick={() =>goToProject(project)}>ממתין לאישור {project.title}</p>
// <NavLink to="'/ProjectDisplay?id=' + project.id" activeStyle>{project.title}</NavLink>
})}
</Alert>
</Collapse>
</Box>:""}   */}

            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;

// הפרויקט לא אושר להעלאה מסיבה כלשהי. לפרטים נוספים, אנא פני/ה לרכז שלך.