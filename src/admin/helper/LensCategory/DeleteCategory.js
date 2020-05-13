const DeleteCategory = (catId) => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiPassword = process.env.REACT_APP_API_PASSOWRD;
  const url = `/category/${apiPassword}/delete/${catId}`;
  const mainUrl = `${apiHost}${url}`;
  const res = fetch(mainUrl, { method: "DELETE" })
    .then((res) => res.json())
    .then((data) => data);
  return res;
};

export default DeleteCategory