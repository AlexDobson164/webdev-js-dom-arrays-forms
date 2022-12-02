console.info(document.getElementById("myHeading").innerHTML);
document.getElementById('myHeading').innerHTML = "Your Name";
document.querySelector('nav ul li').setAttribute('class', 'currentPage');
document.getElementById('myTestEvent').addEventListener('click',
function(ev){
console.dir(ev);
})