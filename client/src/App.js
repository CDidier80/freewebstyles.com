import LandingPageRoute from './Routes/LandingPageRoute'
import { Switch, withRouter } from 'react-router-dom'
import MainPageRoute from './Routes/MainPageRoute'
import React from 'react'
import "./styles/App.css"

const App = () =>  {

    return (
        <main className="App">
            <Switch>
                <LandingPageRoute />
                <MainPageRoute   />
            </Switch>
        </main>
    )
}


export default withRouter(App)
