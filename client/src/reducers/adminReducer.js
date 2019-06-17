import {LOGIN_USER} from '../actions/type';

const initialState=[];

export const loginUser = (state= initialState, action={}) =>{
    switch(action.types){
        case LOGIN_USER:
            return 
        default:
            return state;
    }
}