import axios from 'axios';

export const addPerson = async (data)=>{
    try {
        await axios.post('http://localhost:3000/person',data);
    } catch (error) {
        console.log("data fetching error ",error)
    }
} 
