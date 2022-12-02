let originalAmount;
let exchangeRateToEuro = 1.15;
let exchangeRateToPound = 0.87
let exchangedAmount;
let buttonType;
const conversionBtns = document.querySelectorAll("input[type=submit]");

let convertForm = document.getElementById('myForm');
let msg = document.getElementById('msg');

convertForm.addEventListener('submit', function(ev){
    ev.preventDefault();
    conversionBtns.forEach(function (button) {
        button.addEventListener("click", function (ev) {
            console.log(ev.target.id)
            buttonType = ev.target.id;

        });
    });
    originalAmount = parseFloat(document.getElementById('money').value);
    if(isNaN(originalAmount)){
        msg.style.display = "block";
        msg.innerHTML = "You must enter a number";
        msg.setAttribute('class', 'error');
    }
    
    else{
        msg.style.display = "block";
        console.log(buttonType);
        if (buttonType == "toEuro"){
            exchangedAmount = originalAmount * exchangeRateToEuro;
        }
        if (buttonType == "toPounds"){
            exchangedAmount = originalAmount * exchangeRateToPound;
        }
        exchangedAmount = exchangedAmount.toFixed(2);
        msg.innerHTML = "You will get &euro;"+exchangedAmount;
        msg.removeAttribute('class');
    }
})