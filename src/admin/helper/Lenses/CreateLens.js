const CreateLens = (formData) => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiPassword = process.env.REACT_APP_API_PASSOWRD;
  const url = `/product/${apiPassword}/create`;
  const mainUrl = `${apiHost}${url}`;
  const res = fetch(mainUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => data);
  return res;
};

export default CreateLens;
