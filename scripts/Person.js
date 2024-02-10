let Popolnenie = document.getElementById("Popolnit");

let PopolnenieWindow = document.querySelector(".PopolnenieWindow");
Popolnenie.addEventListener("click",() => {
    PopolnenieWindow.style.display = "flex";
})


let ClickToPopl = document.getElementById("Insert");
let BalanceInput = document.getElementById("BalanceInput");
ClickToPopl.addEventListener("click",() => {
    let text = BalanceInput.value;
    let bal;
    if(text.trim() != ""){
        bal = Number(localStorage.getItem("Balance"));
        bal += Number(text);
        localStorage.setItem("Balance",bal);
        personStyles(true);
        Zapolnenie();
    PopolnenieWindow.style.display = "none";
    }
    else{
        alert("Введите Число!   ")
    }
})