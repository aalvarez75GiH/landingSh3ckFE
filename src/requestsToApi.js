import axios from 'axios'

// const URL_BACKEND = 'http://192.168.1.102:5000'
const URL_BACKEND = 'https://intense-atoll-00786.herokuapp.com'

export const verifyingTokenRequest = async(token) => {
    return await axios.get(`${URL_BACKEND}/api/users/me`, {
    headers:{
        Authorization: `Bearer ${token}` 
    }})
    
}

export const addingGoogleUserToDB = async(token) => {
    return await axios.post(`${URL_BACKEND}/api/extUsers/google`, {
        token,
        headers:{
            'Content-Type': 'application/json',
        },
    })  
} 

export const addingInterestedUserToDB = async(interestedUser) => {
    return await axios.post(`${URL_BACKEND}/api/interestedUsers`, interestedUser)
}

export const requestToLoginUsers = async(user) => {
    return await axios.post(`${URL_BACKEND}/api/users/login`, user)
}

export const addingRegularUsersToDB = async(user) => {
    return await axios.post(`${URL_BACKEND}/api/users`, user)
}

export const requestToGenerateNewPIN = async(dataToRequest) => {
    return await axios.put(`${URL_BACKEND}/api/users/newPIN`, dataToRequest)
}

export const getRequestToCities = async() => {
    const token = localStorage.getItem("SH3CK_TOKEN")
    console.log(token)
    const response = await axios.get(`${URL_BACKEND}/api/cities`, {
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`   
        }, 
    })
    return response.data
}

export const getRequestToCategories = async() => {
    const token = localStorage.getItem("SH3CK_TOKEN")
    console.log(token)
    const response = await axios.get(`${URL_BACKEND}/api/category`, {
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`   
        }, 
    })
    return response.data
}

export const getRequestToServiceTime = async() => {
    const token = localStorage.getItem("SH3CK_TOKEN")
    console.log(token)
    const response = await axios.get(`${URL_BACKEND}/api/times`, {
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`   
        }, 
    })
    return response.data
}

export const getRequestToCheckers = async(city_id) => {
    const token = localStorage.getItem("SH3CK_TOKEN")
    console.log(token)
    const response = await axios.get(`${URL_BACKEND}/api/checkers/${city_id}/searches`, {
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`   
        }, 
    })
    return response.data
}
