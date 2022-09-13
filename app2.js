const Container = document.querySelector(".container")
const Weather = document.querySelector(".ob_havo")
const H2 = document.querySelector("h2")
// const h2 = document.querySelector("h2")

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '678771b991msh558c435beaeaa49p1bd4a9jsnc2cdc8f7893d',
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
};

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=tashkent&format=json&u=f', options)
    .then(response => response.json())
    .then(response => createCard(response))
    .catch(err => console.error(err));

function createCard(weather) {
    console.log(weather.current_observation);
    let current = weather.current_observation;
    let humidity = current.atmosphere.humidity;
    let condition = current.condition.text;
    let temperature = current.condition.temperature;
    console.log(humidity, condition, temperature);

    H2.innerHTML = Math.floor((temperature - 32) * 5 / 9)
}


// fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=namangon&format=json&u=f', options)
//     .then(response => response.json())
//     .then(response => CreateCard(response))
//     .catch(err => console.error(err));

// function CreateCard(weather) {
//     console.log(weather.current_observation);
//     let current = weather.current_observation;
//     let humidity = current.atmosphere.humidity;
//     let condition = current.condition.text;
//     let temperature = current.condition.temperature;
//     console.log(humidity, condition, temperature);

//     h2.innerHTML = Math.floor((temperature - 32) * 5 / 9)
// }