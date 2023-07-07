let p_box1 = document.querySelector("p.BOX1");
let body = document.querySelector("body");

p_box1.addEventListener("mouseover",e=>{
    body.style.backgroundColor = "red";
})
p_box1.addEventListener("mouseleave",e=>{
    body.style.backgroundColor = "white";
})