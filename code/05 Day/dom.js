// function go(){
//     alert("click event")
// }
// document.getElementById("btn").addEventListener("click",go)
// document.getElementById("pp").addEventListener("mouseover",
//     function rise(){
//         alert("go rise")
//     })

// function check() {
//             var userid = document.getElementById("userid").value;
//             var name = document.getElementById("Name").value;
//             var password = document.getElementById("Password").value;
//             if (userid == "" || name == "" || password == "") {
//                 alert("Please fill all the fields.");
//                 return false;
//             }
//             return true;
//         }

// function call(){
//    var a =  document.frm.t1
//    var b = document.frm.t2
//    b.value = a.value
// }

// function call(a)
// {  v=a.length
// alert(a)
// alert(v)
// let data="";
// pobj=document.getElementById("pp");
//    for(i=0;i<v;i++)
//    {  data=data+a.elements[i].value;

//    }
// pobj.innerHTML=data;
// }

// How to read value of radio button and checked keyword
// function readradio()
// {
// var l=document.frm.rd.length
// let pobj=document.getElementById("pp")

//     if(document.frm.rd[0].checked)
//     pobj.innerHTML=document.frm.rd[0].value
//     else
//     pobj.innerHTML=document.frm.rd[1].value
// }
// function cc()
// {
//   document.frm.rd[0].checked=true;

// }


// How to read selected value of dropdown

// function readradio() {
//   var l = document.frm.sl.length;
//   for (i = 0; i < l; i++) {
//     if (document.frm.sl[i].selected)
//       document.frm.t.value = (document.frm.sl[i].value)
//   }
//   let pobj = document.getElementById("pp");
//   pobj.innerHTML = document.frm.sl.selectedIndex;
//   let index = document.frm.sl.selectedIndex;
//   pobj.innerHTML += document.frm.sl[index].text;
// }
