import React, {useEffect} from 'react';
import './App.css';
import HomeScreen  from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {auth} from "./firebase";
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in 
       // console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }));
      } else {
        //logged out
        dispatch(logout);
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
