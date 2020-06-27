import {GET_MOVIES} from "../constants";

export default (state={},action)=>{
    switch(action.type){
        case GET_MOVIES:
            return state;
        default:
            return state;
    }
}