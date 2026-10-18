// async function f(){
//     return 1;
// }f()
// .then((dd)=>
//     alert(dd),
//     (err)=>alert(err))
//     console.log(f())



// async function f(){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("done"),200)
//         // setTimeout(()=> reject(new Error("Promise rejected")),200)
//     }); //future data
//     document.write(".........") //3
//     let result = await promise//wait //2
//     document.write(result)
//     alert("where is this line.....") //1
// }
// f()
// document.write("go-----") //4
// document.write("inner div done") //5

// // fetch api used when i have two different tech
// fetch return type is Promise
// promise resolve when server send header Response
// header file is in response
// when response resolve we get body
// await fetch will return response




// fetchdata = async function () {
// 	let response = await fetch("ejson.json");
// 	if (response.ok) {  
// 		let json = await response.json();
// 		let fd = "";
// 		console.log(json)
// 		for (let x of json) {
// 			console.log(x)
// 			for (let b in x) {
// 				console.log(x[b])
// 				fd += x[b] + "<br/>"
// 			}
// 			fd += "<hr/>";
// 		}
// 		document.getElementById('p').innerHTML = fd;
// 		// console.log(response.headers);
// 		// alert(response.headers.get('Content-Type'));

// 		// //iterateoverallheaders
// 		// for (let [key, value] of response.headers) {
// 		// 	alert(`${key}=${value}`);
// 		// }

// 	}
// 	else {
// 		alert("HTTP-Error:  " + response.status);
// 	}
// }
// setTimeout(fetchdata, 2000);




// function getdata() {
//   fetch("ejson.json")
//     .then((response) => {
//       let obj = response.json();
//       console.log(obj + "........" + response.status);
//       return obj;
//      }) //.then(response=>response.json())
//     .then((data) => {
//       let fd = "";

//       console.log(data);
//       for (let x of data) {
//         console.log(x);
//         for (let b in x) {
//           console.log(x[b]);
//           fd += x[b] + "<br/>";
//         }
//         fd += "<hr/>";
//       }
//     document.getElementById('p').innerHTML = fd;    
// })
//     .catch((err) => alert(err + ".....error in fetching data"));
// }
// setTimeout(getdata, 1000);



/*function Storedata() {
const userData = {
job: "Programmer",
skills: [
{ id: 4200, name: "Angular" },
{ id: 3000, name: "React" },
{ id: 8080, name: "Vue" },
],
};
// Store the object into storage
sessionStorage.setItem("userData", JSON.stringify(userData));
 }
function Getdata(){
const data = sessionStorage.getItem("userData");
console.log("data: ", JSON.parse(data));
let ta=document.getElementById("ta");
let obj=JSON.parse(data);
ta.innerHTML=JSON(obj)
console.log(ta);
}
*/



// let user={};
// alert(user?.address?.street);
// document.write("Err")



// document.write(Math.floor());
// document.write("<hr/>")
// a=(Math.random()*4);
// document.write(a);
// document.write("<hr/>")
// x=Math.floor(a);
// document.write(x);



