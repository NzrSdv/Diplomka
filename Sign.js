document.querySelectorAll(".fieldset").forEach((element) => element.addEventListener("click", (event) => {
    let field = event.currentTarget;
    field.classList.toggle("focus");
    field.classList.toggle("float");
    
}))