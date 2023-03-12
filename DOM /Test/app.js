document.body.getElementsByTagName('nav')[0].firstElementChild.style.color="red"
document.body.getElementsByTagName('nav')[0].firstElementChild.style.color="green"
document.body.getElementsByTagName('nav')[0].lastElementChild.style.color="green"


Array.from(document.body.getElementsByTagName('li')).forEach((element)=>{
    element.style.background="cyan";
})