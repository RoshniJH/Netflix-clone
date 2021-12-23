import React,{useState} from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';
function LoginScreen() {
    const [signIn,setSignIn] = useState(false);
    return (
        <div className='loginScreen'>
            <div className="loginScreen__background">
            <img className="loginScreen__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <button 
            onClick = {() => setSignIn(true)}
            className="loginScreen__Button">Sign In</button>
            <div className="loginScreen__gradiant"/>
            </div>

            <div className="loginScreen__body">
            {signIn ? (<SignupScreen />) : (
                <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere.Cancel any time.</h2>
                <h3>Ready to watch? Enter your Email to create or restart your membership</h3>
                <div className="loginScreen__inputs">
                <form>
                <input type="email" placeholder="Email Address"></input>
                <button 
                onClick={() => setSignIn(true)}
                className="loginScreen__getStarted">GET STARTED</button>
                </form>
                </div>
            </>
            ) }
            
            </div>
        </div>
    )
}

export default LoginScreen
