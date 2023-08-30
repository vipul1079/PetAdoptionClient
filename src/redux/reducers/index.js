import {combineReducers} from "@reduxjs/toolkit"
import categoriesReducer from "./categories";
import petsReducer from "./pets";
import adoptionsReducer from "./adoptions";
import snackbarReducer from "./snackbar";
import confirmationReducer from "./confirmations";
import contactusReducer from "./contactus";
const rootReducer = combineReducers({
    categories:categoriesReducer,
    pets:petsReducer,
    adoptions: adoptionsReducer,
    snackbar:snackbarReducer,
    confirmations:confirmationReducer,
    contactus:contactusReducer,
});

export default rootReducer;