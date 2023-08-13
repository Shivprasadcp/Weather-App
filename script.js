async function getWeather(city) {
    cityName.innerHTML =city
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ba6bf2cd6mshac672a293c417b1p12986fjsn4730f489a732',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    
	console.log(result);

    const weatherData = JSON.parse(result); // Parse the response text as JSON

    // Access and populate data
    cloud_pct.innerHTML = weatherData.cloud_pct;
    temp.innerHTML = weatherData.temp;
    temp2.innerHTML = weatherData.temp;
    feels_like.innerHTML = weatherData.feels_like;
    humidity.innerHTML = weatherData.humidity;    
    humidity2.innerHTML = weatherData.humidity;    
    min_temp.innerHTML = weatherData.min_temp;
    max_temp.innerHTML = weatherData.max_temp;
    wind_speed.innerHTML = weatherData.wind_speed;
    wind_speed2.innerHTML = weatherData.wind_speed;
    wind_degrees.innerHTML = weatherData.wind_degrees;
    sunrise.innerHTML = weatherData.sunrise;
    sunset.innerHTML = weatherData.sunset;

//     cloud_pct.innerHTML = response.cloud_pct
//  temp.innerHTML = response.temp   
// feels_like.innerHTML = response.feels_like  
// humidity.innerHTML = response.humidity  
// min_temp.innerHTML = response.min_temp  
// max_temp.innerHTML = response.max_temp  
// wind_speed.innerHTML = response.wind_speed  
// wind_degrees.innerHTML = response.wind_degrees  
// sunrise.innerHTML = response.sunrise  
// sunset.innerHTML = response.sunset  

} catch (error) {
	console.error(error);
}


}

submit.addEventListener("click" , (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
 getWeather("Delhi");



 