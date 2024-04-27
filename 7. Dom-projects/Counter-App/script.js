

// dom code start here 

let counter = 0;


let count = document.querySelector('h4');


let inc = document.querySelector('#inc');

let res = document.querySelector('#res');


let dec = document.querySelector('#dec');


// inc code 


inc.addEventListener('click',function(){
  counter++;
  count.innerHTML = counter;
  
})


// dec

dec.addEventListener('click',function(){
  counter--;
  count.innerHTML = counter;
})


// res 

res.addEventListener('click',function(){
  counter = 0;
  count.innerHTML = counter;

})
