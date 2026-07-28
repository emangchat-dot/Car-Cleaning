/* =========================
   IMAGE SLIDER
========================= */


const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;


function showSlide(){

    if(index >= images.length){
        index = 0;
    }

    if(index < 0){
        index = images.length - 1;
    }


    slides.style.transform =
    `translateX(-${index * 100}%)`;

}



next.addEventListener("click",()=>{

    index++;
    showSlide();

});



prev.addEventListener("click",()=>{

    index--;
    showSlide();

});



// Automatic slideshow

setInterval(()=>{

    index++;

    showSlide();

},5000);




/* =========================
   BOOKING FORM
========================= */


const bookingForm =
document.getElementById("bookingForm");


bookingForm.addEventListener(
"submit",
function(event){


event.preventDefault();


alert(
"✅ Booking request received!\n\nWe will contact you shortly to confirm your appointment."
);


bookingForm.reset();


});




/* =========================
   ANIMATED COUNTERS
========================= */


const counters =
document.querySelectorAll(".stats h2");


let started=false;


function startCounters(){


if(started) return;


const stats =
document.querySelector(".stats");


const position =
stats.getBoundingClientRect().top;


if(position < window.innerHeight - 100){


started=true;


counters.forEach(counter=>{


let target =
counter.innerText;


let number =
parseInt(target.replace(/\D/g,""));


let current=0;


let suffix =
target.replace(/[0-9]/g,"");


let speed =
number / 80;



let update = setInterval(()=>{


current += speed;


if(current >= number){

current = number;

clearInterval(update);

}


counter.innerText =
Math.floor(current)+suffix;


},20);



});

}


}


window.addEventListener(
"scroll",
startCounters
);





/* =========================
   SCROLL REVEAL ANIMATION
========================= */


const revealElements =
document.querySelectorAll(
".feature, .pricing-card, .review, .slider"
);



function reveal(){


revealElements.forEach(element=>{


let location =
element.getBoundingClientRect().top;


if(location <
window.innerHeight - 100){


element.style.opacity="1";

element.style.transform=
"translateY(0)";


}


});


}



revealElements.forEach(element=>{


element.style.opacity="0";

element.style.transform=
"translateY(50px)";

element.style.transition=
"0.8s ease";


});



window.addEventListener(
"scroll",
reveal
);


reveal();





/* =========================
   NAVBAR EFFECT
========================= */


const navbar =
document.querySelector("nav");



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 50){


navbar.style.background=
"rgba(5,11,24,0.95)";


}

else{


navbar.style.background=
"rgba(5,11,24,0.75)";


}


});





/* =========================
   BOOK NOW BUTTON EFFECT
========================= */


const buttons =
document.querySelectorAll(
".primary-btn,.secondary-btn"
);



buttons.forEach(button=>{


button.addEventListener(
"mouseenter",
()=>{

button.style.transform=
"scale(1.05)";


});


button.addEventListener(
"mouseleave",
()=>{

button.style.transform=
"scale(1)";


});


});
