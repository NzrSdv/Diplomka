
//Input animations
let inputs = window.document.querySelectorAll("input");
inputs.forEach((element) => {
    let parent = element.parentElement;

    element.addEventListener("focus", () =>{
        parent.classList.add("float");  
    })
    element.addEventListener("blur",() =>{
        if(element.value == ""){
            parent.classList.remove("float");
        }
    })
})


let SignUpButton = document.getElementById("SignUp");
SignUpButton.addEventListener("click", () =>{
    let accept = true;
    inputs.forEach(element => {
        if(element.value.length <= 3){
            alert("В Логине, Пароле или В номере должно быть не меньше 3 символов")
            accept = false;
        }
        else{
            localStorage.setItem(element.id,element.value);
        }
    })
    localStorage.setItem("Balance",0);
    if (accept == true){
        localStorage['Signed'] = true;
        window.location.href = 'index.html';
    }
    else{
        return;
    }
})