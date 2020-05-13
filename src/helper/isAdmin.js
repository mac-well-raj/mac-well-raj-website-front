let isAdmin = false;
if (
  localStorage.getItem("adminPassword") === process.env.REACT_APP_ADMIN_PASSWORD
) {
  isAdmin = true;
}

module.exports = isAdmin