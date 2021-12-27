import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import './Nav.css';


function Nav() {
    //to handle hide and show on the top start
    const [show,handleShow] = useState(false);
    const history = useNavigate(); //v6 update useHistory() -> useNavigate()

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
        };

        useEffect(() => {
            window.addEventListener("scroll",transitionNavBar)
            return () => window.removeEventListener("scroll",transitionNavBar)
        }, []);
        
    return (
        <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents" >
        <img 
        onClick={() => history('/')}
        className="nav__logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="netflix-logo"/>
        <img 
        className="nav__avatar"
        onClick= {() => history('/profile')}
        //src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="avatar"/>
        </div>
        
            
        </div>
    )

    }
export default Nav
