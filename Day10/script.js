//else if
let score = 85;
let grade;

if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C'; 
} else if (score >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}

console.log("Your grade is: " + grade); 

//switch
let num1 = 10
let num2 = 30

let operation = "a"

switch(operation){
 case "+" :
 console.log(num1 + num2);
 break;

case "-":
console.log(num1 - num2);
 break;

case "*":
 console.log(num1 * num2);
 break;
case "/" :
 console.log(num1 / num2);
 break;
 case "%" :
console.log(num1 % num2);
 break;

default:
 console.error(operation + " is not supported")
}

