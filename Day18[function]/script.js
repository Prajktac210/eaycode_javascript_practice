let greet=(message)=>{    //arrow function
  console.log(message)   
}
greet("hi guys good morning");

//when code is execute one time use this method
let sum=(a,b)=>a+b
let resultofsum=sum(10,20)
console.log(resultofsum)


let square=(num)=>{
  console.log(`the squre of ${num} is`,num*num)
}
square(10);

//IIFE
(function() {
    console.log("say hi")
  })();

  //callback
  let sayhi=(callback)=>{
    console.log("say hii");
    callback();//complete the work when it call 
  }
  sayhi(()=>{
    console.log("callback exit")
  })

  //higher order function
  let sayhello=(callbackexit)=>{
    console.log("say hii hello");
    callbackexit();//complete the work when it call 
  }
  sayhello(()=>{
    console.log("callback exit again")
  }) 


  //return call 
  function returnhello(){
    return function(){
      console.log("good morning")
    }
  }

  let resultmessage=returnhello()
  console.log( resultmessage)
