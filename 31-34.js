let naame= prompt("Type Your Name:");
let dobd= prompt("Type Your Birth Date:");
let dom= prompt("Type Your Birth Month:");
let doy= prompt("Type Your Birth Year:");
console.log("Assalam o Alikum "+ naame);   
const birthdate = new Date(doy,dom,dobd);
console.log("Your Date of Birth Is : ",birthdate);
const today =new Date();
const age1= today.getFullYear() - birthdate.getFullYear();
console.log("Your are : ",age1," Years Old");
function calculation() {
const agedays= 365.24*age1;
console.log("Your Age In Days Is : ",agedays)
const agehr = age1*24*365.24;
console.log("Your Age In Hours Is : ",agehr)

}


calculation.call();
