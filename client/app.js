const multiply= require('./adder.js')



class ViewManager {

	connectEventHandlers(){
		document.getElementById("multiply")
		.addEventListener(
		   'click', 
		    this.onSubmit.bind(this)
		    );

		document.getElementById("textBox")
		.addEventListener(

			'click',
			this.onButton.bind(this)
			);	
	}

	onButton(event){
		event.preventDefault();
		// debugger;
  		 var numbers = document.getElementById("numbers");
  		 var div = document.createElement("div");
  		 var label = document.createElement("label");
  		 var input = document.createElement("input");
  		 input.className = "input-num";
  		 input.type= "text";
  		 input.autocomplete="off";
  		 div.appendChild(label);
  		 div.appendChild(input);
  		 numbers.appendChild(div);
	}

	onSubmit(event) {
		debugger;
		console.log("sdfsd");
		event.preventDefault();
		let arr =[];
		let nums = document.getElementsByClassNam("input-num");
		// debugger;
		for (let i=0; i < nums.length; i++) {
			arr.push(parseInt(nums[i].value));
		}	
		var result =multiply(arr); 
		this.renderMultiply(result); 
	}

	renderMultiply(output) {
		// console.log("yo");
		document.querySelector('.question').textContent = output;
	}

}

const viewManager = new ViewManager(); 
viewManager.connectEventHandlers();

