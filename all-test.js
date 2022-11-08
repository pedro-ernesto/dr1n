const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
    params: {term: 'bojack', country: 'br'},
    headers: {
      'X-RapidAPI-Key': '73236fc48fmsh96a967a821524c4p171b69jsnea299da72fca',
      'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
        console.log(JSON.stringify(response.data))
  }).catch(function (error) {
      console.error(error);
  });