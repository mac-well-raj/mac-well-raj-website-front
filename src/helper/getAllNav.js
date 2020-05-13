const getAllNavItems = () => {
  const url = `${process.env.REACT_APP_API_HOST}/nav/getAllNav`;
  const navData = fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return navData;
};

export default getAllNavItems;
