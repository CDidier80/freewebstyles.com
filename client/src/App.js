import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LandingPage from './pages/LandingPage'
import SignupPage from './pages/SignupPage'
import UserProfilePage from './pages/UserProfilePage'
import consoleLogTests from './js-exports/logTests.js'
// import ProtectedRoute from './components/ProtectedRoute'
import "./styles/App.css"
import { CheckSessionService } from './services/UserService'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileName: "App.js",
      consoleLogTests: consoleLogTests,
      authenticated: false,
      currentUser: null, 
      pageLoading: true,
    }
  }

  componentDidMount() {
    this.setState({ pageLoading: false })
  }

  verifyTokenValid = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
          const session = await CheckSessionService()
            this.setState(
              {
                currentUser: session,
                authenticated: true
              },
              () => this.props.history.push('/mainpage')
            )
          } catch (error) {
            this.setState({ currentUser: null, authenticated: false })
            localStorage.clear()
          }
    }
  }
  
  toggleAuthenticated = (value, user, done) => {
    this.setState({ authenticated: value, currentUser: user }, () => done())
  }

  goToSignupPage = async (e) => {
    e.stopPropagation()
    const linkClassName = e.target.className
    console.log('Link Class Name :', linkClassName)
    await this.setState({loginPageDefault: linkClassName})
    await this.props.history.push('/login')
}

  render() {
    return (
      <main className="App">
        {this.state.pageLoading ? (
          <div>
            <h3>Loading...</h3>
          </div>
        ) : (
          <Switch>
            <Route exact path="/" component={(props) => <LandingPage {...props} verifyTokenValid={this.verifyTokenValid}  toggleAuthenticated={this.toggleAuthenticated}/>}/>
            <Route path="/main" component={(props) => <MainPage {...props} goToSignupPage={this.goToSignupPage} verifyTokenValid={this.verifyTokenValid} toggleAuthenticated={this.toggleAuthenticated}/>}/>
            <Route path="/login" component={(props) => <SignupPage {...props}  verifyTokenValid={this.verifyTokenValid} toggleAuthenticated={this.toggleAuthenticated}/>}/>
            <Route path="/profile" component={(props) => <UserProfilePage {...props} verifyTokenValid={this.verifyTokenValid}  toggleAuthenticated={this.toggleAuthenticated}/>}/>
          </Switch>
        )}
      </main>
    )
  }
}

export default withRouter(App)





