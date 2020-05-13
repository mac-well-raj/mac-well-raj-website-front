const creaetLensPowerRange = (prodId, newPR) => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiPass = process.env.REACT_APP_API_PASSOWRD;
  const apiUrl = `/product/${apiPass}/addPower/${prodId}`;
  const mainUrl = `${apiHost}${apiUrl}`;
  const data = JSON.stringify(newPR);
  const res = fetch(mainUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data)
  return res;
};

export default creaetLensPowerRange;
