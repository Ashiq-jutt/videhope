
import { getData, postData, postFormData, putData } from '.';
import { setUserInfo } from '../../store/reducers/user-reducer';
import { URLS } from './api-urls';
//
export const onSignup = async (values) => {
  try {
    const res = await postFormData(URLS.staff.signup, values);
    console.log('res of onSignupPress=>', res);
    return res;
  } catch (error) {
    console.log('error in onSignupPress', error);
  }
};
export const onLogin = (values, setLoading = (bool) => { }, setToken) => {
  return async (dispatch, getState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.staff.login, values);
      console.log('res of onLogin=>', res);
      setToken(res?.data?.token);
      dispatch(setUserInfo(res?.data?.user));

    } catch (error) {
      console.log('error in login', error);
    } finally {
      setLoading(false);
    }
  };
};

export const updateStaff = async (values) => {
  try {
    const res = await putData(URLS.staff.update_access, values);
    console.log('res of updateStaff=>', res);
    return res;
  } catch (error) {
    console.log('error in updateStaff', error);
  }
};
export const getAllStaff = async (values) => {
  try {
    const res = await getData(URLS.staff.get_all, values);
    console.log('res of getAllStaff=>', res);
    return res;
  } catch (error) {
    console.log('error in login', error);
  }
};

export const onLogoutPress = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setUserInfo(null));
    } catch (error) {
      console.log('error in onDeleteTask', error);
    }
  };
};
