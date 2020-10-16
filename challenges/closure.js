// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// With higher order functions and nested functions, the functions themselves can always reach outside the functions but outside functions can never reach in. The nested function can reach the internal variable because it is inside that function.



/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

//so it works, sorta, it is spitting back 16-- I am not sure what they are asking , 


let num =0;
function summation(a){
  for(let i = 0; i <a ; i++){
  num += a;}
}

// const summation = .reduce(function(acc,item){//maybe
//   return acc + item},1);
  summation(4)
  console.log(num);