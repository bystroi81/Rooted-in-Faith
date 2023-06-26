//This is a faith-based text editor written in JavaScript

//Create the core interface 

function createInterface() {
	//Get the main div element 
	let mainDiv = document.getElementById("main_container");

	//Create the text area
	let textarea = document.createElement("textarea");
	textarea.id = "text_area";
	textarea.rows = 30;
	textarea.cols = 70;
	textarea.placeholder = "Rooted in Faith...";
	mainDiv.appendChild(textarea);

	//Create the save button
	let saveBtn = document.createElement("input");
	saveBtn.type = "submit";
	saveBtn.id = "save_btn";
	saveBtn.value = "Save";
	mainDiv.appendChild(saveBtn);
	
	//Create the clear button
	let clearBtn = document.createElement("input");
	clearBtn.type = "submit";
	clearBtn.id = "clear_btn";
	clearBtn.value = "Clear";
	mainDiv.appendChild(clearBtn);
	
	//Create the open button
	let openBtn = document.createElement("input");
	openBtn.type = "submit";
	openBtn.id = "open_btn";
	openBtn.value = "Open";
	mainDiv.appendChild(openBtn);
	
	//Create an empty div
	let emptyDiv = document.createElement("div");
	emptyDiv.id = "empty_div";
	mainDiv.appendChild(emptyDiv);
}

//Function to save the text 

function saveText() {
	let textToSave = document.getElementById("text_area").value;
	//Check if there is any text
	if (textToSave.length > 0) {
		//Create a blob for the text 
		let textBlob = new Blob([textToSave], {type:"text/plain"});
		//Create the URL
		let blobURL = window.URL.createObjectURL(textBlob);
		//Create and download the file 
		let downloadLink = document.createElement("a");
		downloadLink.href = blobURL;
		downloadLink.download = "Rooted in Faith.txt";
		downloadLink.click();
	}
	else {
		window.alert("There is nothing to save!");
	}
}

//Function to clear the text area 

function clearText() {
	document.getElementById("text_area").value = '';
}

//Function to open a text file from the user's computer

function openFile() {
	//Create the input field 
	let openInput = document.createElement("input");
	openInput.type = "file";
	openInput.id = "open_input";
	document.getElementById("empty_div").appendChild(openInput);
	//When the user selects a file
	openInput.addEventListener("change", () => {
		//Get the file 
		let file = openInput.files[0];
		//Create the reader
		let reader = new FileReader();
		reader.readAsText(file);
		//When the reader is done
		reader.addEventListener("load", (e) => {
			//Get the text from the file
			let textFromFile = e.target.result;
			//Put it in the text area
			document.getElementById("text_area").value = textFromFile;
			//Remove the input from the DOM 
			let parent = document.getElementById("empty_div");
			let input = document.getElementById("open_input"); 
			parent.removeChild(input);
		});
	});
}

//Function to call all the other functions when the page loads 

window.onload = () => {
	//Create the interface 
	createInterface(); 
	//Add event listeners 
	document.getElementById("save_btn").addEventListener("click", saveText);
	document.getElementById("clear_btn").addEventListener("click", clearText);
	document.getElementById("open_btn").addEventListener("click", openFile);
}