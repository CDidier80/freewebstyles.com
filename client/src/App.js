import React, { Component } from 'react'
// withRouter added in part 5: authentication lesson
import { Switch, Route, withRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LandingPage from './pages/LandingPage'
import SignupPage from './pages/SignupPage'


// import Signup from '../pages/Signup'
// import SignIn from '../pages/SignIn'
// import Nav from './Nav'
// start of part 5: authentication imports
// import CreatePost from '../pages/CreatePost'
// import Profile from '../pages/Profile'
// import UpdatePost from '../pages/UpdatePost'
// import ViewPost from '../pages/ViewPost'
// import Layout from './Layout'
// import ProtectedRoute from './components/ProtectedRoute'
// remember this function import is what lets users stay logged in
import "./styles/App.css"
import { CheckSessionService } from './services/UserService'
import { SvgIcon } from '@material-ui/core'

class App extends Component {
  constructor(props) {
    super(props)
    // In its state object we will need 2 new key value pairs that we will use to check for authenticated users:
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

  // authentication methods

  //  This method is used after a user has already logged in to test whether they have a valid token
  // // this will get a token from localStorage and test it against our __CheckSession function to allow for a secure user authentication.
  // // First we need a token. If a token is present, we will set the user to the active session found by our __CheckSession.
  // // Otherwise, we will set the currentUser to null and clear localStorage


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
      // Send Api request to verify token
      // if token valid should set a user to state
    }
  }
  

  // for signing in users
  // toggleAuthenticated will set the state of our currentUser and whether or not they are authenticated. We will use this when a user logs in or signs out.
  toggleAuthenticated = (value, user, done) => {
    this.setState({ authenticated: value, currentUser: user }, () => done())
  }


  // if it doesnt work, try flipping last 2 lines
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

            {/* <Route path="/register" component={(props) => ( <LandingPage> <Signup {...props} /> </LandingPage>)}/>



            <Route
              path="/login"
              component={(props) => (
                <LandingPage>
                  <SignIn {...props} />
                </LandingPage>
              )}
            />
            <Route
              path="/discover"
              component={() => (
                <div>
                  <Nav />
                  <Discover />
                </div>
              )}
            /> */}
          </Switch>
        )}
      </main>
    )
  }
}

// Router changed to withRouter(Router) in authentication lesson
export default withRouter(App)
