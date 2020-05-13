async function incVisit() {
  const url = `${process.env.REACT_APP_API_HOST}/stats/addOneVisit`;
  const updation = await fetch(url, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => data);
  return updation;
}

export default incVisit;
