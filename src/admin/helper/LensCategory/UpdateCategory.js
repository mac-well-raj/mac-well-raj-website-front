const UpdateCategory = (id, newName, newPosition) => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiPassword = process.env.REACT_APP_API_PASSOWRD;
  const apiUrl = `/category/${apiPassword}/update/${id}`;
  const mainUrl = `${apiHost}${apiUrl}`;

  const nowName = {
    name: newName,
    position: newPosition,
  };

  const res = fetch(mainUrl, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nowName),
  })
    .then((res) => res.json())
    .then((result) => result);

  return res;
};

export default UpdateCategory;
