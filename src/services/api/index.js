import client from "./axios-interceptor";

// import { UTILS } from '../../utils'
export const getData = async url => {
    console.log('url: ', url);
    const response = await client.get(url);
    return response?.data;
};
export const postData = async (url, data) => {
    console.log('url: ', url);
    console.log('data: ', data);
    const response = await client.post(url, data);
    return response?.data;
};
export const deleteData = async (url, payload) => {
    console.log('url: ', url);
    const response = await client.delete(url, { data: payload });
    return response;
};
export const putData = async (url, data) => {
    console.log('url: ', url);
    const response = await client.put(url, data);
    return response;
};
export const postFormData = async (url, data) => {
    console.log('url: ', url);
    // data = UTILS.getFormData(data);
    console.log('data', data);
    const response = await client.post(url, data);
    return response;
};


