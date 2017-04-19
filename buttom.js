	document.getElementById("textBox").onclick = function() {
  		  var form = document.getElementById("form-numbers");
  		  var input = document.createElement("input");
   		 input.type = "text";
  		  var br = document.createElement("br");
  		  form.appendChild(input);
  		  form.appendChild(br);