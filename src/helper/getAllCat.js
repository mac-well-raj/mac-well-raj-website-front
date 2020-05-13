const getAllCategories = () => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const url = `/category/getAll`;
  const mainUrl = `${apiHost}${url}`;
  const data = fetch(mainUrl)
    .then((res) => res.json())
    .then((data) => data);
  return data;
};

export default getAllCategories;
