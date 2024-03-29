import axios from 'axios';
const url = 'http://localhost:3000';

export const addPerson = async (data)=>{
    try {
        await axios.post(`${url}/person`,data);
    } catch (error) {
        console.log("data fetching error ",error)
    }
} 

export const getPerson = async ()=>{
    try {
        const response = await axios.get(`${url}/persons`);
        return response.data;
    } catch (error) {
        console.log('getperson', error);
    }
}

export const setMessage = async (data)=>{
    try {
        await axios.post(`${url}/message/set`, data);
    } catch (error) {
        console.log('setmessage', error);
    }
}
export const getMessage = async (data)=>{
    try {
        const response = await axios.post(`${url}/message/get`, data);
        return response.data;
    } catch (error) {
        console.log('getmessage', error);
    }
}

export const newConvMessage = async (data)=>{
    try {
        await axios.post(`${url}/message/new`, data);
    } catch (error) {
        console.log('newconvmessage', error);
    }
}

export const getConvMessage = async (id)=>{
    try {
        const response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log('getconvmessage', error);
    }
}