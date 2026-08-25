let title = document.createElement("h1");
title.textContent = "Count: ";
document.body.appendChild(title);

let add = document.createElement("h1");
add.textContent = "0";
document.body.appendChild(add);

let but = document.createElement("button");
but.textContent = "+"
document.body.appendChild(but);

let but2 = document.createElement("button");
but2.textContent = "-"
document.body.appendChild(but2);

let but3 = document.createElement("button");
but3.textContent = "Reset"
document.body.appendChild(but3);

but.style.fontSize = "100px";
but.style.padding = "10px 25px";

but2.style.fontSize = "100px";
but2.style.padding = "10px 25px";

but3.style.fontSize = "100px";
but3.style.padding = "10px 25px";


let co = 0;

but.addEventListener("click", function(){
    co++
    add.textContent = co;
    if(co%10===0 && co!==0){
    
        document.body.style.backgroundColor = "green";
    
    }else{
        document.body.style.backgroundColor = "white";

    
    }
});


but2.addEventListener("click", function(){
    co--;
    add.textContent = co;
    if(co%10===0 && co!==0){
    
        document.body.style.backgroundColor = "green";
    
    }else{
        document.body.style.backgroundColor = "white";
    }
});


but3.addEventListener("click", function(){
    co = 0;
    add.textContent = "0";
    document.body.style.backgroundColor = "white";
    
})





