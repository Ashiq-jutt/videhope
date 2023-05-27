import {
  DeleteData,
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
export const SendMessage = async (paylaod) => {
  const res = await PostFormData("api/message/send", paylaod);
  if (res?.data?.succeeded) {
    console.log("successfully Message Send!");
  }
  return res;
};
export const UpdateWithdrawRequestStatus = async (paylaod) => {
  const res = await PostData("api/withdraw/update-status", paylaod);
  console.log("Response of api is == > ", res);
  return res;
};
export const AddCountryPrice = async (paylaod) => {
  const res = await PostData("api/country-price/add-country-price", paylaod);
  if (res?.data?.succeeded) {
    console.log("successfully Message Send!");
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
export const BlockUser = async (id) => {
  const res = await PutData(`api/user/block-user/${id}`, {});
  if (res?.data?.succeeded) {
    console.log("successfully Added!");
  }

  return res;
};
export const UnBlockUser = async (id) => {
  const res = await PutData(`api/user/unblock-user/${id}`, {});
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
export const GetMessage = async (id) => {
  const res = await GetData(`api/admin/get-messages/${id}`);
  return res;
};
export const GetRequestType = async (type) => {
  const res = await GetData(`api/creator-request/get-requests/${type}`);
  return res;
};

export const getCreatorEarnings = async (id) => {
  const res = await GetData(`api/withdraw/get-earnings/${id}`);
  return res;
};
export const getWithdrawRequests = async () => {
  const res = await GetData(`api/withdraw/get-all`);
  return res;
};
export const GetRequestsCount = async () => {
  const res = await GetData("api/creator-request/get-requests-count");
  return res;
};
export const GetCountries = async () => {
  const res = await GetData("api/country-price/get-countries");
  return res;
};

export const ApproveRequest = async (id) => {
  const res = await PutData(`api/creator-request/approve/${id}`, {});
  if (res?.data?.succeeded) {
    console.log("successfully Update!");
  }
  return res;
};
export const RejectRequest = async (id) => {
  const res = await PutData(`api/creator-request/reject/${id}`, {});
  if (res?.data?.succeeded) {
    console.log("successfully Update!");
  }
  return res;
};
export const DeleteContent = async (id) => {
  const res = await DeleteData(`api/content/delete-content/${id}`);
  if (res?.data?.succeeded) {
    console.log("successfully Delete!");
  }
  return res;
};
