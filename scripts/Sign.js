
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
    inputs.forEach(element => {
        localStorage.setItem(element.id,element.value);
    })
    localStorage['Signed'] = true;
    window.location.href = 'index.html';
})