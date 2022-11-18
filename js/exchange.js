let pricePounds;
let exchangeRate = 1.15;
let priceEuros;

let convertForm = document.getElementById('myForm');
let msg = document.getElementById('msg');

convertForm.addEventListener('submit', function(ev){
    ev.preventDefault();
    pricePounds = parseFloat(document.getElementById('pounds').value);
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
})