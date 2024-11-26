import {FETCH_DATA,ADD_DATA} from '../actions/actions';

const initialState={
    posts:[]
}

export const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                posts:action.payload
            };
        case ADD_DATA:
            return {
                ...state,
                posts:[action.payload,...state.posts] // Add new post to the top of posts
            };
        default:
            return state;
    }
}

export default postReducer;
