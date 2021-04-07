const dogButton = document.getElementById('dog');
dogButton.addEventListener('click', dogButton);

const dogApi = 'https://dog.ceo/dog-api/'; //this holds URL for dog api
dogApi.addEventListener('click', dogApi);
    fetch(dogApi)
        .then((data) => data.json())
        .then(('https://dog.ceo/api/breeds/image/random') => {

        })
        .catch((error() => console.log(error));


    //console.log('Dogs ran!')


const weatherButton = document.getElementById('weather');
weatherButton.addEventListener('click', weatherButton);

const weather = document.getElementById('weather');
weather.addEventListener('click', weather);

const cityInfo = document.getElementById('city-info').value;
cityInfo.addEventListener('click', cityInput);

const weatherApi = 'https://goweather.herokuapp.com/weather/{city}'; //this holds the URL for weather api
weatherApi.addEventListener('click', weatherApi);
        fetch(weatherApi)
            .then((data) => data.json())
            .then(())

const temperature = document.getElementById('temperature');
temperature.addEventListener('click', temperature);

const wind = document.getElementById('click', wind);
wind.addEventListener('click', wind);

const description = document.getElementById('click', description);


    //console.log('Weather ran!')