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
    console.log("Response receieved from backend in StyleService.js GetOneStyleService: ", res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetManyRecentStylesService = async (numToGet) => {
  try {
    const res = await ApiClient.get(`/StyleRouterJs/StyleControllerJs/getManyRecentStyles/${numToGet}`)
    console.log("Response receieved from backend in StyleService.js GetOneStyleService: ", res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetManyUsersRecentStylesService = async (currentUser, numToGet) => {
  try {
    const res = await ApiClient.get(`/StyleRouterJs/StyleControllerJs/getusersrecentstyles/${currentUser}/${numToGet}`)
    console.log("Response receieved from backend in StyleService.js GetManyUsersRecentStylesService: ", res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetManyUsersLikedStylesService = async (currentUser, numToGet) => {
  try {
    const res = await ApiClient.get(`/StyleRouterJs/StyleControllerJs/getmanylikedstyles/${currentUser}/${numToGet}}`)
    console.log("Response receieved from backend in StyleService.js GetManyUsersLikedStylesService: ", res)
    return res.data
  } catch (error) {
    throw error
  }
}




// I THINK THIS IS A GET MANY
// export const GetOnePostService = async (page, limit) => {
//   try {
//     const res = await ApiClient.get(
//       `/posts?page=${page || 1}&limit=${limit || 10}`
//     )
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

// export const __UpdatePost = async (formData, postId) => {
//   try {
//     const res = await ApiClient.put(`/posts/${postId}?active=true`, formData)
//     console.log(res.data)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

// export const __DeletePost = async (postId) => {
//   try {
//     const res = await ApiClient.delete(`/posts/${postId}?active=true`)
//     return res
//   } catch (error) {
//     throw error
//   }
// }