function sum(a,b){
  console.log("addition of two no",a+b)
}
sum(10,20)

function greet(){
  return ("hello")  //using return keyword
}
let result=greet()
console.log(result)


//check positivenegative no

function positivenegative(num){
  if(num==0){
    return "num is zero"
  }else if(num > 0){
    return 'num is positive'
  }else{
    return "negative"
  }
}
let number=positivenegative(10)
console.log(number)


//function expression
 let add=function(x,y){
  console.log(x+y)
 }
 add(10,30)


 //set default variable

 function greet(username="user"){
  console.log(`good morning ${username}`)
 }
 greet()
