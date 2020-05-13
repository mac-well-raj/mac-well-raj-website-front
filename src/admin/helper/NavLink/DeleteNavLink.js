const deleteNav = (navId) => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiPassword = process.env.REACT_APP_API_PASSOWRD;
  const url = `${apiHost}/nav/${apiPassword}/${navId}/delete`;
  const res = fetch(url, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => data);
  return res
};

export default deleteNav