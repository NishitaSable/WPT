// ------------------------1) capturing error as well as result

// let promise = new Promise(function(resolve,reject){
//     console.log(resolve)
//     // setTimeout(() => resolve("Done"),1000)
//     setTimeout(() => reject(new Error("some error occuerd")),1000)
// });
// promise.then(result => alert(result),
//     error => alert(error));
//     console.log(promise)
//     document.write("Happy to go ahead......")


// ----------------------2) capturing only error
// let promise = new Promise((resolve,reject) => {
//     setTimeout(() => reject(new Error("Whoops!")),1000)
// });
// promise.catch((result)=>alert(result + "err...."))


// -----------------------3) capturing error using finally
// let promise = new Promise((resolve,reject) =>{
//     setTimeout(() => reject(new Error("err")),1000)
// });
// promise.finally(()=> alert("Result Ready"))
// .then((data)=> alert(data)).catch(err=>alert(err+"......"))
////here catch block will execute because we are not haldhling error before it



// let promise = new Promise((resolve,reject) =>{
//     setTimeout(() => reject(new Error("err")),1000)
// });
// promise.finally(()=> alert("Result Ready"))
// .then((data)=> alert(data)),
// err => alert((err))
// .catch(err=>alert(err+"......"))
//here catch wont run beacuse we are handling error is error



// new Promise((resolve, reject) => {
//       throw new Error("error");
//     }) 
//     .finally(() => alert("Promise ready"))
// 	  . then(r => alert(r),err=>{ 
//              throw new Error("dd")
//         return alert(err);
//         })
//     .then(r => alert("next then"))  
// 	  .catch(err => alert(err+"...."))
//     .then((data)=>alert("mydata"));



//  'use strict'
//  var node = {
//   type: "Identifier",
//   name: "foo"
//  },
//   type = "Literal",
//   name = 5;
//  function outputInfo({type,name}) {
//   console.log(type);//Identifier
//   console.log(name);//foo
//  }
//  outputInfo( node);
//  console.log(type);//"Literal"
//  console.log(name);//5


 let node = {
    type: "Identifier",
    name: "foo"
 };

 let{type,name,value} = node
 console.log(value) //undefined
  console.log(name) //foo