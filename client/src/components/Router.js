import React, { Component } from 'react'
// withRouter added in part 5: authentication lesson
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from '../pages/Home'
import LandingPage from '../pages/LandingPage'
import Signup from '../pages/Signup'
import SignIn from '../pages/SignIn'
import Discover from '../pages/Discover'
import Nav from './Nav'
// start of part 5: authentication imports
import CreatePost from '../pages/CreatePost'
import Profile from '../pages/Profile'
import UpdatePost from '../pages/UpdatePost'
import ViewPost from '../pages/ViewPost'
import Layout from './Layout'
import ProtectedRoute from './ProtectedRoute'
// remember this function import is what lets users stay logged in
import { __CheckSession } from '../services/UserService'

class Router extends Component {
  constructor() {
    super()
    // In its state object we will need 2 new key value pairs that we will use to check for authenticated users:
    this.state = {
      pageLoading: true,
      // new..
      currentUser: null, 
      pageLoading: true
    }
  }

  componentDidMount() {
    this.setState({ pageLoading: false })
  }

  // authentication methods

  
  // this will get a token from localStorage and test it against our __CheckSession function to allow for a secure user authentication.
  // First we need a token. If a token is present, we will set the user to the active session found by our __CheckSession.
  // Otherwise, we will set the currentUser to null and clear localStorage
  verifyTokenValid = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
          const session = await __CheckSession()
            this.setState(
              {
                currentUser: session,
                authenticated: true
              },
              () => this.props.history.push('/profile')
            )
          } catch (error) {
            this.setState({ currentUser: null, authenticated: false })
            localStorage.clear()
          }
      // Send Api request to verify token
      // if token valid should set a user to state
    }
  }
  
  // toggleAuthenticated will set the state of our currentUser and whether or not they are authenticated. We will use this when a user logs in or signs out.
  toggleAuthenticated = (value, user, done) => {
    this.setState({ authenticated: value, currentUser: user }, () => done())
  }

  render() {
    return (
      <main>
        {this.state.pageLoading ? (
          <div>
            <h3>Loading...</h3>
          </div>
        ) : (
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <LandingPage>
                  <Home />
                </LandingPage>
              )}
            />
            <Route
              path="/register"
              component={(props) => (
                <LandingPage>
                  <Signup {...props} />
                </LandingPage>
              )}
            />
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
            />
          </Switch>
        )}
      </main>
    )
  }
}

// Router changed to withRouter(Router) in authentication lesson
export default withRouter(Router)
