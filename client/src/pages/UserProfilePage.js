import React, { Component } from 'react'
import '../styles/LandingPage.css'
import TriangleSvg from "../components/landing-components/TriangleSvg.js"
import Avatar from '@material-ui/core/Avatar';

export default class UserProfile extends Component {
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

//   componentDidMount = () => {
//     console.log("componentDidMount() fired in SignupPage.js")
//     if(this.state.loginPageDefault === "") {
//       this.setState({loginPageDefault: "signUpLink"})
//     }
//   }

//   activateForm = (e) => {
//     e.preventDefault() 
//     console.log('clicked')
//       this.setState({eventTarget: e.target.className})
//     }

//   goToMainPage = () => {
//     this.props.history.push('/main')
//   }

//   submitSignUp = (e) => {
//     const formData = {username: this.state.username, email: this.state.email, password: this.state.password}
//     CreateUserService(formData)
//   }

//   submitLogIn = async (e) => {
//     // console.log('submitLogin() fired')
//     const {toggleAuthenticated, email, password} = this.state
//     e.preventDefault()
//     const formData = {email: email, password: password}
//     // console.log("formData sent to back-end: ", formData)
//     const responseData =  await LoginUserService(formData)
//     // console.log("Response received: ",responseData)
//     // console.log("Username received as part of responseData: ", responseData.user.username)
//     toggleAuthenticated(true, responseData.user.username, ()=>this.props.history.push('/main'))
//   }

//   updateField = (event, fieldToUpdate) => {
//     switch (event.target.id) {
//       case "username":
//         this.setState({username: event.target.value})
//         break
//       case "email":
//         this.setState({email: event.target.value})
//         break
//       case "password":
//         this.setState({password: event.target.value})
//         break
//       default: 
//         console.log('updateField() switch statement originating in LandingPage.js had no matching cases.')
//     }
//   }

  render() {
    // const {loginPageDefault, currentUser, authenticated} = this.state
    // console.log("The state of UserProfile at render: ", this.state)
    // console.log("this.props of UserProfile at rendering: ", this.props)
    // console.log("Current User: ", currentUser)
    // console.log("Authenticated: ", authenticated)
    console.log('///////////////////////////RENDER USERPROFILE.JS BELOW//////////////////////////////////////')
    return (
        <div className="userProfile">
            <TriangleSvg />
            <Avatar />
        </div>
    )
  }
}

