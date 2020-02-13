const request = require('request');
const breed = "siberian";
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(URL, (error, request, body) => {
  if (error) throw error;
  if (body.length === 2) {
    console.error('Breed Not Found');
    return;
  }
  console.log(JSON.parse(body)[0].description);
});