let string=""
let a=""
let buttons=document.querySelectorAll("button");
console.log(buttons)
Array.from(buttons).forEach((button)=>{
button.addEventListener("click",(e)=>{
    if(e.target.innerHTML=="Erase"){
        string=string.slice(0, -1);
        document.querySelector("input").value=string
    }
    else if(e.target.innerHTML=="C"){
        string=""
        document.querySelector("input").value=string
    }
    else if(e.target.innerHTML=="^"){
        string+="**"
        document.querySelector("input").value=string
    }
    else if(e.target.innerHTML=="="){
        string=eval(string)
        document.querySelector("input").value=string
    }
    else{
    //console.log(e.target);
    string =string+e.target.innerHTML;
    //console.log(string);
    document.querySelector("input").value=string
    }
})
})