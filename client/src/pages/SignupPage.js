import React, { Component } from 'react'
import '../styles/LandingPage.css'
import TriangleSvg from "../components/landing-components/TriangleSvg.js"
import LogInForm from "../components/landing-components/LogInForm.js"
import { CreateUserService, LoginUserService } from '../services/UserService'


class SignupPage extends Component {
  // console.log(children)
  constructor(props){
    super(props)
    this.state = {
        fileName: "SignupPage.js",
        isClassComponent: true,
        // props from App.js 
        toggleAuthenticated: props.toggleAuthenticated,
        verifyTokenValid: props.verifyTokenValid,
        authenticated: props.authenticated,
        currentUser: props.currentUser,
        //
        loginPageDefault: this.props.history.location.state.loginPageDefault,
        eventTarget: "",
        username: "",
        email: "",
        password: ""
    }
  }

  componentDidMount = () => {
    console.log("componentDidMount() fired in SignupPage.js")
    if(this.state.loginPageDefault === "") {
      this.setState({loginPageDefault: "signUpLink"})
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
    const {username, email, password} = this.state
    const formData = {username: username, email: email, password: password}
    CreateUserService(formData)
  }

  submitLogIn = async (e) => {
    // console.log('submitLogin() fired')
    const {toggleAuthenticated, email, password} = this.state
    e.preventDefault()
    const formData = {email: email, password: password}
    // console.log("formData sent to back-end: ", formData)
    const responseData =  await LoginUserService(formData)
    // console.log("Response received: ",responseData)
    // console.log("Username received as part of responseData: ", responseData.user.username)
    toggleAuthenticated(true, responseData.user.username, ()=>this.props.history.push('/main'))
  }

  updateField = (event) => {
    const {value} = event.target
    switch (event.target.id) {
      case "username":
        this.setState({username: value})
        break
      case "email":
        this.setState({email: value})
        break
      case "password":
        this.setState({password: value})
        break
      default: 
        console.log('updateField() switch statement originating in LandingPage.js had no matching cases.')
    }
  }



  render() {
    const {loginPageDefault, currentUser, authenticated} = this.state
    // this.classCompLogTests()
    console.log("this.props.location.state passed by a Link/NavLink component at render: ", this.props.location)
    const isSigningIn = loginPageDefault === "signInLink" ? true : false
    return (
      <div className="signupPage">
        <TriangleSvg />
        <LogInForm className="LogInPanel" formSubmit={isSigningIn ? this.submitLogIn : this.submitSignUp} panelState={ isSigningIn ? false : "signupLink"} updateField={this.updateField}/> 
      </div>
    )
  }
}

export default SignupPage