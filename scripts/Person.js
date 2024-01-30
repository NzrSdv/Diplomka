function Zapolnenie(){
    const ulka = document.getElementById("PersonList");
    let List = ulka.children;
    let keys = ["Login","Password","PhoneNumber"];
    for(let i = 0; i < List.length; i++){
        List[i].innerHTML = "<h5>"+ keys[i] + " : "+ localStorage.getItem(keys[i]) + "</h5>";  
    }
}

let MainBtn = document.getElementById("Main");
MainBtn.addEventListener("click", () => {
    window.location.href = "index.html";
})