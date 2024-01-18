const btnCheck = () =>{
    console.log("Click")
}

document.querySelector(".Left").addEventListener("click" , btnCheck);
document.querySelector("#Search").addEventListener("click" , btnCheck);
document.querySelector("#Settings").addEventListener("click" , btnCheck);


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