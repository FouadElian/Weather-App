const weather = document.querySelector(".weatherForm");
const cityinpt = document.querySelector(".city_search");
const display_today_info = document.querySelector(".other");
const country1 = document.querySelector(".country");
const timezone2 = document.querySelector(".timezone");
const date_current = document.querySelector(".date");
const time = document.getElementById("time_main");   
const day1 = document.querySelector(".temp-day");
const day_night = document.querySelector(".temp-night");
const day2_morning = document.querySelector(".temp-day2");
const day2_night = document.querySelector(".temp-night2");
const day3_morning = document.querySelector(".temp-day3");
const day3_night = document.querySelector(".temp-night3");
const day4_morning = document.querySelector(".temp-day4");
const day4_night = document.querySelector(".temp-night4");
const day6_morning = document.querySelector(".temp-day6");
const day6_night = document.querySelector(".temp-night6");
const last_day= document.querySelector(".weather-forecast-items4");
const first_day= document.querySelector(".today");
const second_day= document.querySelector(".weather-forecast-items");
const third_day= document.querySelector(".weather-forecast-items2");
const fourth_day= document.querySelector(".weather-forecast-items3");
const detail = document.getElementById("detail_container");
const time32 = document.getElementById("time");
const apiKey = "140afe535a8d7448937ab90810db79bb";
const humidty1 = document.querySelector(".humidity");
const speed1 = document.querySelector(".speed");
const pressure1 = document.querySelector(".pressure");
const change = document.querySelector(".display");
const day1_0=document.querySelector(".day1");
const day1_1=document.querySelector(".day2");
const day1_2=document.querySelector(".day3");
const day1_3=document.querySelector(".day4");
const day1_4=document.querySelector(".day5");
const day1_5=document.querySelector(".day6");
const time1 = document.getElementById("time");
const time2 = document.getElementById("time2");
const time3 = document.getElementById("time3");
const time4 = document.getElementById("time4");
const time5 = document.getElementById("time5");
const time6 = document.getElementById("time6");
const time7 = document.getElementById("time7");
const time8 = document.getElementById("time8");
const degree1 = document.getElementById("degree");
const degree2 = document.getElementById("degree2");
const degree3 = document.getElementById("degree3");
const degree4 = document.getElementById("degree4");
const degree5 = document.getElementById("degree5");
const degree6 = document.getElementById("degree6");
const degree7 = document.getElementById("degree7");
const degree8 = document.getElementById("degree8");
const wind = document.getElementById("wind_speed");
const feels_like = document.getElementById("feels_like");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidty");


let positioner =0;
let forecastData;
let checker = false;


first_day.addEventListener("click", function(event){
    event.stopPropagation(); // Prevent the click event from propagating further
    console.log("clicked");
    displayDay1(forecastData);
    checker = true;
});

second_day.addEventListener("click", function(event){
    event.stopPropagation(); // Prevent the click event from propagating further
    console.log("clicked");
    displayDay2(forecastData);
    checker = true;
});

third_day.addEventListener("click", function(event){
    event.stopPropagation(); // Prevent the click event from propagating further
    console.log("clicked");
    displayDay3(forecastData);
    checker = true;
});

fourth_day.addEventListener("click", function(event){
    event.stopPropagation(); // Prevent the click event from propagating further
    console.log("clicked");
    DisplayDay4(forecastData);
    checker = true;
});

last_day.addEventListener("click", function(event){
    event.stopPropagation(); // Prevent the click event from propagating further
    console.log("clicked");
    DisplayDay5(forecastData);
    checker = true;
});

// Attach the click event listener to document.body dynamically
document.body.addEventListener('click', function(event) {
    if (checker) {
        console.log("clicked3");
        detail.style.display = "none";
        checker = false;
    }
});



weather.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityinpt.value;
    if (city) {
       try{
       forecastData = await getWeatherForecast(city);
        const WeatherData = await getWeather(city);
        displayWeather2(forecastData);
      
        displayWeather(WeatherData);

       }

         catch(error){
              console.error(error);
              displayError(error);
         }
}
    else{   
        displayError("Please enter a city")
    }
});


async function getWeatherForecast(city) {
    const APIurl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    const response = await fetch(APIurl);
    if (!response.ok) {
        throw new Error("City not found");
    }
    else{
        return await response.json() //+ await response2.json(); this I will add it to another function called getWeather and this one here will be get weather forecast.




    }
}


async function getWeather(city) {
     const APIurl2 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response2 = await fetch(APIurl2);
    if(!response2.ok){
        throw new Error("City not found");
    } 
    else{
        return await response2.json();
    }

}
function displayDay1(forecastData){
    detail.style.display="flex";
    const {list} = forecastData;
    time1.textContent = `${list[0].dt_txt.substring(11,16)}`;
    time2.textContent = `${list[1].dt_txt.substring(11,16)}`;
    time3.textContent = `${list[2].dt_txt.substring(11,16)}`;
    time4.textContent = `${list[3].dt_txt.substring(11,16)}`;
    time5.textContent = `${list[4].dt_txt.substring(11,16)}`;
    time6.textContent = `${list[5].dt_txt.substring(11,16)}`;
    time7.textContent = `${list[6].dt_txt.substring(11,16)}`;
    time8.textContent = `${list[7].dt_txt.substring(11,16)}`;
    degree1.textContent = `${Math.round(list[0].main.temp-273.15).toFixed(1)}°C`;
    degree2.textContent = `${Math.round(list[1].main.temp-273.15).toFixed(1)}°C`;
    degree3.textContent = `${Math.round(list[2].main.temp-273.15).toFixed(1)}°C`;
    degree4.textContent = `${Math.round(list[3].main.temp-273.15).toFixed(1)}°C`;
    degree5.textContent = `${Math.round(list[4].main.temp-273.15).toFixed(1)}°C`;
    degree6.textContent = `${Math.round(list[5].main.temp-273.15).toFixed(1)}°C`;
    degree7.textContent = `${Math.round(list[6].main.temp-273.15).toFixed(1)}°C`;
    degree8.textContent = `${Math.round(list[7].main.temp-273.15).toFixed(1)}°C`;
    wind.textContent = `${((list[0].wind.speed+list[1].wind.speed+list[2].wind.speed+list[3].wind.speed+list[4].wind.speed+list[5].wind.speed+list[6].wind.speed+list[7].wind.speed)/8).toFixed(2)}m/s`;
    feels_like.textContent = `${((list[0].main.feels_like+list[1].main.feels_like+list[2].main.feels_like+list[3].main.feels_like+list[4].main.feels_like+list[5].main.feels_like+list[6].main.feels_like+list[7].main.feels_like)/8-273.15).toFixed(2)}°C`;
    pressure.textContent = `${((list[0].main.pressure+list[1].main.pressure+list[2].main.pressure+list[3].main.pressure+list[4].main.pressure+list[5].main.pressure+list[6].main.pressure+list[7].main.pressure)/8).toFixed(2)}hPa`;
    humidity.textContent = `${((list[0].main.humidity+list[1].main.humidity+list[2].main.humidity+list[3].main.humidity+list[4].main.humidity+list[5].main.humidity+list[6].main.humidity+list[7].main.humidity)/8).toFixed(2)}%`;
    
}

function displayDay2(forecastData){
    detail.style.display="flex";
    const {list} = forecastData;
    time1.textContent = `${list[8].dt_txt.substring(11,16)}`;
    time2.textContent = `${list[9].dt_txt.substring(11,16)}`;
    time3.textContent = `${list[10].dt_txt.substring(11,16)}`;
    time4.textContent = `${list[11].dt_txt.substring(11,16)}`;
    time5.textContent = `${list[12].dt_txt.substring(11,16)}`;
    time6.textContent = `${list[13].dt_txt.substring(11,16)}`;
    time7.textContent = `${list[14].dt_txt.substring(11,16)}`;
    time8.textContent = `${list[15].dt_txt.substring(11,16)}`;
    degree1.textContent = `${Math.round(list[8].main.temp-273.15).toFixed(1)}°C`;
    degree2.textContent = `${Math.round(list[9].main.temp-273.15).toFixed(1)}°C`;
    degree3.textContent = `${Math.round(list[10].main.temp-273.15).toFixed(1)}°C`;
    degree4.textContent = `${Math.round(list[11].main.temp-273.15).toFixed(1)}°C`;
    degree5.textContent = `${Math.round(list[12].main.temp-273.15).toFixed(1)}°C`;
    degree6.textContent = `${Math.round(list[13].main.temp-273.15).toFixed(1)}°C`;
    degree7.textContent = `${Math.round(list[14].main.temp-273.15).toFixed(1)}°C`;
    degree8.textContent = `${Math.round(list[15].main.temp-273.15).toFixed(1)}°C`;
    wind.textContent = `${((list[8].wind.speed+list[9].wind.speed+list[10].wind.speed+list[11].wind.speed+list[12].wind.speed+list[13].wind.speed+list[14].wind.speed+list[15].wind.speed)/8).toFixed(2)}m/s`;
    feels_like.textContent = `${((list[8].main.feels_like+list[9].main.feels_like+list[10].main.feels_like+list[11].main.feels_like+list[12].main.feels_like+list[13].main.feels_like+list[14].main.feels_like+list[15].main.feels_like)/8-273.15).toFixed(2)}°C`;
    pressure.textContent = `${((list[8].main.pressure+list[9].main.pressure+list[10].main.pressure+list[11].main.pressure+list[12].main.pressure+list[13].main.pressure+list[14].main.pressure+list[15].main.pressure)/8).toFixed(2)}hPa`;
    humidity.textContent = `${((list[8].main.humidity+list[9].main.humidity+list[10].main.humidity+list[11].main.humidity+list[12].main.humidity+list[13].main.humidity+list[14].main.humidity+list[15].main.humidity)/8).toFixed(2)}%`;
 
}
function displayDay3(forecastData){
    detail.style.display="flex";
    const {list} = forecastData;
    time1.textContent = `${list[16].dt_txt.substring(11,16)}`;
    time2.textContent = `${list[17].dt_txt.substring(11,16)}`;
    time3.textContent = `${list[18].dt_txt.substring(11,16)}`;
    time4.textContent = `${list[19].dt_txt.substring(11,16)}`;
    time5.textContent = `${list[20].dt_txt.substring(11,16)}`;
    time6.textContent = `${list[21].dt_txt.substring(11,16)}`;
    time7.textContent = `${list[22].dt_txt.substring(11,16)}`;
    time8.textContent = `${list[23].dt_txt.substring(11,16)}`;
    degree1.textContent = `${Math.round(list[16].main.temp-273.15).toFixed(1)}°C`;
    degree2.textContent = `${Math.round(list[17].main.temp-273.15).toFixed(1)}°C`;
    degree3.textContent = `${Math.round(list[18].main.temp-273.15).toFixed(1)}°C`;
    degree4.textContent = `${Math.round(list[19].main.temp-273.15).toFixed(1)}°C`;
    degree5.textContent = `${Math.round(list[20].main.temp-273.15).toFixed(1)}°C`;
    degree6.textContent = `${Math.round(list[21].main.temp-273.15).toFixed(1)}°C`;
    degree7.textContent = `${Math.round(list[22].main.temp-273.15).toFixed(1)}°C`;
    degree8.textContent = `${Math.round(list[23].main.temp-273.15).toFixed(1)}°C`;
    wind.textContent = `${((list[16].wind.speed+list[17].wind.speed+list[18].wind.speed+list[19].wind.speed+list[20].wind.speed+list[21].wind.speed+list[22].wind.speed+list[23].wind.speed)/8).toFixed(2)}m/s`;
    feels_like.textContent = `${((list[16].main.feels_like+list[17].main.feels_like+list[18].main.feels_like+list[19].main.feels_like+list[20].main.feels_like+list[21].main.feels_like+list[22].main.feels_like+list[23].main.feels_like)/8-273.15).toFixed(2)}°C`;
    pressure.textContent = `${((list[16].main.pressure+list[17].main.pressure+list[18].main.pressure+list[19].main.pressure+list[20].main.pressure+list[21].main.pressure+list[22].main.pressure+list[23].main.pressure)/8).toFixed(2)}hPa`;
    humidity.textContent = `${((list[16].main.humidity+list[17].main.humidity+list[18].main.humidity+list[19].main.humidity+list[20].main.humidity+list[21].main.humidity+list[22].main.humidity+list[23].main.humidity)/8).toFixed(2)}%`;
   
}
function DisplayDay4(forecastData){
    detail.style.display="flex";
    const {list} = forecastData;
    time1.textContent = `${list[24].dt_txt.substring(11,16)}`;
    time2.textContent = `${list[25].dt_txt.substring(11,16)}`;
    time3.textContent = `${list[26].dt_txt.substring(11,16)}`;
    time4.textContent = `${list[27].dt_txt.substring(11,16)}`;
    time5.textContent = `${list[28].dt_txt.substring(11,16)}`;
    time6.textContent = `${list[29].dt_txt.substring(11,16)}`;
    time7.textContent = `${list[30].dt_txt.substring(11,16)}`;
    time8.textContent = `${list[31].dt_txt.substring(11,16)}`;
    degree1.textContent = `${Math.round(list[24].main.temp-273.15).toFixed(1)}°C`;
    degree2.textContent = `${Math.round(list[25].main.temp-273.15).toFixed(1)}°C`;
    degree3.textContent = `${Math.round(list[26].main.temp-273.15).toFixed(1)}°C`;
    degree4.textContent = `${Math.round(list[27].main.temp-273.15).toFixed(1)}°C`;
    degree5.textContent = `${Math.round(list[28].main.temp-273.15).toFixed(1)}°C`;
    degree6.textContent = `${Math.round(list[29].main.temp-273.15).toFixed(1)}°C`;
    degree7.textContent = `${Math.round(list[30].main.temp-273.15).toFixed(1)}°C`;
    degree8.textContent = `${Math.round(list[31].main.temp-273.15).toFixed(1)}°C`;
    wind.textContent = `${((list[24].wind.speed+list[25].wind.speed+list[26].wind.speed+list[27].wind.speed+list[28].wind.speed+list[29].wind.speed+list[30].wind.speed+list[31].wind.speed)/8).toFixed(2)}m/s`;
    feels_like.textContent = `${((list[24].main.feels_like+list[25].main.feels_like+list[26].main.feels_like+list[27].main.feels_like+list[28].main.feels_like+list[29].main.feels_like+list[30].main.feels_like+list[31].main.feels_like)/8-273.15).toFixed(2)}°C`;
    pressure.textContent = `${((list[24].main.pressure+list[25].main.pressure+list[26].main.pressure+list[27].main.pressure+list[28].main.pressure+list[29].main.pressure+list[30].main.pressure+list[31].main.pressure)/8).toFixed(2)}hPa`;
    humidity.textContent = `${((list[24].main.humidity+list[25].main.humidity+list[26].main.humidity+list[27].main.humidity+list[28].main.humidity+list[29].main.humidity+list[30].main.humidity+list[31].main.humidity)/8).toFixed(2)}%`;
    
}
function DisplayDay5(forecastData){
    detail.style.display="flex";
    const {list} = forecastData;
    time1.textContent = `${list[32].dt_txt.substring(11,16)}`;
    time2.textContent = `${list[33].dt_txt.substring(11,16)}`;
    time3.textContent = `${list[34].dt_txt.substring(11,16)}`;
    time4.textContent = `${list[35].dt_txt.substring(11,16)}`;
    time5.textContent = `${list[36].dt_txt.substring(11,16)}`;
    time6.textContent = `${list[37].dt_txt.substring(11,16)}`;
    time7.textContent = `${list[38].dt_txt.substring(11,16)}`;
    time8.textContent = `${list[39].dt_txt.substring(11,16)}`;
    degree1.textContent = `${Math.round(list[32].main.temp-273.15).toFixed(1)}°C`;
    degree2.textContent = `${Math.round(list[33].main.temp-273.15).toFixed(1)}°C`;
    degree3.textContent = `${Math.round(list[34].main.temp-273.15).toFixed(1)}°C`;
    degree4.textContent = `${Math.round(list[35].main.temp-273.15).toFixed(1)}°C`;
    degree5.textContent = `${Math.round(list[36].main.temp-273.15).toFixed(1)}°C`;
    degree6.textContent = `${Math.round(list[37].main.temp-273.15).toFixed(1)}°C`;
    degree7.textContent = `${Math.round(list[38].main.temp-273.15).toFixed(1)}°C`;
    degree8.textContent = `${Math.round(list[39].main.temp-273.15).toFixed(1)}°C`;
    wind.textContent = `${((list[32].wind.speed+list[33].wind.speed+list[34].wind.speed+list[35].wind.speed+list[36].wind.speed+list[37].wind.speed+list[38].wind.speed+list[39].wind.speed)/8).toFixed(2)}m/s`;
    feels_like.textContent = `${((list[32].main.feels_like+list[33].main.feels_like+list[34].main.feels_like+list[35].main.feels_like+list[36].main.feels_like+list[37].main.feels_like+list[38].main.feels_like+list[39].main.feels_like)/8-273.15).toFixed(2)}°C`;
    pressure.textContent = `${((list[32].main.pressure+list[33].main.pressure+list[34].main.pressure+list[35].main.pressure+list[36].main.pressure+list[37].main.pressure+list[38].main.pressure+list[39].main.pressure)/8).toFixed(2)}hPa`;
    humidity.textContent = `${((list[32].main.humidity+list[33].main.humidity+list[34].main.humidity+list[35].main.humidity+list[36].main.humidity+list[37].main.humidity+list[38].main.humidity+list[39].main.humidity)/8).toFixed(2)}%`;
    
}


async function displayWeather2(forecastData) {

const {list} = forecastData;

day1_0.textContent = `${list[0].dt_txt.substring(0,10)}`;
day1_1.textContent = `${list[8].dt_txt.substring(0,10)}`;
day1_2.textContent = `${list[16].dt_txt.substring(0,10)}`;
day1_3.textContent = `${list[24].dt_txt.substring(0,10)}`;
day1_4.textContent = `${list[32].dt_txt.substring(0,10)}`;

let morning_amount = 0;
let night_amount = 0;
let morn_counter_1_0 = 0;
let ni_counter_1_0 = 0;
let morning_amount2 = 0;
let night_amount2 = 0;
let morn_counter2 = 0;
let ni_counter2 = 0;

let morning_amount3 = 0;
let night_amount3 = 0;
let morn_counter3 = 0;
let ni_counter3=0;

let morning_amount4 = 0;
let night_amount4 = 0;
let morn_counter4 = 0;
let ni_counter4=0;

let morning_amount5 = 0;
let night_amount5 = 0;
let morn_counter5 = 0;
let ni_couter5=0;
for(let i=0; i<list.length; i++){
  console.log(list[i].dt_txt.substring(0,10));
    if(list[i].dt_txt.substring(0,10)==day1_0.textContent){

        if(list[i].dt_txt.substring(11,16)=="03:00"){
            console.log(list[i].main.temp);
            morning_amount+=parseFloat(list[i].main.temp);
            morn_counter_1_0++;
        }
        else if(list[i].dt_txt.substring(11,16)=="06:00"){
            console.log(list[i].main.temp);
            morning_amount+=parseFloat(list[i].main.temp);
            morn_counter_1_0++;
        }
        else if(list[i].dt_txt.substring(11,16)=="09:00"){
            morning_amount+=parseFloat(list[i].main.temp);
            morn_counter_1_0++;
        }
        else if(list[i].dt_txt.substring(11,16)=="12:00"){
            morning_amount+=parseFloat(list[i].main.temp);
            morn_counter_1_0++;
        }
        else if(list[i].dt_txt.substring(11,16)=="15:00"){
            night_amount+=parseFloat(list[i].main.temp);
            ni_counter_1_0++;
        }
        else if(list[i].dt_txt.substring(11,16)=="18:00"){
            console.log(list[i].main.temp);
            night_amount+=parseFloat(list[i].main.temp);
            ni_counter_1_0++;
        }
        else if(list[i].dt_txt.substring(11,16)=="21:00"){
            night_amount+=parseFloat(list[i].main.temp);
            ni_counter_1_0++;;
        }
        else if(list[i].dt_txt.substring(11,16)=="00:00"){
            night_amount+=parseFloat(list[i].main.temp);
            ni_counter_1_0++;
        }
        else{
            continue;
        }
    }
    
    if(list[i].dt_txt.substring(0,10)==day1_1.textContent){
        if(list[i].dt_txt.substring(11,16)=="03:00"){
            morning_amount2+=parseFloat(list[i].main.temp);
            morn_counter2++;
        }
        else if(list[i].dt_txt.substring(11,16)=="06:00"){
            morning_amount2+=parseFloat(list[i].main.temp);
            morn_counter2++;
        }
        else if(list[i].dt_txt.substring(11,16)=="09:00"){
            morning_amount2+=parseFloat(list[i].main.temp);
            morn_counter2++;
        }
        else if(list[i].dt_txt.substring(11,16)=="12:00"){
            morning_amount2+=parseFloat(list[i].main.temp);
            morn_counter2++;
        }
        else if(list[i].dt_txt.substring(11,16)=="15:00"){
            night_amount2+=parseFloat(list[i].main.temp);
            ni_counter2++;
        }
        else if(list[i].dt_txt.substring(11,16)=="18:00"){
            night_amount2+=parseFloat(list[i].main.temp);
            ni_counter2++;
        }
        else if(list[i].dt_txt.substring(11,16)=="21:00"){
            night_amount2+=parseFloat(list[i].main.temp);
            ni_counter2++;
        }
        else if(list[i].dt_txt.substring(11,16)=="00:00"){
            night_amount2+=parseFloat(list[i].main.temp);
            ni_counter2++;
        }
        else{
            continue;
        }
    }
 
    if(list[i].dt_txt.substring(0,10)==day1_2.textContent){
        if(list[i].dt_txt.substring(11,16)=="03:00"){
            morning_amount3+=parseFloat(list[i].main.temp);
            morn_counter3++;
        }
        else if(list[i].dt_txt.substring(11,16)=="06:00"){
            morning_amount3+=parseFloat(list[i].main.temp);
            morn_counter3++;
        }
        else if(list[i].dt_txt.substring(11,16)=="09:00"){
            morning_amount3+=parseFloat(list[i].main.temp);
            morn_counter3++;
        }
        else if(list[i].dt_txt.substring(11,16)=="12:00"){
            morning_amount3+=parseFloat(list[i].main.temp);
            morn_counter3++;
        }
        else if(list[i].dt_txt.substring(11,16)=="15:00"){
            night_amount3+=parseFloat(list[i].main.temp);
            ni_counter3++;
        }
        else if(list[i].dt_txt.substring(11,16)=="18:00"){
            night_amount3+=parseFloat(list[i].main.temp);
            ni_counter3++;
        }
        else if(list[i].dt_txt.substring(11,16)=="21:00"){
            night_amount3+=parseFloat(list[i].main.temp);
            ni_counter3++;
        }
        else if(list[i].dt_txt.substring(11,16)=="00:00"){
            night_amount3+=parseFloat(list[i].main.temp);
            ni_counter3++;
        }
        else{
            continue;
        }
    }
   
    if(list[i].dt_txt.substring(0,10)==day1_3.textContent){
        if(list[i].dt_txt.substring(11,16)=="03:00"){
            morning_amount4+=parseFloat(list[i].main.temp);
            morn_counter4++;
        }
        else if(list[i].dt_txt.substring(11,16)=="06:00"){
            morning_amount4+=parseFloat(list[i].main.temp);
            morn_counter4++;
        }
        else if(list[i].dt_txt.substring(11,16)=="09:00"){
            morning_amount4+=parseFloat(list[i].main.temp);
            morn_counter4++;
        }
        else if(list[i].dt_txt.substring(11,16)=="12:00"){
            morning_amount4+=parseFloat(list[i].main.temp);
            morn_counter4++;
        }
        else if(list[i].dt_txt.substring(11,16)=="15:00"){
            night_amount4+=parseFloat(list[i].main.temp);
            ni_counter4++;
        }
        else if(list[i].dt_txt.substring(11,16)=="18:00"){
            night_amount4+=parseFloat(list[i].main.temp);
            ni_counter4++;
        }
        else if(list[i].dt_txt.substring(11,16)=="21:00"){
            night_amount4+=parseFloat(list[i].main.temp);
            ni_counter4++;
        }
        else if(list[i].dt_txt.substring(11,16)=="00:00"){
            night_amount4+=parseFloat(list[i].main.temp);
            ni_counter4++;
        }
        else{
            continue;
        }
    }

    if(list[i].dt_txt.substring(0,10)==day1_4.textContent){
        if(list[i].dt_txt.substring(11,16)=="03:00"){
            morning_amount5+=parseFloat(list[i].main.temp);
            morn_counter5++;
        }
        else if(list[i].dt_txt.substring(11,16)=="06:00"){
            morning_amount5+=parseFloat(list[i].main.temp);
            morn_counter5++;
        }
        else if(list[i].dt_txt.substring(11,16)=="09:00"){
            morning_amount5+=parseFloat(list[i].main.temp);
            morn_counter5++;
        }
        else if(list[i].dt_txt.substring(11,16)=="12:00"){
            morning_amount5+=parseFloat(list[i].main.temp);
            morn_counter5++;
        }
        else if(list[i].dt_txt.substring(11,16)=="15:00"){
            night_amount5+=parseFloat(list[i].main.temp);
            ni_couter5++;
        }
        else if(list[i].dt_txt.substring(11,16)=="18:00"){
            night_amount5+=parseFloat(list[i].main.temp);
            ni_couter5++;
        }
        else if(list[i].dt_txt.substring(11,16)=="21:00"){
            night_amount5+=parseFloat(list[i].main.temp);
            ni_couter5++;
        }
        else if(list[i].dt_txt.substring(11,16)=="00:00"){
            night_amount5+=parseFloat(list[i].main.temp);
            ni_couter5++;
        }
        else{
            continue;
        }
    }
}
console.log(morn_counter2);
day_night.textContent=` AfterNoon:${((night_amount/ni_counter_1_0)-273.15).toFixed(1)}°C`;
day2_morning.textContent=` Morning:`
day2_morning.textContent+="\n"
day2_morning.textContent+=`${Math.round(((morning_amount2/morn_counter2))-273.15).toFixed(1)}°C`;
day2_night.textContent=` AfterNoon:`
day2_night.textContent+="\n"
day2_night.textContent+=`${Math.round(((night_amount2)/morn_counter2)-273.15).toFixed(1)}°C`;
day3_morning.textContent=` Morning:`
day3_morning.textContent+="\n"
day3_morning.textContent+=`${Math.round(((morning_amount3)/morn_counter3)-273.15).toFixed(1)}°C`; 
day3_night.textContent=` AfterNoon:`
day3_night.textContent+="\n"
day3_night.textContent+=`${Math.round(((night_amount3)/ni_counter3)-273.15).toFixed(1)}°C`;
day6_morning.textContent=` Morning:`
day6_morning.textContent+="\n"
day6_morning.textContent+=`${Math.round(((morning_amount4/morn_counter4))-273.15).toFixed(1)}°C`; 
day6_night.textContent=` AfterNoon:`
day6_night.textContent+="\n"
day6_night.textContent+=`${Math.round(((night_amount4)/ni_counter4)-273.15).toFixed(1)}°C`;
day4_morning.textContent=` Morning:`
day4_morning.textContent+="\n";
day4_morning.textContent+=`${Math.round(((morning_amount5/morn_counter5)-273.15)).toFixed(1)}°C`; 
day4_night.textContent=` AfterNoon:`
day4_night.textContent+="\n"
day4_night.textContent+=`${Math.round(((night_amount5)/ni_couter5)-273.15).toFixed(1)}°C`;




}
function outsideClickHandler(event) {
    if (!detail.contains(event.target) && event.target !== first_day) {
        detail.style.display = "none";
        document.body.removeEventListener('click', outsideClickHandler);
    }
}

function outsideClickHandler2(event) {
    if (!detail.contains(event.target) && event.target !== second_day) {
        detail.style.display = "none";
        document.body.removeEventListener('click', outsideClickHandler2);
    }
}

function outsideClickHandler3(event) {
    if (!detail.contains(event.target) && event.target !== third_day) {
        detail.style.display = "none";
        document.body.removeEventListener('click', outsideClickHandler3);
    }
}

function outsideClickHandler4(event) {
    if (!detail.contains(event.target) && event.target !== fourth_day) {
        detail.style.display = "none";
        document.body.removeEventListener('click', outsideClickHandler4);
    }
}

function outsideClickHandler5(event) {
    if (!detail.contains(event.target) && event.target !== last_day) {
        detail.style.display = "none";
        document.body.removeEventListener('click', outsideClickHandler5);
    }
}


function updateClock(argument,timeElement,dateTime){
    const date = new Date();
    const localTime = date.getTime();
    const localOffset = date.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const offset = argument * 1000;
    const time = utc + offset;
    const newDate = new Date(time);
    const hours = String(newDate.getHours()).padStart(2, '0');
    const minutes = String(newDate.getMinutes()).padStart(2, '0');
    const seconds = String(newDate.getSeconds()).padStart(2, '0');
    if(hours<12){
         timeString = `${hours}:${minutes}:${seconds} AM`;
    }
    else{
        timeString = `${hours}:${minutes}:${seconds} PM`;
    }
   timeElement.textContent = timeString;
    dateTime.textContent = newDate.toDateString();

    
    
}
let timezoneInterval;
async function displayWeather(weatherData) {
    console.log(weatherData);
    const {
        name:city, 
        sys: {country},
        main: {temp,humidity,pressure},
        weather: [{description, id}],
        timezone,
        wind: {speed}
    } = weatherData;
   
    clearInterval(timezoneInterval);

    // Set a new interval based on the timezone
    timezoneInterval = setInterval(function() {
        updateClock(timezone,time,date_current);
    }, 1000);
    
    country1.textContent = `${city}, ${country}`;
    switch(true){
       case (timezone==-43200):
            timezone2.textContent = "GMT-12";
            break;
       case (timezone==-39600):
            timezone2.textContent = "GMT-11";
           
            
            break;
        case (timezone==-36000):
            timezone2.textContent = "GMT-10";
          
            break;
        case (timezone==-34200):
            timezone2.textContent = "GMT-9:30";
           
            break;    
        case (timezone==-32400):
            timezone2.textContent = "GMT-9";
        
            break;
        case (timezone==-28800):
            timezone2.textContent = "GMT-8";
           
            break;
        case (timezone==-25200):
            timezone2.textContent = "GMT-7";
           
            break;
        case (timezone==-21600):
            timezone2.textContent = "GMT-6";
          
            break;
        case (timezone==-18000):
            timezone2.textContent = "GMT-5";
           

            break;
        case (timezone==-16200):
            timezone2.textContent = "GMT-4:30";
            
            break;
        case (timezone==-14400):  
            timezone2.textContent = "GMT-4";
            
            break;
        case (timezone==-12600):
            timezone2.textContent = "GMT-3:30";
           
            break;
        case (timezone==-10800):
            timezone2.textContent = "GMT-3";
            
            break;
        case (timezone==-7200):
            timezone2.textContent = "GMT-2";
            
            break;
        case (timezone==-3600):
            timezone2.textContent = "GMT-1";
            
            break;
        case (timezone==0):
            timezone2.textContent = "GMT";
           
            break;
        case (timezone==3600):
            timezone2.textContent = "GMT+1";
            
            break;
        case (timezone==7200):
            timezone2.textContent = "GMT+2";
          

            break;
        case (timezone==10800):
            timezone2.textContent = "GMT+3";
           
            break;
        case (timezone==12600):
            timezone2.textContent = "GMT+3:30";
            
            break;
        case (timezone==14400):
            timezone2.textContent = "GMT+4";
            
            break;
        case (timezone==16200):
            timezone2.textContent = "GMT+4:30";
            
            break;
        case (timezone==18000):
            timezone2.textContent = "GMT+5";
            
            break;
        case (timezone==19800):
            timezone2.textContent = "GMT+5:30";
            
            break;
        case (timezone==20700):
            timezone2.textContent = "GMT+5:45";
            
            break;
        case (timezone==21600):
            timezone2.textContent = "GMT+6";
            
            break;
        case (timezone==23400):
            timezone2.textContent = "GMT+6:30";
            
            break;
        case (timezone==25200):
            timezone2.textContent = "GMT+7";
           
            break;
        case (timezone==28800):
            timezone2.textContent = "GMT+8";
           
            break;
        case (timezone==32400):
            timezone2.textContent = "GMT+9";
           
            break;
        case (timezone==34200):
            timezone2.textContent = "GMT+9:30";
           
            break;
        case (timezone==36000):
            timezone2.textContent = "GMT+10";
           
            break;
        case (timezone==37800):
            timezone2.textContent = "GMT+10:30";
            
            break;
        case (timezone==39600): 
            timezone2.textContent = "GMT+11";
           
            break;
        case (timezone==41400):
            timezone2.textContent = "GMT+11:30";
            
            break;
        case (timezone==43200):
            timezone2.textContent = "GMT+12";
            
            break;
        case (timezone==45900):
            timezone2.textContent = "GMT+12:45";
            
            break;
        case (timezone==46800):
            timezone2.textContent = "GMT+13";
            
            break;
        case (timezone==50400):
            timezone2.textContent = "GMT+14";
            
            break;
            
    }
   
   
   
    humidty1.textContent = `${humidity}%`;
    pressure1.textContent = `${pressure}hPa`;
    speed1.textContent = `${speed}m/s`;
    day1.textContent = `Day:${Math.round(temp - 273.15).toFixed(1)}°C`;



    }
    