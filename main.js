// const dogButtonImg = document.getElementById('dog-button-img');


// const dogButton = document.getElementById('dog');
// dogButton.addEventListener('click', function() {
//     const dogApi = 'https://dog.ceo/api/breeds/image/random';
    
//     fetch(dogApi)
//         .then((function (rawResponse) {
//          console.log('response success!')
//          console.log('RAW RESPONSE', rawResponse);
//         return rawResponse.json();
//     }))
//         .then((function (json) {
//         dogButtonImg.src = json.message
//         console.log(json);
//     })
//     )})
    
//     const weatherButton = document.getElementById('weather');
//     weatherButton.addEventListener('click', function() {
//     const cityInfo = document.getElementById('city-info').value;
//     const weatherApi = `https://goweather.herokuapp.com/weather/${cityInfo}`; //this holds the URL for weather api
    
//     const temperature = document.getElementById('temperature'); 
    
//     const wind = document.getElementById('wind');

//     const description = document.getElementById('description');

//     fetch(weatherApi)
//         .then((function (rawResponse) {
//             return rawResponse.json();
//         }))
//         .then((function (json) {
//             //cityInfo = json
//             temperature.innerHTML = `Current temperature: ${json.temperature}`
//             wind.innerHTML = `${json.wind}`
//             description.innerHTML = `${json.description}`
//         }))
//     })

    // music

    
    const searchMusic = document.getElementById('search-music');
    searchMusic.addEventListener('click', function() {

    const artistSearch = document.getElementById('artist');
    const title = document.getElementById('title');    
    const userInput = document.getElementById('#browse-music').value;
    const musicApi = `https://api.lyrics.ovh/v1/${userInput}`
        console.log('button clicked');
    fetch(musicApi)
        .then((function (rawResponse) {
            console.log(rawResponse);
            return rawResponse.json();
        }))
        .then((function (json) {
            artistSearch.innerHTML = `The artist is: ${json.artist}`
            title.innerHTML = `The title is: ${json.title}`
            console.log(json);
        }))
    })

