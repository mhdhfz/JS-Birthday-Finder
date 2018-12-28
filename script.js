var yourAge = Number(prompt("How old are you?"));

var negativeAge = "Sorry! age cannot be negative number. Please try again!";
var age21 = "Happy 21st Birthday!!";
var ageOdd = "Your age is odd!!";
var perfectSquare = "Perfect Square!!";

if (yourAge < 0) {
  alert(negativeAge);
} else if (yourAge === 21) {
  alert(age21);
} else if (yourAge % 2 !== 0) {
  alert(ageOdd);
} else if (yourAge % Math.sqrt(yourAge) === 0) {
  alert(perfectSquare);
}
