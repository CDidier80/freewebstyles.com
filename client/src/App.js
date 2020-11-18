import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LandingPage from './pages/LandingPage'
import SignupPage from './pages/SignupPage'
// import ProtectedRoute from './components/ProtectedRoute'
import "./styles/App.css"
import { CheckSessionService } from './services/UserService'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      currentUser: null, 
      pageLoading: true,
      loginPageDefault: "",
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
    const {authenticated, currentUser, loginPageDefault} = this.state
    return (
      <main className="App">
        {this.state.pageLoading ? (
          <div>
            <h3>Loading...</h3>
          </div>
        ) : (
          <Switch>
            <Route exact path="/" component={(props) => <LandingPage {...props} verifyTokenValid={this.verifyTokenValid}  authenticated={authenticated} currentUser={currentUser} toggleAuthenticated={this.toggleAuthenticated}/>}/>
            <Route exact path="/main" component={(props) => <MainPage {...props} goToSignupPage={this.goToSignupPage} authenticated={authenticated} verifyTokenValid={this.verifyTokenValid} authenticated={authenticated} currentUser={currentUser} toggleAuthenticated={this.toggleAuthenticated}/>}/>
            <Route exact path="/login" component={(props) => <SignupPage {...props} loginPageDefault={loginPageDefault} authenticated={authenticated} verifyTokenValid={this.verifyTokenValid} authenticated={authenticated} currentUser={currentUser} toggleAuthenticated={this.toggleAuthenticated}/>}/>
          </Switch>
        )}
      </main>
    )
  }
}

export default withRouter(App)
