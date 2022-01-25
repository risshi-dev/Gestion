export const WriteCookie = () => {
  const expires = new Date(Date.now() + 86400 * 1000).toUTCString();
  document.cookie = "LoggedIn=true" + ";" + " expires=" + expires + ";path=/;";
};

export const deleteCookie = () => {
  const expires = new Date(Date.now() - 86400 * 1000).toUTCString();
  document.cookie = "LoggedIn=true" + ";" + " expires=" + expires + ";path=/;";
};

export const clearStorage = () => {
  window.localStorage.clear();
};

export const isAuth = () => {
  return document.cookie && document.cookie.indexOf("LoggedIn") != -1
    ? true
    : false;
};

export const checkExtraSpaces = (text) => {
  return /^\s+$/.test(text);
};
