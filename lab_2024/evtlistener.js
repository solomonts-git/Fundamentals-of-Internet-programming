document.getElementById("p1").addEventListener("click",testEvtListener);
document.getElementById("p1").addEventListener("mouseover",testEvtListener1);

function testEvtListener(){
	document.getElementById("p1").innerHTML="Event listener Changed me";
}
function testEvtListener1(){
	document.getElementById("p1").style.color="red";
}