import axios from 'axios'
const API = process.env.API_URL;

 

export default async function getDevsApi() {
     try {
        const query = await axios.get(API);
        return query.data;
     } 
     catch(error){
        console.log(error);
    }
}


