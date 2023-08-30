import { SET_CONTACTUS_LOADER} from "../actionTypes/contactus"

import { createContactUsService } from "../../services/contactus";

export const createContactUs = ({dispatch,payload}) => {
    
    dispatch({
        type:SET_CONTACTUS_LOADER,
        payload:true,
    })

    createContactUsService(payload)
    .then(({data}) =>{
        console.log("done");
        dispatch({
            type:SET_CONTACTUS_LOADER,
            payload:false,
        })
    }).catch((error)=>{
        console.log(error);
        dispatch({
            type:SET_CONTACTUS_LOADER,
            payload:false,
        })
    });
}