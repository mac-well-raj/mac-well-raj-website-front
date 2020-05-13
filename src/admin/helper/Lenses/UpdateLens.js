const UpdateLens = (lensId, formData) => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiPassword = process.env.REACT_APP_API_PASSOWRD;
  const url = `/product/${apiPassword}/update/${lensId}`;
  const mainUrl = `${apiHost}${url}`;
  const res = fetch(mainUrl, {
    method: "PUT",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => data);
  return res;
};

export default UpdateLens;
