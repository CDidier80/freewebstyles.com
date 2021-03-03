import React, { Component } from 'react'
import '../styles/LandingPage.css'
import TriangleSvg from "./landing-components/TriangleSvg.js"
import LogInForm from "../components/landing-components/LogInForm.js"
import { CreateUserService, LoginUserService } from '../services/UserService'
import { LandingPageLogs } from "./logs"

class LandingPage extends Component {


  goToMainPage = () => {
    this.props.history.push('/main')
  }


  render() {


    return (
      <div className="landingPage">
        <TriangleSvg />

        <div className="landingPageGreeting landingPageLeft">
          <div className="webstylesWrapper">          
            <h1 className="freeWord bothWords ">FREE</h1>
            <h1 className="webstylesWord bothWords ">WEB STYLES</h1>
          </div>


          <div className='actionContainer'>
              <p className='loginLink' > Sign In </p>
              <p className='signupLink' > Sign Up </p>
              <button 
                className="getStartedButton" 
                onClick={()=>this.goToMainPage()}
              >
                GET STARTED
              </button>
          </div>
        </div>
      </div>
    )
  }

}

export default LandingPage