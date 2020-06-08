import axios from 'axios';
import { GET_TOTAL_USERS,GET_ACTIVE_TRAINEES,GET_ACTIVE_TRAINERS,GET_BLOCK_TRAINEES,GET_BLOCK_TRAINERS } from './type';

export const getTotalUsers=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8080/tdmsapp/user/totalNumberOfUsers");
    dispatch({
        type:GET_TOTAL_USERS,
        payload:res.data
    })
};