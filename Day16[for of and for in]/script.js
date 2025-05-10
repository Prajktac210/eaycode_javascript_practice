let num=[1,2,3,4,5,6,7,8,9]
for(let numbers of num){
  console.log(numbers);
}

let name=["prajkta","pratiksha","trupti","dilip","vidya"]
for(let names of name){
  console.log(names)

}

let students={
  name:"prajkta",
  age:21,
  address:"satara",
  ph_number:'1234567890'
}
for (let info in students){
  console.log(info)//accept keys
  console.log(students[info]);//accept keys value
}


