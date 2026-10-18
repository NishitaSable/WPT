// function getData(dataSource) {
//   var xhr = new XMLHttpRequest();
//   let data = "";
//   console.log(xhr);
//   if (xhr) {
//     var obj = document.getElementById("targetDiv");
//     xhr.open("GET", dataSource, true);
//     xhr.send();
//     // xhr.onreadystatechange = function () {
//     //   alert(xhr.readyState);
//     //   if (xhr.readyState == 4 && xhr.status == 200) {
//     //     data = xhr.responseText;
//     //   }

//     //   obj.innerHTML = data;
//     // };
//     xhr.onload = function() {
//             if (xhr.status == 200) { 
//                 data = xhr.responseText;                 
//                 obj.innerHTML=data;
//              }      
//            }
//     dojob();
//   }
// }
// function dojob() {
//   alert("doing some other job");
// }



function loadDoc() {
            var form = document.querySelector('form');

        //  var data = {
        //         "name": form.name.value,
        //         "email": form.email.value,
        //         "department": form.department.value
        //     };
        //     console.log(data);
        let data = new FormData(form)
            
            for (var pair of data.entries()) {
                console.log(pair);
            }
            // for (var [key, value] of data) {
            //     console.log(key + ', ' + value);

            // }

           jsondata = {}
            for (var [key, value] of data) {
                jsondata[key] = value;
            }
            console.log(jsondata)
            let jdata = JSON.stringify(data);
            console.log(jdata);
                      var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                    document.getElementById("demo").innerHTML = "Data inserted"
                }
            };
            xhttp.open("POST", "https://localhost:7115/api/Employee", true);
            xhttp.setRequestHeader('Content-Type', 'application/json');
            xhttp.send(jdata);
        }