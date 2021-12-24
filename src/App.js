import React, {useEffect} from 'react';
import './App.css';
import HomeScreen  from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {auth} from "./firebase";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in 
        console.log(userAuth);
      } else {
        //logged out
      }
    })
    return unsubscribe;
  }, [])
  return (
    <div className="app">

    <Router>
      {!user ? (
        <LoginScreen />
      ): (
        <Routes> {/*V6 upgrade switch -> Routes*/}
           
            <Route exact path="/" element={ <HomeScreen/>} />

        </Routes>
      )}
        

    </Router>
  
    </div>
  );
}

export default App;
