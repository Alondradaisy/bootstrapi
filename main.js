const dogButtonImg = document.getElementById('dog-button-img');


const dogButton = document.getElementById('dog');
dogButton.addEventListener('click', function() {
    const dogApi = 'https://dog.ceo/api/breeds/image/random';
    
    fetch(dogApi)
        .then((function (rawResponse) {
        // console.log('response success!')
        // console.log('RAW RESPONSE', rawResponse);
        return rawResponse.json();
    }))
        .then((function (json) {
        dogButtonImg.src = json.message
        console.log(json);
    })
    )})
    
    
    
    /// Divider /////////
    
    const weatherButton = document.getElementById('weather');
    weatherButton.addEventListener('click', function() {
    const cityInfo = document.getElementById('city-info').value;
    const weatherApi = `https://goweather.herokuapp.com/weather/${cityInfo}`; //this holds the URL for weather api
    
    const temperature = document.getElementById('temperature'); 
    
    const wind = document.getElementById('wind');

    const description = document.getElementById('description');

    fetch(weatherApi)
        .then((function (rawResponse) {
            return rawResponse.json();
        }))
        .then((function (json) {
            //cityInfo = json
            temperature.innerHTML = `Current temperature: ${json.temperature}`
            wind.innerHTML = `${json.wind}`
            description.innerHTML = `${json.description}`
        }))
    })