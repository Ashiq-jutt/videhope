import React from "react";
import { Route, Routes } from "react-router-dom";
// import React from "react";
import { useSelector } from "react-redux";
import '../src/services/api/axios-interceptor';
import "./App.css";
import PersistentDrawerLeft from "./components/drawer";
import useToken from "./hooks/use-token";
import AccountReported from "./pages/account-reported";
import Accounting from "./pages/accounting";
import AdminLogin from "./pages/admin-login";
import UserData from "./pages/allUser";
import Chat from "./pages/chat";
import ContentReport from "./pages/content-report";
import CreateNewUser from "./pages/create-new-user";
import CreatePanel from "./pages/create-panel";
import CreatorEarning from "./pages/creator-earning";
import CreatorPanelLogin from "./pages/creator-panel-login";
import CustomerService from "./pages/customer-services";
import CustomerLogin from "./pages/cutomer-ligin";
import Detail from "./pages/detail";
import Earnings from "./pages/earnings";
import EditProfile from "./pages/edit";
import EmployeePortal from "./pages/employe-portal";
import FilterEarning from "./pages/filter-accounting";
import Newest from "./pages/newest";
import NewestDetail from "./pages/newest-detail";
import Subscription from "./pages/subscription";
import UserProfile from "./pages/user-profile";
import WithdrawRwquest from "./pages/withdraw-request";
import ErrorPage from "./pages/ErrorPage";


function App() {
  const { user } = useSelector(s => s);
  const { token, setToken } = useToken(null);

  return (
    <>
      <Routes>
        {!token ? <Route path="/" element={<AdminLogin setToken={setToken} />} />
          : <Route path="/" element={<PersistentDrawerLeft />}>
            <Route path="/" element={<EmployeePortal />} />
            <Route path="dashboard" element={<EmployeePortal />} />
            <Route path="userProfile" element={<UserProfile />} />
            <Route path="creatorPanelLogin" element={<CreatorPanelLogin />} />
            <Route path="employeePortal" element={<EmployeePortal />} />
            <Route path="allUsers" element={<UserData />} />
            <Route path="createNewUser" element={<CreateNewUser />} />
            <Route path="newestDetail" element={<NewestDetail />} />
            <Route path="withdrawRwquest" element={<WithdrawRwquest />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="editProfile" element={<EditProfile />} />
            <Route path="detail" element={<Detail />} />
            <Route path="chat" element={<Chat />} />
            <Route path="filterEarning" element={<FilterEarning />} />
            <Route path="accounting" element={<Accounting />} />
            <Route path="creatorEarning" element={<CreatorEarning />} />
            <Route path="createPanel" element={<CreatePanel />} />
            <Route path="newest" element={<Newest />} />
            <Route path="customerLogin" element={<CustomerLogin />} />
            <Route path="customerService" element={<CustomerService />} />
            <Route path="contentReport" element={<ContentReport />} />
            <Route path="accountReported" element={<AccountReported />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>}
      </Routes>
    </>
  );
}

export default App;