2q2yzmport axios from 'axios';

const API_URL = 'http://localhost:3001' 

export const addTodoApi= async(data) =>{
    const response = await axios.post(API_URL+'/todos/add',data)
    return response;
}

export const getApiData = () => {
    return axios.get(API_URL+'/todos/list')
}