//convert json string to json data---->
const jsonString = '{"name" : "john", "age" : 30}';
const jsonObject1 = JSON.parse(jsonString);
console.log(jsonObject1);

//convert json object to json string
const jsonObject ={name : "john", age : 30};
const jsonStrinified = JSON.stringify(jsonObject);
console.log(jsonStrinified);
console.log(typeof jsonStrinified);