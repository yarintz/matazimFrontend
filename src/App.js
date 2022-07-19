import './App.css';
import React, {useEffect} from 'react';
import Navbar from "./components/Navbar";
import HomepageScreen from './pages/HomepageScreen';
import CoursesScreen from './pages/CoursesScreen';
import ProjectsScreen from './pages/ProjectsScreen';
import ProfileScreen from './pages/ProfileScreen';
import CoursesMainScreen from './pages/CoursesMainScreen';
import TeachersScreen from './pages/TeachersScreen';
import AboutusScreen from './pages/AboutusScreen';
import UpdateUserDetails from './components/UpdateUserDetails';
import Signin from './pages/Signin'; 
import UserProfile from './pages/UserProfile'; 
import UserRegistration from './pages/UserRegistration'; 
import CheckUserAssignments from './pages/CheckUserAssignments';
import ClassReport from './pages/ClassReport';
import ClassReportNew from './pages/ClassReportNew';
import TeacherReport from './pages/TeacherReport';
import CoordinatorReport from './pages/CoordinatorReport';
import AdminReport from './pages/AdminReport';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useCookies } from 'react-cookie';



function App() {
  const [token, setToken, deleteToken] = useCookies(['mr-token']);


  return (

    <Router>
     
      <Navbar />
      <Switch>
        <Route path="/HomepageScreen" exact component={HomepageScreen} />
        <Route path="/CoursesScreen" component={CoursesScreen} />
        <Route path="/ProjectsScreen" component={ProjectsScreen} />
        <Route path="/ProfileScreen" component={ProfileScreen} />
        <Route path="/TeachersScreen" component={TeachersScreen} />
        <Route path="/AboutusScreen" component={AboutusScreen} />
        <Route path="/Signin" component={Signin} />
        <Route path="/CoursesMainScreen" component={CoursesMainScreen} />
        <Route path="/UpdateUserDetails" component={UpdateUserDetails}/>
        <Route path="/UserProfile" component={UserProfile}/>
        <Route path="/UserRegistration" component={UserRegistration}/>
        <Route path="/CheckUserAssignments" component={CheckUserAssignments}/>
        <Route path="/ClassReport" component={ClassReport}/>
        <Route path="/ClassReportNew" component={ClassReportNew}/>
        <Route path="/TeacherReport" component={TeacherReport}/>
        <Route path="/CoordinatorReport" component={CoordinatorReport}/>
        <Route path="/AdminReport" component={AdminReport}/>
      </Switch>
    </Router>
  );
}

export default App;