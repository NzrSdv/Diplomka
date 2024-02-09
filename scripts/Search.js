document.querySelector('#SearchInpOne').addEventListener("input", function(){
    let val = this.value.trim().toLowerCase();
    let Items = document.querySelectorAll( '.productLabel');
    if(val != ""){
         Items.forEach(element => {
            if(element.innerText.toLowerCase().search(val) == -1){
                element.parentElement.parentElement.classList.add("Hide");
                element.innerHTML = element.innerText;
            }else{
                element.parentElement.parentElement.classList.remove("Hide");
                let str = element.innerText;
                element.innerHTML = InsertMark(str,element.innerText.toLowerCase().search(val),val.length)    
            }
        })
    }
    else{
        Items.forEach(element => {
            element.parentElement.parentElement.classList.remove('Hide');
            element.innerHTML = element.innerText;            
        });
    }
}
)

function InsertMark(string,pos,len){
    return string.slice(0,pos) + '<mark>' + string.slice(pos,pos + len) + '</mark>' + string.slice(pos+len);
}