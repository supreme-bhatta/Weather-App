async function Discreption(){
    let location = document.getElementById("inp").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cc544e397d13c51e9028b6df9a0b453b&units=metric`;
    let response = await fetch(url);
    let weather = await response.json();
    document.querySelector("#info").innerHTML = `<h1><b class = "ct">${weather.name}<h1>
    <h4 class = "temp">${weather.main.temp}°C</b></h4> 
    <p> Feels Like : ${weather.main.feels_like}°C</p>
    <p class = "hum"> Humidity : ${weather.main.humidity}%</p>
    <p class = "cloud"> ${weather.weather[0].main}</p>
    <p class = "emj">${emoji(weather.weather[0].id)}</p>
    <p> Wind : ${weather.wind.speed}m/s</p>`;;
    document.getElementById("inp").value = "";
    
}
function emoji(id){
    if(id > 200 && id < 500) return "⛈️";
    if(id <= 600) return "🌧️";
    if(id <= 620) return "🌨️";
    if(id <= 775) return "💨";
    if(id == 800) return "☀️";
    if(id <= 804) return "🌥️";   
}