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
        labelka.innerText =  localStorage.getItem("Login");
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

function Home(){
    window.location.href = "index.html";
}

function CartCheck(){
    personStyles(true);
    if(localStorage.getItem("Cart") == null){
        let text = document.createElement('h2');
        text.classList.add("text")
        let grid = document.getElementById("cartGrid");
        grid.appendChild(text);
        grid.children[0].textContent = "тут пока ничего нет..."; 
    }
}