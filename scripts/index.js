//Buttons 
const ProfileBtn = document.querySelector(".Left");
const SearchBtn = document.querySelector("#Search");
const SettingsBtn = document.querySelector("#Settings");

ProfileBtn.addEventListener('click',() => {
    window.location.href = "Sign.html"
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