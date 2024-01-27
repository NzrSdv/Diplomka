function signCheck(){
    console.log("tut");
    if(localStorage['Login'] != null){
        localStorage['Signed'] = true;
    }
    if(localStorage['Signed']){
        personStyles(true)
    }
    else{
        personStyles(false);
        localStorage.setItem('Signed',false);
    }}
function personStyles(isIn){
    let person = document.getElementById("Person");
    let labelka = document.getElementById("Name");
    if(isIn){
        labelka.innerText =  localStorage.getItem("Login");
        person.style.mask = "url(../media/SVGS/persona.svg) center no-repeat";
    }
    else{
    labelka.innerText = "Регистрация";
    person.style.mask = "url(../media/SVGS/personAdda.svg) center no-repeat";
    }
    person.style.maskSize = "var(--maskSize)";
}
//Buttons 
const ProfileBtn = document.querySelector(".Left");
const SearchBtn = document.querySelector("#Search");
const CartBtn = document.querySelector("#Cart");

ProfileBtn.addEventListener('click',() => {
    console.log("CLICK")
    if(localStorage['Signed']){
        window.location.href = "Person.html";
    }
    else{
        window.location.href = "SignUp.html";
    }
})


//Slider
const slider = document.querySelector(".ScrollMenu");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown',(e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
})
slider.addEventListener('mouseleave',() => {
    isDown = false;

})
slider.addEventListener('mouseup',() => {
    isDown = false;

})
slider.addEventListener('mousemove',(e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX);
    slider.scrollLeft = scrollLeft - walk;
})