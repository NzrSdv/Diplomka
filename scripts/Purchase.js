class Product{
    constructor(Name,Cost,ImgUrl){
        this.name = Name;
        this.cost = Cost;
        this.url = ImgUrl;
    }
}

class CartProduct extends Product{
    constructor(Name,Cost,ImgUrl){
        super(Name,Cost)
        this.quantity = 1;
    }
    IncreaseAmount(){
        this.quantity += 1;
    };
    DecreaseAmount(){
        this.quantity -= 1;
    };
    
}

import {fs} from "../node_modules/fs";
fs.readFile('../textic.txt',(error,data) => {
    try{console.log(data.toString())}
    catch{console.log(error)}
})
console.log("hi")


// let adding = document.querySelectorAll(".Add")
// adding.forEach(element => {
//     element.addEventListener("click",() => {
//         console.log(element.parentElement.parentElement.children[0].textContent)
//     })
// })

// const Beef = new Product("Beef",1000,"../media/Svgs/HomeIco.svg");

// document.addEventListener("load",() => {

// })