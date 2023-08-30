import { SET_CONFIRMAION_LOADER } from "../actionTypes/confirmation";

const initialState = {
    confirmationLoader:false,
}

const confirmationReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case SET_CONFIRMAION_LOADER:
            return {
                ...state,
                confirmationLoader:payload
            };

        default:
            return state;
    }
};

export default confirmationReducer;