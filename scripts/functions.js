function signCheck(){
    console.log("tut");
    let status = localStorage['Signed'];
    if(status == "true"){
        personStyles(true);
    }
    else{
        personStyles(false);
        localStorage['Signed'] = false;
    }}
function personStyles(isIn){
    let person = document.querySelector(".Person");
    let labelka = document.querySelector(".Name");
    if(isIn){
        labelka.innerText =  `${localStorage.getItem("Balance")}₸`;
        labelka.style.fontSize = "1rem";
        person.style.mask = "url(../media/SVGS/persona.svg) center no-repeat";
    }
    else{
    labelka.innerText = "Регистрация";
    labelka.style.fontSize = ".6rem";
    person.style.mask = "url(../media/SVGS/personAdda.svg) center no-repeat";
    }
    person.style.maskSize = "var(--maskSize)";
}


function Zapolnenie(){
    const ulka = document.getElementById("PersonList");
    let List = ulka.children;
    let keys = ["Login","Password","PhoneNumber","Balance"];
    for(let i = 0; i < List.length; i++){
        List[i].innerHTML = "<h5>"+ keys[i] + " : "+ localStorage.getItem(keys[i]) + "</h5>";
        signCheck();
    }
}


function Home(){
    window.location.href = "index.html";
}

    
function CartCheck(){
    personStyles(true);
    let grid = document.querySelector(".Grid");
    grid.innerHTML = " ";
    let CartJson = JSON.parse(localStorage.getItem("Cart"));
    let VisTotal = document.getElementById("Total");
    if(localStorage.getItem("Cart") == null){
        let text = document.createElement('h2');
        text.classList.add("text");
        grid.appendChild(text);
        grid.children[0].textContent = "тут пока ничего нет...";
        VisTotal.innerText = "Всего : 0₸";
    }
    else{
        for(let i = 0; i < CartJson.Cart.length;i++){
            grid.innerHTML += `<div class="tovar">
            <div class="Top">
                 <img src="${CartJson.Cart[i].TovarUrl}" class="imgshka">
             </div>
             <div class="Bottom">
                 <h4 class="productLabel">${CartJson.Cart[i].TovarName}</h4>
                 <h4 class="text">${CartJson.Cart[i].TovarCost}₸</h4>
                 <div class="bottomRow">
                    <h4 class="text">${CartJson.Cart[i].TovarQuantity}шт</h4>
                    </div>
                </div>
            </div>`;
        }
        let Total = CartJson.Total;
        VisTotal.innerText = `Всего : ${Total}₸`;
    }
}