

function invokeServerless() {

var first = document.getElementById("firstName").value;
var last = document.getElementById("lastName").value;
var age = document.getElementById("myAge").value;

//console.log(first,last,age)

var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
var theUrl = "https://edbeuksx2i.execute-api.ap-southeast-1.amazonaws.com/Dev/helloWorld";
xmlhttp.open("POST", theUrl);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send(JSON.stringify({ "first": first, "last": last, "age": age }));


xmlhttp.onload = function() {
	
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (xmlhttp.status >= 200 && xmlhttp.status < 400) {
      console.log(data.body)
	  
	  const response = document.getElementById('res')
	  response.textContent = data.body
	  const errorMessage = document.getElementById('err')
	  errorMessage.textContent = data.requestRecieved
	  
  } else {
    console.log('error')
  }
}

}