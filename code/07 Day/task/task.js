async function search() {
  // Load JSON file
  let response = await fetch("ejson.json");

  // Convert JSON into JavaScript array
  let data = await response.json();

  // Get code from textbox
  let code = document.getElementById("code").value;


  // Filter employee
  let result = data.filter((x) => x.code == code);


  // Display result
  if (result.length > 0) {
    document.getElementById("result").innerHTML = 
    "Code: " + result[0].code + "<br>" + 
      "Name: " + result[0].name + "<br>" + 
      "Gender: " + result[0].gender + "<br>" + 
      "Annual Salary: " + result[0].annualSalary + "<br>" + 
      result[0].dateOfBirth + "Date of Birth: " 
  } else {
    document.getElementById("result").innerHTML = "Employee not found";
  }
}



// async function search() {
//   let response = await fetch("ejson.json");
//   let data = await response.json();

//   let name = document.getElementById("name").value;

//   let result = data.filter(
//     x => x.name.toLowerCase() === name.trim().toLowerCase()
//   );

//   if (result.length > 0) {
//     document.getElementById("result").innerHTML =
//       "Code: " + result[0].code + "<br>" +
//       "Name: " + result[0].name + "<br>" +
//       "Gender: " + result[0].gender + "<br>" +
//       "Annual Salary: " + result[0].annualSalary + "<br>" +
//       "Date of Birth: " + result[0].dateOfBirth;
//   } else {
//     document.getElementById("result").innerHTML =
//       "Employee not found";
//   }
// }