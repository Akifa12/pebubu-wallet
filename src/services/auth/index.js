
import { axiosJSONPublic } from "../axiosJSONPublic"
import { BACKEND_URL } from "../config"
import { API_ERROR_EMAIL_ALREADY_EXISTS } from "../constants";

export const signup = async ( email, password="" ) => {
    try{
        console.log(`signup() api function is called. ${BACKEND_URL}`);

    const response =  await axiosJSONPublic.post(`${BACKEND_URL}/api/auth/signup`, {
        email, password
    })

    console.log("signup() api response: ", response);

    return true;
}catch(err) {
    console.error("signup() API error: ", err?.response?.data?.message);   
    if(err?.response?.data?.message?.toString()?.includes("duplicate key") === true)
    {
        console.error("The email is already registered!");  
        return API_ERROR_EMAIL_ALREADY_EXISTS;
    } 
    return false;
}
}

export const verifyEmail = async (token) => {
    try{
    await axiosJSONPublic.get(`${BACKEND_URL}/api/auth/verify-email`, {
        token
    })

}catch(err){
    console.error(err);
    return null;
}
}

export const login = async (email, password) => {
    await axiosJSONPublic.post(`${BACKEND_URL}/api/auth/login`, {
        email, password
    })
}

export const resetPassword = async (email) => {
    await axiosJSONPublic.post(`${BACKEND_URL}/api/auth/reset-password`, {
        email
    })
}

export const updatePassword = async (token, newPassword) => {
    await axiosJSONPublic.post(`${BACKEND_URL}/api/auth/update-password`, {
        token, newPassword
    })
}
