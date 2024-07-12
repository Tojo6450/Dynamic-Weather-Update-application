const apikey="383ec34601a5e2754b72f35436d117ef";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=";

const searchBtn=document.querySelector(".search button");
const searchBox=document.querySelector(".search input");
const weatherIcon=document.querySelector(".weather-icon");

async function findweather(city){
    const response=await fetch(apiUrl+`${city}`+`&appid=383ec34601a5e2754b72f35436d117ef`);
    let data=await response.json();
    console.log(data); 

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp-273.15)+"°C"
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=Math.floor(data.wind.speed*3.6)+"km/h";
    
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
     else if(data.weather[0].main=="Haze"){
        weatherIcon.src="images/drizzle.png";
    }
   else  if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
   else if(data.weather[0].main=="Thunderstorm"){
        weatherIcon.src="https://th.bing.com/th?id=OIP.vY8c5qe_kF3my11O1x6b5wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2";
    }
   else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }
}

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    findweather(searchBox.value); 
})


//   window.addEventListener("load", (evt) => {
// evt.preventDefault();
//     findweather();

//   });
  