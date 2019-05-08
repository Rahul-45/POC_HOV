import {FETCH_DATA,MENU_CHANGE} from '../actions/types';

const initialState = {
    items:[],
    isLoaded:false,
    activeItem:'VPC Table'
}

export default function(state = initialState, action){
    //console.log("Reducer here")
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                items: action.payload,
                isLoaded:true
            }
        case MENU_CHANGE:
            return{
                ...state,
                activeItem:action.payload
            }
        default:
            return state;
    }

}