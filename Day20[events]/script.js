// let clickbtn=document.querySelector("#btn")//simply display clck message
// function clicked(){

//   console.log("clicked on btn");
// }
// btn.addEventListener("click",clicked)

// let btn = document.querySelector("#btn");//change btn value using inner text

// function clicked() {
//   if (btn.innerText === "Click") {
//     btn.innerText = "Hide";
//   } else {
//     btn.innerText = "Click";
//   }
// }

// btn.addEventListener("click", clicked);
//  let clickbtn=document.querySelector("#btn")
//  function clicked(){

//    console.log("clicked on btn");
//  }
//  btn.addEventListener("dblclick",clicked)


let clickbtn = document.querySelector("#btn");

    clickbtn.addEventListener("click", function () {
      console.log("Single click on button");
    });

    clickbtn.addEventListener("dblclick", function () {
      console.log("Double click on button");
    });
