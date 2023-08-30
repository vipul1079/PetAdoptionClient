import axios from 'axios'
import { BACKEND_URI } from '../utils/constants'

const axiosInstance= axios.create(
    {
        baseURL:BACKEND_URI
    }
);


export const createConfirmations  = (payload) => {
    return axiosInstance.post("/confirmation/create",payload);
}
