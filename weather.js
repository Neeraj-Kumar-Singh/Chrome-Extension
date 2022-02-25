
 
fetch("https://api.openweathermap.org/data/2.5/weather?q=Kanpur&appid=2f0983f4c324d1dfc321dc837e05dd5c")
.then(data => data.json())
.then(tempData => {
    const tempText = tempData.main.temp;
    const locationText = tempData.name;
    const ttempText=Math.floor(tempText-273);
    const temp = document.getElementById("temp");
    const location = document.getElementById("location");
    temp.innerHTML=ttempText;
    location.innerHTML=locationText;
});

