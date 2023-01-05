const token = `3001eea91d1e4d7e30947e2f5c99de55`
const searchClick = ()=>{
    const value = document.getElementById("inputText").value;

    const link = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${token}`;
    fetch(link)
    .then(res=>res.json())
    .then(data => displayDetails(data))
}

const displayDetails = (data)=>{
    document.getElementById('cityName').innerText = data.name;
    const celsius = data.main.temp - 273.15;
    document.getElementById('cityTemp').innerText = celsius.toFixed(2);
    document.getElementById('condition').innerText = data.weather[0].main
    
    const iconId = data.weather[0].icon
    const icon = `https://openweathermap.org/img/wn/${iconId}@2x.png`
    const img = document.getElementById('weatherIcon').src = icon
}