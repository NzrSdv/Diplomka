class Product{
    constructor(Name,Cost,ImgUrl){
        this.name = Name;
        this.cost = Cost;
        this.url = ImgUrl;
    }
}

class CartProduct extends Product{
    constructor(Name,Cost){
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
// let adding = document.querySelectorAll(".Add")
// adding.forEach(element => {
//     element.addEventListener("click",() => {
//         console.log(element.parentElement.parentElement.children[0].textContent)
//     })
// })

const Beef = new Product("Beef",1000,"../media/Svgs/HomeIco.svg");