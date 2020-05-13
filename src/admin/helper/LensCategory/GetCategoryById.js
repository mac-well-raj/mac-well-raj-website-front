const GetCategoryById = (id) => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiPassword = process.env.REACT_APP_API_PASSOWRD;
  const apiUrl = `/category/${apiPassword}/getOneById/${id}`;
  const mainUrl = `${apiHost}${apiUrl}`;

  const data = fetch(mainUrl, {
    method: "GET",
    headers: { 'Content-Type': "application/json" }
  })
    .then((res) => res.json())
    .then((data) => data);

  return data;
};

export default GetCategoryById;
