
 var contactNav = document.getElementById("navId2");
 var btn2 = document.getElementById("toggleButton2");
btn2.innerHTML = "Edit Gallery";

contactNav.style.right = "-255px";

function toggleRight(){
	contactNav.style.height = window.innerHeight - 60+"px";
	if(contactNav.style.right == "-255px"){
		contactNav.style.right = "0px";
        btn2.innerHTML = "&#8594";
	} else {
		contactNav.style.right = "-255px";
        btn2.innerHTML = "Edit Gallery";
	}
}

 



function slideOpen(el){
el.style.transition="height 0.5s linear 0s";
el.style.height="100%";
el.style.visibility="visible";
}

function slideClose(el){
  
 
el.style.transition="height 1.0s linear 0s";
el.style.height="0px";
el.style.border="none";
}
