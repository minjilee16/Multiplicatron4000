const multiply= require('./adder.js')

// var matches = document.querySelectorAll("div.onButton, div.alert");

class ViewManager {


	connectEventHandlers(){
		document.getElementById("multiply")
		.addEventListener(
		   'click', 
		    this.onSubmit
		    );

		document.getElementById("textBox")
		.addEventListener(
			'click',
			this.onButton
			);	
	}

	onButton(event){
		event.preventDefault();
		// debugger;
  		 var numbers = document.getElementById("numbers");
  		 var div = document.createElement("div");
  		 var label = document.createElement("label");
  		 // label.append("Number: ");
  		 var input = document.createElement("input");
  		 input.className = "input-num";
  		 input.type= "text";
  		 input.autocomplete="off";
  		 div.appendChild(label);
  		 div.appendChild(input);
  		 numbers.appendChild(div);

	}

	onSubmit (event) {
		console.log("sdfsd");
		event.preventDefault();
		let arr =[];
		let nums = document.getElementsByClassName("input-num");
		// debugger;
		for (let i=0; i < nums.length; i++) {
			arr.push(parseInt(nums[i].value));
		}	
		alert(multiply(arr));

	}

}

const viewManager = new ViewManager(); 
viewManager.connectEventHandlers();

