function addMessage(){
    document.getElementById("output").innerHTML += "<p>I am RED</p>"
}
   
    var current ="red";

function colourChanger()
{
if( current === "red")
current = "blue";
else
current = "red";

document.getElementById("output").style.color = current;

}
