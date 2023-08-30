import { SET_CONTACTUS_LOADER } from "../actionTypes/contactus";

const initialState = {
    contactUsLoader:false,
}

const contactusReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case SET_CONTACTUS_LOADER:
            return {
                ...state,
                contactUsLoader:payload
            };

        default:
            return state;
    }
};

export default contactusReducer;