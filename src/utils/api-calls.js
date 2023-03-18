import {
  GetData,
  GetFormData,
  PostData,
  PostFormData,
  PutData,
} from "./constant";

export const login = async (paylaod) => {
  const res = await PostData("api/staff/login", paylaod);
  if (res?.data?.succeeded) {
    localStorage.setItem("token", res?.data?.data?.token);
    localStorage.setItem("user", JSON.stringify(res?.data?.data?.user));
  }
  return res;
};
export const GetAll = async () => {
  const res = await GetFormData("api/staff/get-all");
  return res;
};
export const Register = async (paylaod) => {
  const res = await PostFormData("api/staff/register", paylaod);
  if (res?.data?.succeeded) {
    console.log("successfully Added!");
  }

  return res;
};
export const UpdateStaff = async (paylaod) => {
  const res = await PutData("api/staff/update-access", paylaod);
  if (res?.data?.succeeded) {
    console.log("successfully Added!");
  }

  return res;
};

export const GetCustomeServices = async () => {
  const res = await GetData("api/admin/get-customer-service-counts");
  return res;
};
export const GetReportedContent = async () => {
  const res = await GetData("api/admin/get-reported-content");
  return res;
};
export const GetReportedUser = async () => {
  const res = await GetData("api/admin/get-reported-users");
  return res;
};
export const GetChatList = async () => {
  const res = await GetData("api/admin/get-chat-list");
  return res;
};
export const GetRequestType = async (type) => {
  const res = await GetData(`api/creator-request-/get-requests/${type}`);
  return res;
};

export const GetRequestsCount = async () => {
  const res = await GetData("api/creator-request/get-requests-count");
  return res;
};
