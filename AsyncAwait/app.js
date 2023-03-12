async function weather(){
let delhiWeather=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('27 degree')
    },2000)
})

let bangloreWeather=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('21 degree')
    },5000)
})
// delhiWeather.then(alert)
// bangloreWeather.then(alert)
console.log('Fetching delhi weather please wait ....')
let delhiW=await delhiWeather
console.log(`Fetched delhi weather : ${delhiW}` )
console.log('Fetching Banglore weather please wait ....')
let bangloreW=await bangloreWeather
console.log(`Fetched banglore weather : ${bangloreW}` )
return[delhiW,bangloreW]
}
console.log('welcome to the weather control room')
let a=weather()
a.then((value)=>{
console.log(value)
})

