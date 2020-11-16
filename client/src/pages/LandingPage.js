import React, { Component } from 'react'
import '../styles/LandingPage.css'
import TriangleSvg from "../components/landing-components/TriangleSvg.js"
import LogInForm from "../components/landing-components/LogInForm.js"
import { CreateUserService, LoginUserService } from '../services/UserService'



class LandingPage extends Component {
  // console.log(children)
  constructor(props){
    super(props)
    this.state = {
        // props from App.js 
        toggleAuthenticated: props.toggleAuthenticated,
        verifyTokenValid: props.verifyTokenValid,
        authenticated: props.authenticated,
        currentUser: props.currentUser,
        //

        eventTarget: "",
        username: "",
        email: "",
        password: ""
    }
  }

  activateForm = (e) => {
    e.preventDefault() 
    console.log('clicked')
      this.setState({eventTarget: e.target.className})
    }

  goToMainPage = () => {
    this.props.history.push('/main')
  }

  submitSignUp = (e) => {
    // e.preventDefault()
    const formData = {username: this.state.username, email: this.state.email, password: this.state.password}
    // console.log(formData)
    CreateUserService(formData)
  }

  submitLogIn = async (e) => {
    console.log('submitLogin() fired')
    const {toggleAuthenticated, email, password} = this.state
    e.preventDefault()
    const formData = {email: email, password: password}
    console.log("formData sent to back-end: ", formData)
    const responseData =  await LoginUserService(formData)
    console.log("Response received: ",responseData)
    console.log("Username received as part of responseData: ", responseData.user.username)
    toggleAuthenticated(true, responseData.user.username, ()=>this.props.history.push('/main'))
  }

  updateField = (event, fieldToUpdate) => {
    switch (event.target.id) {
      case "username":
        this.setState({username: event.target.value})
        break
      case "email":
        this.setState({email: event.target.value})
        break
      case "password":
        this.setState({password: event.target.value})
        break
      default: 
        console.log('updateField() switch statement originating in LandingPage.js had no matching cases.')
    }
  }

  render() {
    const {eventTarget, currentUser, authenticated} = this.state
    console.log("The state of LandingPage at render: ", this.state)
    console.log("this.props of LandingPage at rendering: ", this.props)
    console.log("Current User: ", currentUser)
    console.log("Authenticated: ", authenticated)
    console.log('/////////////////////////////////////////////////////////////////')
    return (
      <div className="landingPage">
        <TriangleSvg />
        {eventTarget === "loginLink" ? <LogInForm className="LogInPanel" panelState={eventTarget} formSubmit={this.submitLogIn} updateField={this.updateField}/> : null}
        {eventTarget === "signupLink" ? <LogInForm className="LogInPanel" panelState={eventTarget} formSubmit={this.submitSignUp} updateField={this.updateField}/> : null}

        <div className="landingPageGreeting landingPageLeft">
          <div className="webstylesWrapper">          
            <h1 className="freeWord bothWords ">FREE</h1>
            <h1 className="webstylesWord bothWords ">WEB STYLES</h1>
          </div>
          <div className='actionContainer'>
             <p className='loginLink' onClick={(e)=>this.activateForm(e)}>Sign In</p>
             <p className='signupLink' onClick={(e)=>this.activateForm(e)}>Sign Up</p>
             <button className="getStartedButton" onClick={()=>this.goToMainPage()}>GET STARTED</button>
          </div>
        </div>
      </div>
    )
  }

}

export default LandingPage