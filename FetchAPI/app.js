let p=fetch("https://goweather.herokuapp.com/weather/New york")
p.then((Response)=>{
    console.log(Response.status)
    console.log(Response.ok)
    return Response.json()
    })
.then((Response1)=>{console.log(Response1)})