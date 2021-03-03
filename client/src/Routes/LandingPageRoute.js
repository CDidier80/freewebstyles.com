import LandingPage from "../pages/LandingPage/LandingPage"
import { Route } from 'react-router-dom'
import React from 'react'


const LandingPageRoute = (props) => {
    return (
        <Route exact path="/" >
            <LandingPage {...props} /> 
        </Route>
    )
}

export default LandingPageRoute