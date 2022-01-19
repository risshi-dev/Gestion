export const WriteCookie = (time) => {
  console.log(time);
  const expires = new Date(Date.now() + 86400 * 1000).toUTCString();
  console.log(expires);
  document.cookie = "name=" + time + ";" + " expires=" + expires + ";path=/;";
};
