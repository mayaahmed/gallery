	var cp = document.getElementById("cp");
cp.style.left = "-1200px";

function toggleCP(){

	cp.style.height = window.innerHeight - 60+"px";
	if(cp.style.left == "-1200px"){
		cp.style.left = "5px";
	} else {
		cp.style.left = "-1200px";
	}
}
