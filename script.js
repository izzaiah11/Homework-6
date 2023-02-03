document.querySelector(".API").addEventListener('click', function(){
    var city = document.querySelector(".search").value 
    var api = "https://api.openweathermap.org/data/2.5/weather?q="+city + "&appid=b27af2d7ef980ed996b17bdc5e1bce82"
    fetch(api)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
    })
})
