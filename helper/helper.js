export const WriteCookie = (time) => {
  const expires = new Date(Date.now() + 86400 * 1000).toUTCString();
  document.cookie = "half=" + time + ";" + " expires=" + expires + ";path=/;";
};

export const isAuth = () => {
  return document.cookie("half") === null ? true : false;
};
