const visitDataPromise = () => {
  const url = `${process.env.REACT_APP_API_HOST}/stats/getVisit`;
  const dataPromise = fetch(url)
    .then((res) => res.json())
    .then((data) => data);
  return dataPromise;
};

export default visitDataPromise;
