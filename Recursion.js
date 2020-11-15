
/**
 * Recusrsion Concepts
 * Fabonacci series, Factorials solving. 
 * Divide and concur Concepts can be solved
 * 
 * **/

let counter = 0;
function inception (){
console.log(counter);

if(counter>3){
return 'done';
}
counter++;
return inception();


}
inception();

/**
 * Identify the base case.
 * Identify the Recusrsive case.
 * Get closer and closer and rturn when needed.
 * Usualy have two return.
 * 
 * **/

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

 function fibonacciIterative(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1]);
  }
 return arr[n];
}
fibonacciIterative(3);

function fibonacciRecursive(n) {
  if (n < 2){
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2)
}

fibonacciRecursive(6)


function findFactorialIterative(number) {
  let answer = 1;
  // you actually no longer need the if statement because of the for loop
  // if (number === 2) {
  //   answer = 2;
  // }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

function findFactorialRecursive(number) {
  if(number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1)
}

findFactorialIterative(5);
findFactorialRecursive(5);

//If you want, try to add a base case condition for the recursive solution if the parameter given is less than 2