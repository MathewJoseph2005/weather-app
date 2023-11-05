let wheather ={
    apiKey : "a33001df1c319dd29dbb5895c1b60cfe",
    fetchWeather : function (){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=a33001df1c319dd29dbb5895c1b60cfe"
        )
        .then((response) => response.json())
        .then((data) => console.log(data))
    },
    getLanLon: function (data){
        const {lon} = data.coord[0];
        const {lat} = data.coord[1];
    }
}

