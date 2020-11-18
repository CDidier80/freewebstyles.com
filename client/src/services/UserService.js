import ApiClient from './ApiClient'

export const GetProfileService = async (userId) => {
  try {
    const res = await ApiClient.get(`/UserRouterJs/UserControllerJs/getprofile/'${userId}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateUserService = async (formData) => {
  console.log('CreateUserService() reached carrying form data:', formData)
  try {
    const res = await ApiClient.post('/UserRouterJs/UserControllerJs/createuser', formData)
    return res.data
  } catch (error) {
    throw error
  }
}

// usercontrollers and middleware will send back a payload and token 
export const LoginUserService = async (formData) => {
  console.log("LoginUserService() reached in UserService.js")
  console.log('Form Data passed into LoginUserService(): ', formData)
  try {
    const res = await ApiClient.post('/UserRouterJs/UserControllerJs/login', formData)
    localStorage.setItem('token', res.data.token)
    console.log("UserService.js: Response data received from back-end en-route back to client: ", res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

// This service allows a user to remain logged in as they use our application. 
export const CheckSessionService = async() => {
  try{
    const res = await ApiClient.get('/AppRouterJs/UserRouterJs/UserControllerJs/refresh/session')
    return res.data
  } catch (error) {
    throw error
  }
}
