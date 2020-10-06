import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Banner from './Components/Banner/Banner';
import CharityWorks from './Components/CharityWorks/CharityWorks';
import Header from './Components/Header/Header';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UserTasksList from './Components/UserTasksList/UserTasksList';
import ComingSoon from './Components/ComingSoon/ComingSoon';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import CreateEvent from './Components/AdminPanel/CreateEvent';
import Events from './Components/Events/Events';


export const UserContext = createContext()
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value ={[loggedInUser,setLoggedInUser]}>
    
    <Router> 
      <Header></Header>
      <Switch> 
        <Route path="/home"> 
          <Banner></Banner>
          <Events></Events>
          <CharityWorks></CharityWorks>
        </Route>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
        <PrivateRoute path ="/charitywork/:workname"> 
          <Register></Register>
        </PrivateRoute>
        <PrivateRoute path="/my-tasks">
           <UserTasksList></UserTasksList>
        </PrivateRoute>
        <Route path="/donation">
          <ComingSoon></ComingSoon>
        </Route>
        <Route path="/blog">
          <ComingSoon></ComingSoon>
        </Route>
        <Route path="/admin-panel">
          <AdminPanel></AdminPanel>
        </Route>
        <Route path="/create-event">
          <CreateEvent></CreateEvent>
        </Route>
        <Route exact path ="/">
          <Banner></Banner>
          <CharityWorks></CharityWorks>
        </Route>
        <Route path="*"> 
          <h1>Error</h1>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
