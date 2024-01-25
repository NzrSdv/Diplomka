//node js fs import 
import * as fs from "../node_modules/fs";


const data = fs.readFile("../Data.txt",function(error,data){
    if(error){
        return console.log(error);
    }
    console.log(data.toString())
})
console.log(data)

//Input animations
let inputs = document.querySelectorAll("input");
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

//Buttons clicks and checks

let button = document.getElementById("SignIn");
button.addEventListener("click", (e) => {
    e.preventDefault();
    for(let i = 0; i < inputs.length; i++)
    {
        console.log(inputs[i].value)
    }
})