import axios from 'axios'
import { BACKEND_URI } from '../utils/constants'

const axiosInstance= axios.create(
    {
        baseURL:BACKEND_URI
    }
);


export const createContactUsService  = (payload) => {
    return axiosInstance.post("/contactUs/create",payload);
}