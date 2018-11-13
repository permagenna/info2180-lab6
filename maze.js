

window.onload = function(){
	setUpEvents();
};

function setUpEvents (){
	let search = document.getElementById("search_button");
	let result = document.getElementById("result");
	
	search.onclick = function(){
		let httpRequest = new XMLHttpRequest();
		let value = document.getElementById("word").value;
		var url = "https://info2180-lab6-perma4thgenna.c9users.io/request.php?q=";

	   	httpRequest.onreadystatechange = function (){

	   		if (httpRequest.readyState === XMLHttpRequest.DONE) {
				if (httpRequest.status === 200) {
					var response = httpRequest.responseText;
					result.innerHTML = response;
				} else {
					result.innerHTML = ("There was a problem with the request.");
					} 
				}
			};
	   	httpRequest.open('GET', url+value, true);
	   	httpRequest.send();
	};
}

