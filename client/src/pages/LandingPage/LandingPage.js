import GetStylishButton from './components/GetStylishButton'
import FreeWebStyles from "./components/FreeWebStyles"
import TriangleSvg from "./components/TriangleSvg.js"
import React from 'react'
import './landingPage.css'

const LandingPage = (props) => {

    return (
      <div className="landingPage">
        <TriangleSvg />

        <div className="landingPageGreeting landingPageLeft">

          <FreeWebStyles  />
          <GetStylishButton {...props} />
        </div>
      </div>
    )
  }


export default LandingPage