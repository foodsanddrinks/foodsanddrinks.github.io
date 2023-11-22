export function get() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cef7c4a335mshae1bf7a43a791bbp156f2fjsn70a10c6147f0",
      "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
    },
  };

  let search = document.getElementById("search")?.value;

  return fetch(
    "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=soy%20bean%2C%20peanut%2C%20sesame%20seed%2C%20lentil%2C%20chick%20pea%2C%20%20bean%2C%20%2C%20egg%2C%20Milk%2C%20sugar%2C%20" +
      search,
    options
  )
    .then(handleError)
    .then((result) => result.json())
    .then((json) => json);
}

function handleError(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
}
