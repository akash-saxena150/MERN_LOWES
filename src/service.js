import Styles from "./config/styles.json";
import FormData from "./config/formData.json";
import MsgConfig from "./config/msgConfig.json";
import DummyData from "./config/dummyData.json";
const colors = { ...Styles.colors };
const formData = { ...FormData };
const msgConfig = { ...MsgConfig };
const getInitials = str => {
  return str.substring(0, 1);
};
const login = data => {
  for (let key in DummyData.users) {
    if (DummyData.users[key]["email"] === data.username)
      if (DummyData.users[key]["password"] === data.password)
        return {
          msg: "login successful",
          winId: DummyData.users[key]["winId"],
          isAdmin: DummyData.users[key]["isAdmin"]
        };
  }
  return { error: "Invalid User" };
};
const getUserDetails = wid => {
  let role_id = DummyData.users[wid].role_id;
  return { ...DummyData.users[wid], role: DummyData.roles[role_id].name };
};
const getUsers = () => {
  return DummyData.users;
};
const fetchOptions = key => {
  return DummyData[key];
};
const set = (key, val) => {
  val = JSON.stringify(val);
  localStorage.setItem(key, val);
};
const get = key => {
  return localStorage.getItem(key);
};
export {
  colors,
  formData,
  msgConfig,
  login,
  getUserDetails,
  getUsers,
  getInitials,
  fetchOptions,
  set,
  get
};
