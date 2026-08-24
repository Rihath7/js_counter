let title = document.createElement("h1");
title.textContent = "Count: ";
document.body.appendChild(title);

let add = document.createElement("h2");
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


let co = 0;

but.addEventListener("click", function(){
    co++
    add.textContent = co;
    if(co%10===0){
    
        document.body.style.backgroundColor = "green";
    
    }else{
        document.body.style.backgroundColor = "white";

    
    }
});


but2.addEventListener("click", function(){
    co--;
    add.textContent = co;
    if(co%10===0){
    
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





