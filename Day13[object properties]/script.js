let MyInstaData = {
    
    is_private : true,
   accunt_name : "prajktavdchavan27",
     user_name : "prajkta chavan",

following:{
      "1": "sarthak",
     "2" :"easyCode"
 },

followers : {
        "1": "sarthak",
      "2" :"easyCode"
   },

   posts : [
      {
         url: "myphoto.jpg",
         likes : 100,
      date: "1/3/2024"
   }
  ]
 }



console.log(MyInstaData )

console.log(Object.keys(MyInstaData ))   //its return the keys value of object
console.log(Object.values(MyInstaData ))   //its return the values of object
MyInstaData.about=" l learn mern full stack at easycode"// add something in a object
console.log(MyInstaData )
delete  MyInstaData.posts// delete in an array
console.log(MyInstaData )
