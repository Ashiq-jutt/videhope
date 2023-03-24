import axios from "axios";

const BASE_URL = "https://videhope.azurewebsites.net/";
export const IMAGE_BASE_URL = "https://videhope.azurewebsites.net/UploadedFiles/";
const options = {
    headers: {
        "Authorization": "bearer " + localStorage.getItem("@token"),
        "Content-Type": "Application/json",
    },
};
const formDataOptions = {
    // const token = localStorage.getItem('@token');
    headers: {
        "Authorization": "bearer " + localStorage.getItem("@token"),
        "Content-Type": "multipart/form-data",
    },
};
export const GetData = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
export const GetFormData = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, formDataOptions);
    return data;
};
export const PostData = async (url, payload) => {
    const { data } = await axios.post(`${BASE_URL}/${url}`, payload, options);
    return data;
};
export const PostFormData = async (url, payload) => {
    const { data } = await axios.post(`${BASE_URL}/${url}`, payload, formDataOptions);
    return data;
};
export const PutData = async (url, payload) => {
    const { data } = await axios.put(`${BASE_URL}/${url}`, payload, options);
    return data;
};
export const PutFormData = async (url, payload) => {
    const { data } = await axios.put(`${BASE_URL}/${url}`, payload, formDataOptions);
    return data;
};
export const DeleteData = async (url) => {
    const { data } = await axios.delete(`${BASE_URL}/${url}`, options);
    return data;
};
