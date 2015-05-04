window.addEventListener("load", function () {

	var count = 0;
	var loc = document.querySelector("#board");
	loc.addEventListener("mouseover", function(event){
		var ig = event.target.id.toString();
		console.log(event.target)
	
	
	if (typeof(ig) != "undefined" && ig != "board"){
	
	console.log("#" + ig);

	var x = document.querySelector("#" + ig);
	   

		x.addEventListener("click", function(event){
		    
		    if (x.innerHTML !== "O" && count === 0){
		    x.innerHTML = "X";
		    x.style.backgroundColor = "red";
			console.log(event.target);
			count = 1;
			} 
			else if (x.innerHTML !== "X" && count === 1){
			x.innerHTML = "O";
		    x.style.backgroundColor = "blue";
			console.log(event.target);
			count = 0;
			}
			else {
				alert("Wrong Space!")
			}
	console.log(count)
		}); 
	}

	});


});