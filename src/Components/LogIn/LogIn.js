import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import './LogIn.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const LogIn = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from:{pathname:"/"}}
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            const {displayName,email} = result.user;
            const signedInUser = {name: displayName,email:email}
            setLoggedInUser(signedInUser);
            history.replace(from)
          }).catch(function(error) {
                console.log(error)
          });
    }
    return (
        <div className="logIn-page">
            <Container>
                <h3 style={{textAlign: "center"}}>Log In With</h3>
                <Button className="login-btn"onClick={handleGoogleSignIn}>Continue With Google</Button>
            </Container>
        </div>
    );
};

export default LogIn;