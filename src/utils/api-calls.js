import { GetData, PostData, PostFormData } from "./constant"

export const login = async (paylaod) => {
    const res = await PostData('api/staff/login', paylaod);
    if (res?.data?.succeeded) {
        localStorage.setItem("token", res?.data?.data?.token);
        localStorage.setItem("user", JSON.stringify(res?.data?.data?.user));

    }
    return res;
}
export const GetAll = async () => {
    const res = await GetData('api/staff/get-all');
    return res;
}
export const Register = async (paylaod) => {
    const res = await PostFormData('api/staff/register', paylaod);
    if (res?.data?.succeeded) {
        alert('successfully Added!')
    }
    return res;
}