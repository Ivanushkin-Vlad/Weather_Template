const APIKEY = "8624cdb7a6cad4eb13a5a962a269fc8b";
let btn = document.querySelector(".btn");
let city;



let cities = document.querySelector('.city')
cities.addEventListener('click',(e)=>{
    city = e.target.textContent;
    request(city);
})

btn.addEventListener('click', () => {
    city = document.querySelector('.city-name');
    request(city.value)

})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        city = document.querySelector('.city-name');
        request(city.value)
    }
})

async function request(name) {
    let request = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + name + "&lang=en&appid=" + APIKEY + "&units=metric")
    let res = await request.json();
    name = ""
    createWeather(res);
}

function createWeather(data) {
    console.log(data)
    document.querySelector(".package-name").innerHTML = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp) + '&deg' + 'C';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"
}