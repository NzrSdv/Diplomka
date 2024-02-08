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
let adding = document.querySelectorAll(".Add")
adding.forEach(element => {
    element.addEventListener("click",() => {
        let tovar = element.parentElement.parentElement;
        let url = tovar.parentElement.children[0].children[0].attributes.src.value;
        let name = tovar.children[0].textContent;
        let cost = tovar.children[1].textContent;
        console.log([url,name,cost])
    })
})

