import {SELECT_MOVIE} from "../constants";

export default (state=1,action)=>{
    switch(action.type){
        case SELECT_MOVIE:
            return state;
        default:
            return state;
    }
}
