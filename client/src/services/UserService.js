import ApiClient from './ApiClient'

export const __GetProfile = async (userId) => {
  try {
    const res = await ApiClient.get(`/users/${userId}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __RegisterUser = async (formData) => {
  try {
    const res = await ApiClient.post('/users/register', formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __LoginUser = async (userData) => {
  console.log('User Data', userData)
  try {
    const res = await ApiClient.post('/users/login', userData)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

  // With authentication being integrawted, the client must check that the token created by Axios is valid with each user that is authenticated
//  we'll need to use a new route 
//  We need a new function export that we will call __CheckSession
// This function will connect to our API's (back-end) users/refresh/session endpoint and respond with verified token data if it exists and refresh the current user's session if it does.
// This service allows a user to remain logged in as they use our application. 

export const __CheckSession = async() => {
  try{
    const res = await ApiClient.get('/users/refresh/session')
    return res.data
  } catch (error) {
    throw error
  }
}



// STEP 2: COMPLETE 

// Next, we need to create a new component in our /client/src/components directory called ProtectedRoute.js.......