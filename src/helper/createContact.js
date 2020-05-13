const CreateContactForm = (newData) => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiPassword = process.env.REACT_APP_API_PASSOWRD;
  const url = `/contact/create`;
  const mainUrl = `${apiHost}${url}`;
  let data = JSON.stringify(newData);
  const res = fetch(mainUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data);
  return res;
};

export default CreateContactForm;
