function createLensFeature(lensId, newFeature) {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiPass = process.env.REACT_APP_API_PASSOWRD;
  const apiUrl = `/product/${apiPass}/addFeature/${lensId}`;
  const mainUrl = `${apiHost}${apiUrl}`;
  const data = {
    name: newFeature,
  };
  const res = fetch(mainUrl, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
  return res;
}

export default createLensFeature;
