function chgImage(){
    if (imgNumber == 5){
        imgNumber = 0;
    }
    else{
        imgNumber += 1;
    }
    document.getElementById('myImages').setAttribute('src', imageAr[imgNumber]);
}


let imageAr = ['images/view1.jpg', 'images/view2.jpg', 'images/view3.jpg',
'images/view4.jpg', 'images/view5.jpg', 'images/view6.jpg'];
let imgNumber = 0;
document.getElementById('myImages').setAttribute('src', imageAr[0]);
setInterval(chgImage, 4000);


console.info(document.getElementById("myHeading").innerHTML);
document.getElementById('myHeading').innerHTML = "Your Name";
document.querySelector('nav ul li').setAttribute('class', 'currentPage');
document.getElementById('myTestEvent').addEventListener('click',
function(ev){
console.dir(ev);
})


document.querySelector(".red").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', "redBack");
})

document.querySelector(".green").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', "greenBack");
})

document.querySelector(".blue").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', "blueBack")
})

document.querySelector(".reset").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', "colPicker")
})

document.getElementById("myImages").addEventListener('click', chgImage)


convertForm.addEventListener('submit', function(ev){
    ev.preventDefault();
})
    
document.getElementById('pounds').value;

priceEuros = 0;
exchangeRate = 0.87;
pricePounds = parseFloat(document.getElementById('pounds').value)

if(isNaN(pricePounds)){
    msg.style.display = "block";
    msg.innerHTML = "You must enter a number";
    msg.setAttribute('class', 'error');
}
else{
    priceEuros = pricePounds * exchangeRate;
    msg.style.display = "block";
    priceEuros = priceEuros.toFixed(2);
    msg.innerHTML = "You will get &euro;"+priceEuros;
    msg.removeAttribute('class');
}

document.getElementById('pounds').addEventListener('focus', function(ev){
    ev.target.value = "";
    msg.innerHTML = "";
    msg.removeAttribute('class');
})


    