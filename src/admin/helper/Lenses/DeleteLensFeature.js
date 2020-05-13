function deleteLensFeature(lensId, featureId) {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiPass = process.env.REACT_APP_API_PASSOWRD;
  const apiUrl = `/product/${apiPass}/deleteFeature/${lensId}/${featureId}`;
  const mainUrl = `${apiHost}${apiUrl}`;
  const res = fetch(mainUrl, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => data);
  return res;
}

export default deleteLensFeature;
