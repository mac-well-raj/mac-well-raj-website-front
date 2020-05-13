const signout = () => {
  localStorage.clear();
  window.location.reload(false);
};

export default signout;
