

window.onload = function(){
	setUpEvents();
}

function setUpEvents (){
	let search = document.getElementById("search_button");
	search.onclick = function(){
		let httpRequest = new XMLHttpRequest();
		var url = "https://info2180-lab6-perma4thgenna.c9users.io/request.php?q=definition";

	   	httpRequest.onreadystatechange = function (){

	   		if (httpRequest.readyState === 4) {
				if (httpRequest.status === 200) {
					var response = httpRequest.responseText;
					alert(response);
				} else {
					alert('There was a problem with the request.');
					} 
				};
			}
	   	httpRequest.open('GET', url, true);
	   	httpRequest.send();
	}
}

