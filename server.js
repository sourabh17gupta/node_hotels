// var fs = require('fs');
// var os = require('os');
// var user=os.userInfo();
// console.log(user.username);
// fs.appendFile('gretting txt','HI'+user.username+'!',()=>{
//     console.log('file created')});
// console.log('os');

//----->how to import module or other files
const notes = require('./notes.js');
 var age=notes.age;
 console.log(age);
 var result=notes.addnumber(5,age)
 console.log(result);

 //lodash library ----->

 var _= require('lodash');
 var data = ["person", "person",1,2,1,'2',"ram"];
 var filter = _.uniq(data);
 console.log(filter);
console.log(_.isString(true));