import axios from 'axios';

export const addUser = async (data)=>{
    try {
        await axios.post('http://localhost:3000/user',data);
    } catch (error) {
        console.log("data fetching error ",error)
    }
} 
