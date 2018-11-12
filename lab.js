
alert("go");
window.onload = function(){
	setUpEvents();
}

function setUpEvents (){
	let search = document.getElementById("search_button");
	search_button.addEventListener("click",function(){
		alert("search");
	}
}