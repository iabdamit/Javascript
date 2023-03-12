let messages=[
    "Intializing Hack Tool",
    "Connecting to Facebook",
    "Connecting to Server 1",
    "Connection Failed. Retrying...",
    "Connecting to Server 2",
    "Connected Successfully...",
    "Username iamharry",
    "Trying Brute Force",
    "200k passwords tried...",
    "Match not found",
    "Another 200k passwords tried...",
    "Match not found",
    "Another 200k passwords tried...",
    "Match found",
    "Accessing Account",
    "Hack Successful"
]

const sleep=(seconds)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(true)},seconds*1000)
})
    }
const showHack=async(message)=>{
await sleep(2)
console.log(message)
let txt=document.getElementById('text')
txt.innerHTML=txt.innerHTML+message+'<br>'
}

(async()=>{
for (let i = 0; i < messages.length; i++) {
    await showHack(messages[i])
    
}
})()//! async iife  imidietly invoke