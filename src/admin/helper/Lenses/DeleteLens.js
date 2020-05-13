const DeleteLens = (lensId) => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiPassword = process.env.REACT_APP_API_PASSOWRD;
  const url = `/product/${apiPassword}/delete/${lensId}`;
  const mainUrl = `${apiHost}${url}`;
  const res = fetch(mainUrl, { method: "DELETE" })
    .then((res) => res.json())
    .then((data) => data);
  return res;
};

export default DeleteLens;
