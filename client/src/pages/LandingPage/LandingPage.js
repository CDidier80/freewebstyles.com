import GetStylishButton from './components/GetStylishButton'
import FreeWebStyles from "./components/FreeWebStyles"
import TriangleSvg from "./components/TriangleSvg.js"
import TrianglifyBackground from "./components/trianglify/TrianglifyBackground"
import React from 'react'
import './landingPage.css'

const LandingPage = (props) => {

    return (
      <div className="landingPage">
        {/* <TriangleSvg /> */}
        <TrianglifyBackground />

        <div className="landingPageGreeting landingPageLeft">

          <FreeWebStyles  />
          <GetStylishButton {...props} />
        </div>
      </div>
    )
  }


export default LandingPage