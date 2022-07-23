let h3 = document.querySelector("h3");
let firstcolor = document.querySelector(".color1");
let secondcolor = document.querySelector(".color2");

function changebackground(){
    document.body.style.background = `linear-gradient(to right, ${firstcolor.value}, ${secondcolor.value})`;
}

firstcolor.addEventListener('input', changebackground) 
secondcolor.addEventListener('input', changebackground)
