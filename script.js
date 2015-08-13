
window.onload = function() {
	//wait until everything has been loaded

	console.log("JavaScript is alive");
    document.getElementById("greeting").innerText = "Hello Planet Earth";
    
    addClickListener();
    resetButton();
};

var li = document.getElementsByTagName("li");

addClickListener = function()  {

	for (var i = 0; i < li.length; i++) {

		li[i].addEventListener("click", function(){ 

			console.log(this); 
			this.classList.add("selected");
			this.style.backgroundColor = "Yellow";

		});
	}
};

resetButton = function() {
	var resetButton = document.getElementById("reset");
	resetButton.addEventListener("click", function() { 
		
		for (var i = 0; i < li.length; i++) {
			li[i].style.backgroundColor = "White";
			li[i].classList.remove("selected");
		}
	});
};