const updateNav = (id, changedObj) => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiPassword = process.env.REACT_APP_API_PASSOWRD;
  const apiUrl = `/nav/${apiPassword}/${id}/update`;
  const mainUrl = `${apiHost}${apiUrl}`;
  const res = fetch(mainUrl, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(changedObj),
  })
    .then((res) => res.json())
    .then((result) => result);
  return res;
};

export default updateNav;
