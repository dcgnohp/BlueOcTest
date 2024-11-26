import axios from 'axios';

// Action types
export const FETCH_DATA='FETCH_DATA';
export const ADD_DATA='ADD_DATA';

// Fetch data from API
export const fetchData=()=>async(dispatch)=>{
    try{
        const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
            type:FETCH_DATA,
            payload:response.data
        });
    }catch(error){
        console.error('Error fetching data:',error);
    }
}

// Action to add new post
export const addPost=(data)=>async(dispatch)=>{
    try{
        const response=await axios.post('https://jsonplaceholder.typicode.com/posts',data);
        dispatch({
            type:ADD_DATA,
            payload:response.data
        });
    }catch(error){
        console.error('Error adding post:',error);
    }
}
