
//Buttons 
const ProfileBtn = document.querySelector(".Left");
const SearchBtn = document.querySelector("#Search");
const CartBtn = document.querySelector("#Cart");

ProfileBtn.addEventListener('click',() => {
    console.log("CLICK");
    let status = localStorage.getItem("Signed")
    console.log(status)
    if(status == "true"){
        window.location.href = "Person.html";
    }
    else{
        window.location.href = "SignUp.html";
    }
})
try{
CartBtn.addEventListener("click", () => {
    if(localStorage.getItem("Signed") == "true"){
        window.location.href = "Cart.html";
    }
    else{
        window.location.href = "SignUp.html";
    }
})
}catch{
    console.log("ne tam")
}

// //Slider
// const slider = document.querySelector(".ScrollMenu");
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown',(e) => {
//     isDown = true;
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// })
// slider.addEventListener('mouseleave',() => {
//     isDown = false;

// })
// slider.addEventListener('mouseup',() => {
//     isDown = false;

// })
// slider.addEventListener('mousemove',(e) => {
//     if(!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX);
//     slider.scrollLeft = scrollLeft - walk;
// })