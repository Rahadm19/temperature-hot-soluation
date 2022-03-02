const API_KEY =`1ffa71a4cf6a2c0f23da86e983a6cf15`;
const searchTemparature = () =>{
    const search = document.getElementById('search-Input');
    const searchText = search.value;
    search.value ="";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data))
}
const cityNameInnerText = (id, text)=>{
    document.getElementById(id).innerText = text;
}

const displayTemparature = tem =>{
    cityNameInnerText('city-name', tem.name);
    cityNameInnerText ('temparature',tem.main.temp)
    cityNameInnerText ('condition', tem.weather[0].main);
    // set weather icon 
    const url =`http://openweathermap.org/img/wn/${tem.weather[0].icon}@2x.png`;
    const img = document.getElementById('icon');
    img.setAttribute('src', url);
    console.log(tem);
}