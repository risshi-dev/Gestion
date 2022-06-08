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

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export const close_to_deadline = (a, b) => {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};
