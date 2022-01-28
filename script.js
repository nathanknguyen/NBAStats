

fetch("https://api-nba-v1.p.rapidapi.com/standings/%7Bleague%7D/%7Bseasonyear%7D/conference/%7Bconference%7D", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "0e1c9cd8f2mshab1c0691abe46edp132b12jsnc19de9bdda91"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

const request = require('request');

const options = {
  method: 'GET',
  url: 'https://api-nba-v1.p.rapidapi.com/standings/%7Bleague%7D/%7Bseasonyear%7D/conference/%7Bconference%7D',
  headers: {
    'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
    'x-rapidapi-key': '0e1c9cd8f2mshab1c0691abe46edp132b12jsnc19de9bdda91',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});