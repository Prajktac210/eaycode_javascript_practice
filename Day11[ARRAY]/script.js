let student=["prajkta","trupti","pratiksha"];
typeof student;
console.log(student)

console.log(student[2])//find out the specific number item

console.log(student.length) // find the length of array

let marks =[]
console.log(marks.length) // return  length 0

student.push("vidya");  //add the end of array
console.log(student)

student.unshift("dilip");
    console.log(student);// add start of the array
    // console.log(student);
    console.log(student.pop());// remove from array end element  and display remove item
    console.log(student);

  console.log  (student.shift())//// remove from array start element  and display remove item

  let request=[];// try something
  if(request<=0){
    console.log("no request");
  }