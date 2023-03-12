let first=document.getElementById('first');
first.className='text-black red'
console.log(first.className)
//first.classList.remove('red')
first.classList.toggle('red')//* if present then it remove and if not present then it will remove
first.classList.contains('red')