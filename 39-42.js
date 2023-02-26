const course=prompt("Type Sentence Capitalized & Non-Capitalized Alphabets In A Single Word..");
const words = course.split(" ");

console.log(words.map((myword) => { 
    return myword[0].toUpperCase() + myword.substring(1);
  }).join(" "));


  function factorial(n){
    if(n < 0){
        return "number has to be positive."
    }//base case
    
    if(n == 0 || n == 1){
        return 1;//recursive case
    }else{
        return n * factorial(n-1);
    }
}
let n = prompt("Type Positive Numbers Only  ");
answer = factorial(n)
console.log("Factorial of " + n + " : " + answer);

var value= multiply(4,3,6);

console.log("value", value); // The result is ?         

function add(a, b){ var z= a+b; return z; };

function multiply(a, b, c){ var z= a* add(b, c); return z; };

console.log("course", course); // The result is ? console.log("z", z); // The result is ?

