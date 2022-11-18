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


// document.querySelector(".red").addEventListener('click', function(ev){
//     document.querySelector('body').setAttribute('class', "redBack");
// })

// document.querySelector(".green").addEventListener('click', function(ev){
//     document.querySelector('body').setAttribute('class', "greenBack");
// })

// document.querySelector(".blue").addEventListener('click', function(ev){
//     document.querySelector('body').setAttribute('class', "blueBack")
// })

// document.querySelector(".reset").addEventListener('click', function(ev){
//     document.querySelector('body').setAttribute('class', "colPicker")
// })

let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);

for (let i = 0; i < colourButtons.length; i++) {
  colourButtons[i].addEventListener("click", chgColour);
}

function chgColour(ev) {
  console.dir(ev.target.classList);
  console.dir(ev.target.classList[0]);
  let colourPicked = ev.target.classList[0] + "Back";
  let bodyElement = document.body;
  if (colourPicked === "resetBack") {
    bodyElement.removeAttribute("class");
  } else {
    bodyElement.setAttribute("class", colourPicked);
  }
}

document.getElementById("myImages").addEventListener('click', chgImage)