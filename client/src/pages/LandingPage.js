import React, { Component } from 'react'
import '../styles/LandingPage.css'
import TriangleSvg from "../components/landing-components/TriangleSvg.js"
import LogInForm from "../components/landing-components/LogInForm.js"
import GetStartedButton from "../components/landing-components/GetStartedButton"



class LandingPage extends Component {
  // console.log(children)
  constructor(props){
    super(props)
    this.state = {
        key: "value"
    }
  }

  render() {
    return (
      <div className="landingPage">
        <TriangleSvg />
        <LogInForm className="LogInPanel"/>
        <GetStartedButton />
      </div>
    )
  }

}

export default LandingPage