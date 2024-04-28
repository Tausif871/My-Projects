

let val = 0;

// h4 select


let count = document.querySelector("h4");






let inc = document.querySelector("#inc");


let res = document.querySelector("#res");



let dec = document.querySelector("#dec");


inc.addEventListener("click",function(){
  val++;
  count.innerHTML = val;
})



res.addEventListener("click",function(){
  val = 0;
  count.innerHTML = val;
})


dec.addEventListener("click",function(){
  val--;
  count.innerHTML = val;
})



