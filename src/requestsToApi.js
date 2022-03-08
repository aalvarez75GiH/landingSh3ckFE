import axios from 'axios'

export const verifyingTokenRequest = async(token) => {
    return await axios.get('https://intense-atoll-00786.herokuapp.com/api/users/me', {
    headers:{
        Authorization: `Bearer ${token}` 
    }})
    
}