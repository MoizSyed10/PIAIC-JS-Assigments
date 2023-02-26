//Java-script Assignment#1 chapter 21 to 30



// let a= prompt("Type Demical Point Number");
// let b= Math.ceil(a);
// console.log(b);

// let index =0;
// var txt="Thats My Fancy TEXTS";
// var c= txt.slice(0,5);
// console.log(c);
// for (index; index < txt.length; index++) {
    
  
    
//     c= [...c].reverse().join("");
//     console.log(c,txt.length);
    
    
// }



//Java-script Assignment#2 chapter 21 to 30
const word=prompt("Type Sentence Capitalized & Non-Capitalized Alphabets In A Single Word..");;
const words = word.split(" ");

console.log(words.map((myword) => { 
    return myword[0].toUpperCase() + myword.substring(1);
  }).join(" "));

















  