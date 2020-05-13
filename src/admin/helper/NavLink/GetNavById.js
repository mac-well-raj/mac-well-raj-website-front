const getOneNavById = (id) => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiPassword = process.env.REACT_APP_API_PASSOWRD;
  const apiUrl = `/nav/${apiPassword}/getNavById/${id}`;
  const url = `${apiHost}${apiUrl}`;
  const data = fetch(url)
    .then((res) => res.json())
    .then((data) => data);
  return data;
};

export default getOneNavById;
