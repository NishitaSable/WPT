// let div = document.getElementById("nameDiv")
// let h1 = document.getElementById("result")
// onmousemove = function(){
//     h1.innerHTML = div.innerHTML;
// }


// let p = document.getElementById("pp");
// let b = p.getElementsByTagName("b")[0];
// let value = b.innerHTML;
// document.getElementById("result").innerHTML = value;


// let s=document.getElementsByTagName("p")
// let div=document.getElementsByTagName("result")
// let l=s.length
// for(let i=0;i<l;i++){
//     div.innerHTML += s[i].innerHTML
// }


function copyAddress() {
    let checkbox = document.getElementById("sameAddress");
    let address1 = document.getElementById("address1");
    let address2 = document.getElementById("address2");

    if (checkbox.checked) {
        address2.value = address1.value;
    } else {
        address2.value = "";
    }
}
