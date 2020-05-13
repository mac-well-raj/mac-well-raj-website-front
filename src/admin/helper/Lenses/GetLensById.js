const GetLensById = (lensId) => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const url = `/product/${lensId}/getOneProdById`;
  const mainUrl = `${apiHost}${url}`;
  const data = fetch(mainUrl)
    .then((res) => res.json())
    .then((data) => data);
  return data;
};

export default GetLensById;
