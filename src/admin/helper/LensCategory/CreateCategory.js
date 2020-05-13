const CreateCategory = (name, position) => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiPassword = process.env.REACT_APP_API_PASSOWRD;
  const url = `/category/${apiPassword}/create`;
  const mainUrl = `${apiHost}${url}`;

  const data = {
    name: name,
    position: position,
  };

  const res = fetch(mainUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => data);

  return res;
};

export default CreateCategory;
