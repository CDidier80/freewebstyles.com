import MainPage from "../pages/MainPage/MainPage"
import { Route } from 'react-router-dom'
import React from 'react'

const MainPageRoute = (props) => {
    return (
        <Route exact path="/" >
            <MainPage {...props} /> 
        </Route>
    )
}

export default MainPageRoute