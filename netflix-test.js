const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
    params: {limit: '3000', country_list: '29', type: 'movie'},
    headers: {
      'X-RapidAPI-Key': '73236fc48fmsh96a967a821524c4p171b69jsnea299da72fca',
      'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
    }
  };

async function Hello() {
    const response = await axios.request(options);
    response.data.results.forEach(element => {
        if (element.top250 !== 0){
            
            console.log(element)
            
        }
    });
    
}

Hello()


// const options = {
//   method: 'GET',
//   url: 'https://unogs-unogs-v1.p.rapidapi.com/static/countries',
//   headers: {
//     'X-RapidAPI-Key': '73236fc48fmsh96a967a821524c4p171b69jsnea299da72fca',
//     'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

/*
    {
      id: 29,
      country: 'Brazil ',
      countrycode: 'BR',
      expiring: 58,
      nl7: 71,
      tvids: 5750,
      tmovs: 3778,
      tseries: 1972
    },
*/