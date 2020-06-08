import { GET_TOTAL_USERS,GET_ACTIVE_TRAINEES,GET_ACTIVE_TRAINERS,GET_BLOCK_TRAINEES,GET_BLOCK_TRAINERS } from "../action/type";
const initialState={
    totalUsers:"67"
    
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_TOTAL_USERS:
            return {
                ...state,
                
                
            };
        default:
            return state;
    }
}