const createNavLink = (title, position, link) => {
  const data = {
    position: position,
    name: title,
    url: link,
  };

  const url = `${process.env.REACT_APP_API_HOST}/nav/${process.env.REACT_APP_API_PASSOWRD}/addNav`;
  const res = fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });

    return res
};

export default createNavLink;
