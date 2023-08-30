import { SET_CONFIRMAION_LOADER} from "../actionTypes/confirmation"

import { createConfirmations } from "../../services/confirmations";

export const createConfirmation = ({dispatch,payload}) => {
    
    dispatch({
        type:SET_CONFIRMAION_LOADER,
        payload:true,
    })

    createConfirmations(payload)
    .then(({data}) =>{
        console.log("done");
        dispatch({
            type:SET_CONFIRMAION_LOADER,
            payload:false,
        })
    }).catch((error)=>{
        console.log(error);
        dispatch({
            type:SET_CONFIRMAION_LOADER,
            payload:false,
        })
    });
}