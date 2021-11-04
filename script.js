const url = "https://api.openweathermap.org/data/2.5/";
const key = "66719add029dcfdd72ab968891f7dc4e";

const setQuery = (e) => {
    if(e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`
    fetch(query)
        .then(weather => {
            return weather.json();
        })
        .then(data)
}

const data = (result) => {
    console.log(result)
    let city = document.querySelector(".city");
    city.innerHTML = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.round(result.main.temp)}&#8451;`

    let desc = document.querySelector(".desc");
    desc.innerHTML = `${result.weather[0].description}`;

    let minmax = document.querySelector(".minmax");
    minmax.innerHTML = `${Math.round(result.main.temp_min)}&#8451; / ${Math.round(result.main.temp_max)}&#8451; `
}

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);

