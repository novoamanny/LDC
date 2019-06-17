import { FETCH_POSTS, NEW_POSTS } from "../actions/type";

const initialState={
    items:[],
    item: {}
}

export default function(state = initialState, action){
    switch(action.types){
        default:
            return state;
    }
}