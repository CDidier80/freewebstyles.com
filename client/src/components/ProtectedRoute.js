// We will be using this component in Router.js later on to protect routes to components that should require user authentication. 
// These routes will redirect the client router if a user is not authenticated.
// We want this Protected Route to be modular, so we can reuse it multiple times with routes that we want to protect.
// If a user is authenticated, we will allow them to access the route they are looking to reach.
// If a user is not authenticated, we will redirect them back to the home / route for our client.
// To achieve this we will be checking the authenticated prop that will be passed down to this component and using it with a conditional return.
// If true, we will return a Route that renders the Component passed through the props.
// If not, we will return a Redirect back to the home route of our client.

import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// what's happening here..destructuring? Or object interpolation?
export default ({ authenticated, children, component: Component, ...rest }) =>
  authenticated === true ? (
    <Route {...rest} component={Component}>
      {console.log(authenticated)}
    </Route>
  ) : (
    <Redirect to="/" />
  )

  // Now that we have the part needed to allow for authentication within our application, let's use them in our Router.js....