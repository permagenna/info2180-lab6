

window.onload = function(){
	setUpEvents();
};

function setUpEvents (){
	let search = document.getElementById("search_button");
	let result = document.getElementById("result");
	let get_all = document.getElementById("get_all");
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

	get_all.onclick = function (){
		let xmlRequest = new XMLHttpRequest();
		xmlRequest.onreadystatechange = function (){
			if (xmlRequest.readyState === XMLHttpRequest.DONE) {
				if (xmlRequest.status === 200) {
					let response = "<ol>";
					let text = xmlRequest.responseXML;
					let terms = text.getElementsByTagName ("definition");
					for (let i = 0; i < terms.length; i++){
						response+="<li><h3>"+terms[i].getAttribute("name")+"</h3><p>"+terms[i].childNodes[0].nodeValue+"</p><p> -"+terms[i].getAttribute("author")+"</p></li>";
					}
					response+="</ol";
					let result = document.getElementById("result");
					result.innerHTML = response;
				} else {
					result.innerHTML = ("There was a problem with the request.");
				} 
			}
		};
		xmlRequest.open("GET","request.php?q=&all=true",true);
        xmlRequest.send();

	}
}

























