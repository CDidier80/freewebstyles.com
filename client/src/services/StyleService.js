import ApiClient from './ApiClient'

export const PostStyleService = async (formData) => {
  try {
    const res = await ApiClient.post(`/StyleRouterJs/StyleControllerJs/poststyle/?active=true`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetOneStyleService = async (styleSearchQuery) => {
  try {
    const res = await ApiClient.get(`/StyleRouterJs/StyleControllerJs/getonestyle/${styleSearchQuery}`)
    // console.log("Response receieved from backend in StyleService.js GetOneStyleService: ", res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetManyRecentStylesService = async (numToGet) => {
  try {
    const res = await ApiClient.get(`/StyleRouterJs/StyleControllerJs/getManyRecentStyles/${numToGet}`)
    // console.log("Response receieved from backend in StyleService.js GetOneStyleService: ", res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetManyUsersRecentStylesService = async (currentUser, numToGet) => {
  try {
    const res = await ApiClient.get(`/StyleRouterJs/StyleControllerJs/getusersrecentstyles/${currentUser}/${numToGet}`)
    // console.log("Response receieved from backend in StyleService.js GetManyUsersRecentStylesService: ", res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetManyUsersLikedStylesService = async (currentUser, numToGet) => {
  try {
    const res = await ApiClient.get(`/StyleRouterJs/StyleControllerJs/getmanylikedstyles/${currentUser}/${numToGet}}`)
    // console.log("Response receieved from backend in StyleService.js GetManyUsersLikedStylesService: ", res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteOneStyleService = async (style_name) => {
  // console.log("DeleteOneStyleService() reached in StyleService.js")
  // console.log("Value of style_name at DeleteOneStyleService(): ", style_name)
  try {
    const res = await ApiClient.delete(`/StyleRouterJs/StyleControllerJs/deleteonestyle/${style_name}`)
    return res
  } catch (error) {
    throw error
  }
}

export const EditOneStyleService = async (reqBody, originalStyleName) => {
  try {
    const res = await ApiClient.put(`/StyleRouterJs/StyleControllerJs/editonestyle/${originalStyleName}?active=true`, reqBody)
    // console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
