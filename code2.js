{
window.open("JavaScript_Clientside.html", "new window", "top=100,  left=100, width=640,height=480, status=yes");
var out = document.getElementById("output");
out.innerHTML += "Href : " + window.location.href
+ "<br>Protocol : " + window.location.protocol
+ "<br>Host : " + window.location.host
+ "<br>Path : " + window.location.pathname
+ "<br>Hash : " + window.location.hash ;

}