let dom=document.getElementById("box")//accept div by id
console.log(dom)
console.log(dom.innerText);//accept innertext in div

dom.innerHTML = "<b>we can learn dom how to add html</b>";//add a specifictag in page 
console.log(dom.style)
dom.style.backgroungColor="pink"

let usingclassname=document.getElementsByClassName("paragraph")//using this getting an a array format
console.log(usingclassname)

for (let para of usingclassname){//made a changes in div we can run loop
  para.innerHTML="<h1>hi guys</h1>"
}

// let para=document.getElementsByTagName("p")
// console.log(para)

// let para=document.querySelector("p")
// console.log(para);

let para=document.querySelectorAll("p")
console.log(para);

