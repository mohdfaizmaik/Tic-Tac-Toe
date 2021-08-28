var count = 1;

function fill(control) {
	if(count<=9){
		if(count%2 == 1){
		document.getElementById(control.id).innerHTML = "#";
		}
		else{
		document.getElementById(control.id).innerHTML = "0";
		}
		count++;
	}else{
		alert("Match Draw");
		reset();
	}
}

function reset(){
	for(let i=0;i<=9;i++){
		document.getElementById("div"+id).innerHTML = "";		
	}
	count =0;
}