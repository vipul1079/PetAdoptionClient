import axiosInstance from "./axiosinstance"

export const createAdoptions  = (payload) => {
    return axiosInstance.post("/adoption/create",payload);
}