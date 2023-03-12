// setInterval(()=>{
// let d=new Date
// let time=document.getElementById('time')
// time.innerHTML=d
// },1000)


//! my practice
setInterval(function(){
    let a=new Date()
    let d=a.getDate()
    let y=a.getFullYear()
    let mo=a.getMonth()
    let date=`${d}/${mo}/${y}`
    let Ndate=document.getElementById('date')
    Ndate.innerHTML=date
},1000)

setInterval(function(){
    let a=new Date()
    let h=a.getHours()
    let m=a.getMinutes()
    let s=a.getSeconds()
    let time=`${h>12?h-12:h}:${m}:${s}`
    let Ntime=document.getElementById('time')
    Ntime.innerHTML=time
},1000)
