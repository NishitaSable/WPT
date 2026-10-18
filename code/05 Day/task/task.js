// function calculate() {
//     var a = document.frm.n1.value;
//     var b = document.frm.n2.value;
//     // validation
//     if (a == "" || b == "") {
//         alert("Please enter both numbers");
//         return;
//     }
//     if (isNaN(a) || isNaN(b)) {
//         alert("Please enter numbers only");
//         return;
//     }
//     a = Number(a);
//     b = Number(b);
//     if (document.frm.op[0].checked) {
//         document.frm.result.value = a + b;
//         console.log(a+b)
//     }
//     if (document.frm.op[1].checked) {
//         document.frm.result.value = a * b;
//         console.log(a*b)
//     }
// }



// function calculate() {
//     var total = 0;
//     for (var i = 0; i < document.frm.book.length; i++) {
//         if (document.frm.book[i].checked) {
//             total = total + Number(document.frm.book[i].value);
//         }
//     }
//     document.frm.total.value = total;
// }



// function readState() {
//     var state = document.frm.state.value;
//     document.frm.result.value = state;
// }



// function calculate() {
//     var a = document.frm.n1.value;
//     var b = document.frm.n2.value;

//     // validation
//     if (a == "" || b == "") {
//         alert("Please enter both numbers");
//         return;
//     }
//     if (isNaN(a) || isNaN(b)) {
//         alert("Please enter valid numbers");
//         return;
//     }
//     a = Number(a);
//     b = Number(b);
//     var op = document.frm.op.value;

//     if (op == "+") {
//         document.frm.result.value = a + b;
//     }
//     else if (op == "-") {
//         document.frm.result.value = a - b;
//     }
//     else if (op == "*") {
//         document.frm.result.value = a * b;
//     }
//     else if (op == "/") {
//         if (b == 0) {
//             alert("Cannot divide by zero");
//             return;
//         }
//         document.frm.result.value = a / b;
//     }
// }




// function validate() {
//     // Name validation
//     if (document.frm.name.value == "") {
//         alert("Please enter Name");
//         document.frm.name.focus();
//         return false;
//     }
//     // Date of Birth validation
//     if (document.frm.dobDay.value == "" ||
//         document.frm.dobMonth.value == "" ||
//         document.frm.dobYear.value == "") {

//         alert("Please select Date of Birth");
//         return false;
//     }
//     // Gender validation
//     if (!document.frm.gender[0].checked &&
//         !document.frm.gender[1].checked) {

//         alert("Please select Gender");
//         return false;
//     }
//     // Address validation
//     if (document.frm.address.value == "") {
//         alert("Please enter Address");
//         document.frm.address.focus();
//         return false;
//     }
//     // PS No validation
//     if (document.frm.psno.value == "") {
//         alert("Please enter PS No.");
//         document.frm.psno.focus();
//         return false;
//     }
//     // Batch No validation
//     if (document.frm.batch.value == "") {
//         alert("Please enter Batch No.");
//         document.frm.batch.focus();
//         return false;
//     }
//     // Date of Joining validation
//     if (document.frm.joinDay.value == "" ||
//         document.frm.joinMonth.value == "" ||
//         document.frm.joinYear.value == "") {
//         alert("Please select Date of Joining");
//         return false;
//     }
//     alert("Form submitted successfully");
//     return true;
// }




function displayClock() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    if (h < 10)
        h = "0" + h;
    if (m < 10)
        m = "0" + m;
    if (s < 10)
        s = "0" + s;
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
}
setInterval(displayClock, 1000);
displayClock();